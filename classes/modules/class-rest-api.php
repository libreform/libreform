<?php

namespace WPLF;

class RestApi extends Module {
  public $namespace = 'wplf/v2';

  public function __construct(Plugin $wplf) {
    parent::__construct($wplf);

    $this->registerEndpoints();
  }

  public function registerEndpoints() {
    $this->registerSubmitEndpoint();
    $this->registerSubmissionsEndpoint();
    $this->registerRenderEndpoint();
    $this->registerFormEndpoints();
  }

  public function registerSubmissionsEndpoint() {
    $endpoint = 'getSubmissions';

    register_rest_route($this->namespace, $endpoint, [
      'callback' => [$this, 'getSubmissions'],
      'methods' => ['GET'],
      'permission_callback' => '\WPLF\currentUserIsAllowedToUse',
      'permission_callback' => '__return_true',
    ]);
  }

  public function registerRenderEndpoint() {
    $endpoint = 'renderForm';

    register_rest_route($this->namespace, $endpoint, [
      'callback' => [$this, 'renderForm'],
      'methods' => ['POST'],
      'permission_callback' => '\WPLF\currentUserIsAllowedToUse',
    ]);
  }

  public function registerSubmitEndpoint() {
    $endpoint = 'submitForm';

    register_rest_route($this->namespace, $endpoint, [
      'callback' => [$this, 'submitForm'],
      'methods' => ['GET', 'POST'],
      'permission_callback' => '__return_true', // Always allow submissions
    ]);
  }

  public function registerFormEndpoints() {
    $endpoint = 'getForm';

    register_rest_route($this->namespace, $endpoint, [
      'callback' => [$this, 'getForm'],
      'methods' => ['GET'],
      'permission_callback' => '__return_true', // Always allow getting form
    ]);
  }

  public function createError(Error $e) {
    return new \WP_REST_Response([
      'error' => $e->getMessage(),
      'data' => $e->getData(),
      'kind' => 'apiError',
    ], 500);
  }

  /**
   * $kind is used for easily differentiating between types of responses
   */
  public function createResponse(string $kind, $data) {
    return new \WP_REST_Response([
      'kind' => $kind,
      'data' => $data
    ]);
  }

  public function getForm($request) {
    $params = $request->get_params();
    $formId = $params['form'] ?? null;

    try {
      $form = new Form(getFormPostObject($formId));
      $form->setFields($this->io->form->getFields($form));

      $response = $this->createResponse('getForm', $form);
      $response->set_headers(array_merge($response->get_headers(), [
        // 'X-WP-Total' => count($submissions),
        // 'X-WP-TotalPages' => $totalPages,
      ]));

      return $response;
    } catch (Error $e) {
      isDebug() && log($e->getMessage());

      return $this->createError($e);
    }
  }

  public function getSubmissions($request) {
    $params = $request->get_params();
    $formId = $params['form'] ?? null;
    $page = (int) ($params['page'] ?? 0);

    try {
      $form = new Form(getFormPostObject($formId));
      $form->setFields($this->io->form->getFields($form));

      if (!$form->isPublished()) {
        throw new Error(__('Form is not published', 'wplf'));
      }


      [$submissions, $totalPages] = $this->io->form->getSubmissions($form, $page);

      $response = $this->createResponse('getSubmissions', $submissions);
      $response->set_headers(array_merge($response->get_headers(), [
        'X-WP-Total' => count($submissions), // Total number of results in this response
        'X-WP-TotalPages' => $totalPages,
      ]));

      return $response;
    } catch (Error $e) {
      isDebug() && log($e->getMessage());

      return $this->createError($e);
    }
  }

  public function renderForm($request) {
    $params = $request->get_params();
    $formId = $params['formId'] ?? null;
    $form = $params['form'] ?? null;
    $lang = $params['lang'] ?? null;
    $html = $params['content'] ?? null;

    if ($this->polylang && $lang) {
      /**
       * What needs to be done: convert $lang (language code) into a locale (en_US) to support most languages.
       *
       * Does it work? Maybe.
       *
       * In my tests, the language is already en_US and it doesn't seem to work most of the time.
       * It works if the form is configured to FINNISH and then overridden here, but a form in ENGLISH doesn't translate.
       */
      switch_to_locale(sanitize_text_field($lang));
    }

    try {
      $form = new Form(getFormPostObject($form));
      $form->setFields($this->io->form->getFields($form));
      $html = $this->core->render($form, ['content' => $html, 'printAdditionalFields' => false], true);

      $response = $this->createResponse('renderForm', [
        'html' => trim($html),
        'form' => $form
      ]);

      return $response;
    } catch (Error $e) {
      isDebug() && log($e->getMessage());

      return $this->createError($e);
    }
  }

  public function submitForm($request) {
    $params = $request->get_params();
    $formId = $params['_formId'] ?? null;

    try {
      $errorsWereOn = $this->io->hideDbErrors();
      $form = new Form(getFormPostObject($formId));
      $form->setFields($this->io->form->getFields($form));

      // If there's a _nojs present in the form submission, user doesn't have JavaScript on.
      $useFallback = apply_filters('wplfSetNoJsFallback', isset($params['_nojs']), $form);

      // You can disable the fallback entirely if you need to.
      $allowFallback = apply_filters('wplfAllowNoJsFallback', true, $form);

      $entries = array_merge($params, $request->get_file_params());
      $submission = $this->io->submission->create($form, $entries);

      if ($useFallback) {
        if (!$allowFallback) {
          throw new Error(__('JavaScript is required to submit the form. Enable JavaScript before continuing.', 'wplf'));
        }

        $referrer = $submission->getReferrer();
        $url = $referrer['url'];

        /**
         * @see https://github.com/libreform/libreform/issues/10
         */
        $referrerContainsParams = strpos($url, '?');
        $url = $url . ($referrerContainsParams ? '&' : '?') . "wplfAfterSubmissionOfFormId=$formId&wplfSubmissionUuid=$submissionUuid";

        if ($errorsWereOn) {
          $this->io->showDbErrors();
        }

        header("Location: $url");
        return;
      }

      $response = $this->createResponse('submitForm', [
        'submission' => $submission,
        'message' => $this->selectors->parse($form->getSuccessMessage(), $form, $submission),
      ]);

      return $response;
    } catch (Error $e) {
      isDebug() && log($e->getMessage());

      if ($useFallback) {
        wp_die(
            '<h1>' . $e->getMessage() . '</h1>' .
            '<p>' . esc_html__('Go back to the previous page and try again.', 'wplf') . '</p>',
            400
        );

        exit;
      }

      return $this->createError($e);
    }
  }
}
