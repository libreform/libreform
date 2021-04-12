<?php

namespace WPLF;

const DB_OUTPUT_TYPE = \ARRAY_A;

class Plugin {
  // Always loaded in this order
  public $io;
  public $settings;
  public $notices;
  public $selectors;
  public $addons;

  // Loaded conditionally
  public $restApi;
  public $adminInterface;
  public $polylang;

  // Passed in the constructor
  public $version;
  public $url;
  public $dirname;

  public static $postType = 'libreform';

  public function __construct($data = []) {
    $this->version = $data['version'] ?? null;
    $this->url = $data['url'] ?? null;
    $this->dirname = $data['dirname'] ?? null;

    require_once 'entities/class-module.php';
    require_once 'entities/class-error.php';
    require_once 'entities/class-form.php';
    require_once 'entities/class-submission.php';
  }

  public function initialize() {
    $this->loadModule('io');
    $this->loadModule('settings');
    $this->loadModule('notices');
    $this->loadModule('selectors');
    $this->loadModule('addons');

    if (apply_filters('wplfEnablePolylangSupport', true) && class_exists('Polylang')) {
      $this->loadModule('polylang');
    }

    if (is_admin()) {
      $this->loadModule('admin-interface');
    }

    if (!$this->settings->get('historyTableCreated')) {
      try {
        $this->io->db->createHistoryTable();
      } catch (Error $e) {
        log("Unable to create history table: " . $e->getMessage());
      }
    }

    add_shortcode('libreform', [$this, 'shortcode']);
    $this->initializeActions();
    $this->initializeFilters();
  }

  private function initializeActions() {
    add_action('rest_api_init', [$this, 'afterRestApiInit']);


    add_action('wp', [$this, 'afterInit']);
    add_action('admin_footer', [$this, 'enqueueAdminAssets'], 9);


    add_action('wp_enqueue_scripts', [$this, 'enqueueFrontendAssets'], 9);


    add_action('init', [$this, 'registerPostType']);
    add_action('wp', [$this, 'preventDirectAccess']);
    add_action('save_post', [$this, 'afterSavePost'], 10, 3); // Save the meta
    add_filter('content_save_pre', '\WPLF\stripFormTags', 10, 1); // Strip form tags from the content, we add our own


    add_action('before_delete_post', [$this, 'beforeDeleteForm']);
    add_action('delete_post', [$this, 'deleteForm']);

    // Change the contents of the columns we just changed
    add_action('manage_' . self::$postType . '_posts_custom_column', function ($column, $postId) {
      // Change column contents
      $form = new Form(getFormPostObject($postId));


      if ($column === 'shortcode') { ?>
        <input type="text" class="code" value='[libreform id="<?php echo intval($postId); ?>"]' readonly><?php
      }

      if ($column === 'submissions') {
        if ($form->isPublished()) {
          [$submissions, $pages, $count] = $this->io->form->getSubmissions($form, 0, 1);
        } else {
          $count = 0;
        }
        ?>

        <a href="<?=esc_url_raw(admin_url("post.php?post={$form->ID}&action=edit"))?>">
          <?=$count?>
        </a><?php
      }
    }, 10, 2);
  }

  private function initializeFilters() {
    // If direct access to form is allowed, replace the HTML content with a form
    add_filter('the_content', [$this, 'replaceContentWithFormOnSingleForm'], 0);

    // Change columns in edit.php
    add_filter('manage_edit-' . self::$postType . '_columns', function ($columns) {
      // Change columns
      return [
        'cb' => $columns['cb'],
        'title' => $columns['title'],
        'shortcode' => __('Shortcode', 'wplf'),
        'submissions' => __('Submissions', 'wplf'),
        'date' => $columns['date'],
      ];
    }, 100, 1);
  }

  public function afterInit() {
    $path = '/' . $this->dirname . '/assets/lang/'; // Why doesn't this work?
    $success = load_plugin_textdomain('libreform', false, $path);

    if (!$success) {
      $success = load_muplugin_textdomain('libreform', $path);

      if (!$success && isDebug()) {
        log('Failed to load WP Libre Form textdomain' . $path);
      }
    }
  }

  public function afterRestApiInit() {
    $this->loadModule('rest-api');
  }

  public function getLocalizeScriptData(array $additional = []) {
    $x = array_merge([
      'backendUrl' => rest_url('wplf/v2'),
      'fetchCredentials' => 'same-origin', // Send cookies with form
      'requestHeaders' => (object) apply_filters('wplfSubmissionHeaders', [
        'X-WP-Nonce' =>  wp_create_nonce('wp_rest'),
      ]),

      'assetsDir' => $this->url . '/assets',
      'settings' => [
        'autoinit' => $this->settings->get('autoinit'),
        'parseLibreformShortcodeInRestApi' => $this->settings->get('parseLibreformShortcodeInRestApi'),
        // 'hasUnfilteredHtml' => $isMS ? $hasUnfiltered ? true : false : true,
        'hasUnfilteredHtml' => currentUserIsAllowedToSave(),
        'debugLevel' => isDebug() ? 'all' : 'errors',
      ],
      'i18n' => [
        'problems' => __('Problems: ', 'wplf'),
        'duplicateFieldName' => __('Duplicate field name: ', 'wplf'),
        'illegalName' => __("You can't use {name} as a name, as it conflicts with a core field name.", 'wplf'),
        'fieldAlreadyExistsInDb' => __('Field already exists in the database with the type {type}, use a different name or remove the field first.', 'wplf'),
        'groupedNamesNotSupportedYet' => __('Field names like these are not supported yet. Try using camelCasing or under_scores for grouped names instead.', 'wplf'),
        'noSubmissionsYet' => __('No submissions yet.', 'wplf'),
        'loading' => __('Loading...', 'wplf'),
        'delete' => __('Delete', 'wplf'),
        'edit' => __('Edit', 'wplf'),
        'close' => __('Close', 'wplf'),
        'export' => __('Export', 'wplf'),
        'attachment' => __('Attachment', 'wplf'),
        'emptyField' => __('(empty)', 'wplf'),
        'formSubmission' => __('Form submission', 'wplf'),
        'noUnfilteredHtml' => __("You don't have enough permissions to save HTML, which means you can't edit forms. You can view the submissions and examine the options, but you can't change anything in the form.", 'wplf'),
        'deleteSubmissionsPrompt' => __('Delete selected submissions?', 'wplf'),
        'formSubmissionRequestFailed' => __('Request to submit form failed', 'wplf'),
        'unableToAttachWPLF' => __('Unable to attach WPLF to element', 'wplf'),
      ]
    ], $additional);

    return $x;
  }

  public function enqueueAdminAssets() {
    $version = isDebug() ? date('U') : $this->version;
    $cm = wp_enqueue_code_editor(['type' => 'text/html']);
    $cm = array_replace_recursive($cm, [
      'codemirror' => [
        'theme' => 'monokai',
        'indentUnit' => 2,
        'indentWithTabs' => false, // we're not savages
        'inputStyle' => 'contenteditable',
        'lineNumbers' => false, // Who cares?
        'lint' => false, // The lint is blind to our indentUnit settings and is pretty annoying since it doesn't really help
      ],
    ]);

    wp_enqueue_script('wp-theme-plugin-editor');
    wp_enqueue_style('wp-codemirror');

    wp_enqueue_script('wplf-admin', $this->url . ( isDebug() ? '/dist/wplf-admin.js' : '/dist/wplf-admin.min.js'), ['react', 'react-dom'], $version, true);
    wp_enqueue_style('wplf-admincss', $this->url . (isDebug() ? '/dist/wplf-admin.css' : '/dist/wplf-admin.min.css'), [], $version);

    wp_localize_script('wplf-admin', 'wplfData', apply_filters('wplfAdminData', $this->getLocalizeScriptData([
      'codeMirror' => $cm,
      'post' => $GLOBALS['post'] ?? null,
      'adminUrl' => admin_url(),
    ])));
  }

  public function enqueueFrontendAssets() {
    $version = isDebug() ? date('U') : $this->version;
    $data = apply_filters('wplfFrontendData', $this->getLocalizeScriptData());

    wp_register_script(
        'wplf-frontend',
        $this->url . (isDebug() ? '/dist/wplf-frontend.js' : '/dist/wplf-frontend.min.js'),
        [],
        $version,
        true
    );
    wp_enqueue_style('wplf-frontend', $this->url . (isDebug() ? '/dist/wplf-frontend.css' : '/dist/wplf-frontend.min.css'), [], $version);
    wp_localize_script('wplf-frontend', 'wplfData', $data);
  }

  /**
   * Plugin activation hook. Must be a static method to work.
   */
  public static function onActivation() {
    isDebug() && log('Activated');

    flush_rewrite_rules();
  }

  /**
   * Plugin deactivation hook. Must be a static method to work.
   */
  public static function onDeactivation() {
    isDebug() && log('Deactivated');

    flush_rewrite_rules();
  }

  /**
   * Plugin uninstall hook. Called by uninstall.php.
   * Unreliable, if plugin is uninstalled by removing the files, this will obviously not run. Should probably add a dedicated "remove data and deactivate" button instead.
   */
  public function onUninstall() {
    // $this->io->destroyHistoryFields();

    // foreach ($this->io->getForms() as $form) {
    //   $form->delete();
    //   $this->io->destroyFormSubmissionsTable($form);
    // }
  }

  /**
   * Modules must be named as class-kebab-case.php, and they must contain a class with the
   * same name in PascalCase: class KebabCase extends X {}.
   */
  private function loadModule(string $moduleName, ...$params) {
    $path = "modules/class-$moduleName.php";

    require_once $path;

    $className = str_replace('-', '', ucwords($moduleName, '_')); // Convert to PascalCase
    $instanceVariable = lcfirst($className);
    $namespacedClassName = "\\WPLF\\$className";

    $module = new $namespacedClassName($this, ...$params);
    $this->{$instanceVariable} = $module;
  }

  /**
   * Delete all submissions, as the foreign keys prevent the form from being deleted.
   */
  public function beforeDeleteForm(int $postId) {
    $post = getFormPostObject($postId);

    if ($post->post_type === self::$postType) {
      $form = new Form($post);
      $submissionCount = $this->io->form->getSubmissionCount($form);
      $allowDeletionWithSubmissions = $this->settings->get('allowDangerousDelete');

      do_action("wplfBeforeDeleteForm", $form, $submissionCount);

      if ($submissionCount > 0 && !$allowDeletionWithSubmissions) {
        $errorMessage = __('Form has submissions, and allowDangerousDelete is turned off. Delete the submissions before deleting the form.', 'wplf');

        if (isRest()) { // Can't show wp_die in rest api
          throw new Error($errorMessage);
        }

        wp_die(
          $errorMessage,
          409
        );
      }


      try {
        $totalPages = 999999;
        $page = 0;

        while ($page < $totalPages) {
          [$submissions, $totalPages] = $this->io->form->getSubmissions($form, $page++);

          foreach ($submissions as $submission) {
            $this->io->submission->delete($submission);  // Will throw if unsuccesful
          }
        }

        $this->io->db->destroyHistoryFields($form);
        $this->io->db->destroyFormSubmissionsTable($form);
      } catch (Error $e) {
        $message = $e->getMessage();

        if (isRest()) {
          throw new Error($message);
        }

        $errorMessage = __("Something went wrong while deleting submissions. If this happens again, please file an issue in our GitHub repository. $message");


        wp_die(
          $errorMessage,
          409
        );
      }
    }
  }

  public function deleteForm(int $postId) {
    $post = getFormPostObject($postId);

    if ($post->post_type === self::$postType) {
      do_action("wplfDeleteForm", new Form($post));

      $this->deleteTransients();
    }
  }

  public function afterSavePost($formId, $form, $isUpdate) {
    if ($form->post_type !== Plugin::$postType) {
      return;
    }

    $form = new Form($form);
    $nonce = $_POST['wplfSavePostNonce'] ?? null;
    $nonceIsValid = wp_verify_nonce($nonce, 'wplfSavePostNonce');
    $currentUserCanEdit = current_user_can('edit_post', $form->ID);
    $isTheRightPostType = $_POST['post_type'] ?? false === self::$postType;
    $weaseledThroughDespiteNotSupposedTo = ($_POST['wplfAllowSave'] ?? '0') === '0';
    $hasUnfilteredHtml = !is_multisite() || current_user_can('unfiltered_html');

    if (!$isUpdate) {
      // New form, better add version.
      $form->setVersionCreatedAt($this->version);
    }

    if (!$isTheRightPostType || !$nonceIsValid || !$currentUserCanEdit) {
      return;
    } elseif (!$hasUnfilteredHtml) {
      wp_die(
        '<h1>' . esc_html__('You do not have unfiltered_html capability', 'wplf') . '</h1>' .
        '<p>' . esc_html__('Only Super Admins have unfiltered_html capability by default in WordPress Network.', 'wplf') . '</p>',
        403
      );
    }

    $this->deleteTransients();
    $this->render($form, [], true); // Render in admin context so selectors can do stuff

    // If the value doesn't exist in $_POST, the box was unticked.
    $val = (int) ($_POST['wplfAddToMediaLibrary'] ?? 0);
    $form->setAddToMediaLibraryValue($val);
    $form->setSuccessMessage($_POST['wplfSuccessMessage'] ?? __('Success!', 'wplf'));

    $form->setDestroyUnusedDatabaseColumnsValue((int) ($_POST['wplfDestroyUnusedDatabaseColumns'] ?? 0));
    /**
     * Typically the format will include characters like <, >, %. Sanitize functions mess up the value.
     * The value is only displayed in the same input that it came from, where it is escaped at runtime.
     */
    $form->setSubmissionTitleFormat($_POST['wplfSubmissionTitleFormat'] ?? null);

    /**
     * We may add a feature that changes how the form behaves. That might break forms
     * so this acts as a "feature freeze", giving control of the feature to the user.
     */
    $updateAllowed = $_POST['wplfUpdateVersionCreatedAt'] ?? false === '1';

    // No real harm in saving the earlier values, but updating our tables is a no-no.
    if ($weaseledThroughDespiteNotSupposedTo) {
      wp_die(
          '<h1>' . esc_html__('This is for your own good', 'wplf') . '</h1>' .
          '<p>' . esc_html__(
              'The form was not allowed to save, but you tried to anyway. The content has been saved, but the fields were not. Go back and fix the problems, then try again. If you ignore this message the form may not be able to receive submissions.',
              'wplf'
          ) . '</p>',
          403
      );
    }

    $fields = json_decode(stripslashes($_POST['wplfFields'] ?? '[]'), true);
    $form->setFields($fields, true);

    if ($updateAllowed) {
      $form->setVersionCreatedAt($this->version);
    }

    $createdWithVersion = $form->getVersionCreatedAt();
    $pre21 = version_compare($createdWithVersion, '2.1.0', '<');

    if ($pre21) {
      $form->setEmailNotificationData([
        'enabled' => (bool) ($_POST['wplfEmailCopyEnabled'][0] ?? false), // booleans are ok in postmeta if inside array
        'to' => sanitizeEmailAddressesWhileAllowingSelectors($_POST['wplfEmailCopyTo'][0] ?? ''),
        'from' => sanitizeEmailAddressesWhileAllowingSelectors($_POST['wplfEmailCopyFrom'][0] ?? ''),
        'subject' => sanitize_text_field($_POST['wplfEmailCopySubject'][0] ?? ''),
        'content' => wp_kses_post($_POST['wplfEmailCopyContent'][0] ?? ''),
      ]);
    } else {
      $emnFields = [
        'enabled' => $_POST['wplfEmailCopyEnabled'] ?? [],
        'to' => $_POST['wplfEmailCopyTo'] ?? [],
        'from' => $_POST['wplfEmailCopyFrom'] ?? [],
        'subject' => $_POST['wplfEmailCopySubject'] ?? [],
        'content' => $_POST['wplfEmailCopyContent'] ?? []
      ];

      // Email notification fields are arrays. We only need to check one of the field counts to know how many emails to send & validate.
      $copyCount = count($emnFields['to']);
      $emailNotif = [];

      for ($i = 0; $i < $copyCount; $i++) {
        $emailNotif[] = [
          'enabled' => (bool) ($emnFields['enabled'][$i] ?? false), // booleans are ok in postmeta if inside array
          'to' => sanitizeEmailAddressesWhileAllowingSelectors($emnFields['to'][$i] ?? ''),
          'from' => sanitizeEmailAddressesWhileAllowingSelectors($emnFields['from'][$i] ?? ''),
          'subject' => sanitize_text_field($emnFields['subject'][$i] ?? ''),
          'content' => wp_kses_post($emnFields['content'][$i] ?? ''),
        ];
      }

      $form->setEmailNotificationData($emailNotif);
    }


    try {
      if (!$form->isSubmissionsTableCreated()) {
        $this->io->db->createFormSubmissionsTable($form);
      }

      /**
       * $newFields and $deletedFields are not saved. They are used for
       * database mutations.
       */
      $newFields = json_decode(stripslashes(($_POST['wplfNewFields'] ?? '[]')), true);
      $deletedFields = json_decode(stripslashes(($_POST['wplfDeletedFields'] ?? '[]')), true);
      $destroyUnusedDbColumns = $form->getDestroyUnusedDatabaseColumnsValue();

      if ($newFields || $deletedFields) {
        if (!$destroyUnusedDbColumns && $deletedFields) {
          isDebug() && log('Preventing deletion of fields.');

          $deletedFields = null;
        }

        $this->io->db->updateFormSubmissionsTable($form, $newFields, $deletedFields);

        if ($deletedFields) {
          // The history of the form also has to go. Otherwise the field names stay reserved.
          $this->io->db->destroyHistoryFields($form);
        }
      }
    } catch (Error $e) {
      $msg = $e->getMessage();

      isDebug() && log("Database error: {$msg}");

      // The user should probably be notified directly, but there's no easy way to do it from this hook, other than wp_die, which I'd rather not use.

      // But I'll do it anyway, because it's a nightmare to debug otherwise.
      wp_die($msg, 'WP Libre Form error');
    }
  }

  public function replaceContentWithFormOnSingleForm($content) {
    $post = getFormPostObject();

    if (!isset($post->post_type) || $post->post_type !== self::$postType) {
      return $content;
    }

    $form = new Form($post);
    return $this->render($form, [], true);
  }

  public function preventDirectAccess() {
    if (!is_singular(self::$postType)) {
      return;
    }

    $post = getFormPostObject();
    $allowDirect = $this->settings->get('allowDirect');
    $currentUserCanEditForm = current_user_can('edit_post', $post->ID);

    if (!$allowDirect && !$currentUserCanEditForm) {
      global $wp_query;
      $wp_query->set_404();
    }
  }

  public function registerPostType() {
    $args = [
      'labels' => [
        'name' => _x('Forms', 'post type general name', 'wplf'),
        'singular_name' => _x('Form', 'post type singular name', 'wplf'),
        'menu_name' => _x('Libre Form', 'admin menu', 'wplf'),
        'name_admin_bar' => _x('Form', 'add new on admin bar', 'wplf'),
        'add_new' => _x('New Form', 'form', 'wplf'),
        'add_new_item' => __('Add New Form', 'wplf'),
        'new_item' => __('New Form', 'wplf'),
        'edit_item' => __('Edit Form', 'wplf'),
        'view_item' => __('View Form', 'wplf'),
        'all_items' => __('All Forms', 'wplf'),
        'search_items' => __('Search Forms', 'wplf'),
        'not_found' => __('No forms found.', 'wplf'),
        'not_found_in_trash' => __('No forms found in Trash.', 'wplf'),
      ],
      'public'              => true,
      'publicly_queryable'  => true,
      'exclude_from_search' => true,
      'show_ui'             => true,
      'show_in_menu'        => true,
      'menu_icon'           => 'dashicons-archive',
      'query_var'           => false,
      'capability_type'     => 'post',
      'has_archive'         => false,
      'hierarchical'        => false,
      'menu_position'       => null,
      'rewrite'             => [
        'slug' => 'libreforms',
      ],
      'supports'            => array(
        'title',
        'editor',
        'revisions',
      ),
      'show_in_rest' => false,
    ];

    register_post_type(self::$postType, $args);
  }

  /**
   * Delete all form related transients
   */
  public function deleteTransients() {
    // delete_transient('wplf-template-override');
    // delete_transient('' . self::$postType . '-filter');
  }

  public function shortcode($atts, $content = null) {
    $attributes = shortcode_atts([
      'id' => null,
      'classname' => '',
    ], $atts, 'wplf');

    // Allow disabling shortcode parsing in API requests.
    $isRest = isRest();
    $parseInApi = $this->settings->get('parseLibreformShortcodeInRestApi');

    // Direct requests should contain it though.
    $isWplfEndpoint = strpos($_SERVER['REQUEST_URI'], '/wp-json/wp/v2/' . self::$postType . '') !== false;

    // Because shortcode parsing can't actually be disabled, we output the "same" shortcode
    // instead of the form. This also normalizes the shortcodes.
    if ($isRest && !$isWplfEndpoint && !$parseInApi) {
      $props = [];

      // If you change how the shortcode is rebuilt,
      // it's a breaking change and must be versioned accordingly.
      foreach ($attributes as $k => $v) {
        $props[] = "$k=\"$v\"";
      }

      return '[libreform ' . join($props, ' ') . ']';
    }

    // we don't render id and class as <form> attributes, unset them with array_diff_key
    $id = $attributes['id'];
    $className = $attributes['classname'] ?? null;

    $attributes = array_diff_key($atts, array(
      'id' => null,
      'classname' => null,
    ));

    // Normalize the attributes
    foreach ($attributes as $k => $v) {
      if (is_numeric($k)) {
        unset($attributes[$k]);

        $attributes[$v] = null;
      }
    }

    try {
      $form = new Form(getFormPostObject($id));

      return $this->render($form, $this->getRenderOptions([
        'className' => $className,
        'attributes' => $attributes,
      ]));
    } catch (Error $e) {
      return $e->getMessage();
    }
  }

  public function render(Form $form, $renderOptions = [], $force = false) {
    /**
     * Allow rendering even if the form is not published.
     * The custom preview system doesn't trigger is_preview() but it must be able to render.
     */
    if ($form->isPublished() || is_preview() || $force) {
      $afterSubmissionOfFormId = (int) ($_GET['wplfAfterSubmissionOfFormId'] ?? 0);
      $submissionUuid = ($_GET['wplfSubmissionUuid'] ?? false);

      if ($afterSubmissionOfFormId && $submissionUuid) {
        /**
         * These parameters are set by the /submit endpoint if the form was submitted with the _nojs field present, triggering the fallback,
         * which in turn displays the success message configured for the form.
         *
         * The success message can use selectors like ## SUBMISSION ##,
         * which require the $submission to be present.
         *
         * Theoretically, that means you can make yourself vulnerable to an enumeration attack. See docs/concerns.md
         */
        $renderOptions['renderNoJsFallback'] = true;
        $submission = $this->io->db->getSubmissionByUuid($form, $submissionUuid);
      } else {
        $submission = null;
      }

      if (!isRest()) {
        wp_enqueue_script('wplf-frontend');
      }

      ob_start();
      $this->renderForm($form, $renderOptions, $submission);

      $output = ob_get_clean();
      $output = $this->selectors->parse($output, $form, $submission);
      $output = apply_filters('wplfAfterRender', $output, $form, $renderOptions);
      $output = minifyHtml($output); // Minify after filter, I doubt that anyone wants the minified HTML

      return $output;
    }

    isDebug() && log("Form $form->ID is not published");
    return false;
  }

  public function getRenderOptions($settings = []) {
    $defaults = [
      'attributes' => [],
      'printAdditionalFields' => true,
      'content' => null,
      'className' => null,
      'renderNoJsFallback' => false, // When true, will show the success message above the form.
      'renderFormTags' => true,
    ];

    return array_replace_recursive($defaults, $settings);
  }

  public function renderForm(Form $form, $options = [], Submission $submission = null) {
    $options = $this->getRenderOptions($options);
    $submission = apply_filters('wplfFormRenderSubmission', $submission, $this, $options);
    $content = apply_filters('wplfImportFormTemplate', $options['content'] ?? $form->content, $form);
    $attributes = $options['attributes'];
    $className = $options['className'];
    $renderNoJsFallback = $options['renderNoJsFallback'];
    $printAdditionalFields = $options['printAdditionalFields'];
    $renderFormTags = $options['renderFormTags'];

    if (!$content) {
      $content = $this->post_content;
    }

    $content = shortcode_unautop(convert_chars(convert_smilies($content)));
    $content = apply_filters('wplfBeforeRender', $content, $form, $options);

    $postContainsFileInputs = ( // faster than regex
      strpos($content, "type='file'") !== false ||
      strpos($content, 'type="file"') !== false ||
      strpos($content, 'type=file') !== false
    );

    $id = intval($form->ID);

    // Values that are falsy will be filtered out
    $attributes = array_filter([
      'data-form-id' => $id,
      'data-form-slug' => $form->slug,
      'tabindex' => '-1',
      'class' => join(' ', array_filter(["wplf-form", "wplf-form-$id", $className])),
      'enctype' => $postContainsFileInputs ? 'multipart/form-data' : null,
      'method' => 'POST',
      'action' => rest_url('wplf/v2/submitForm')
    ]);
    ?>

    <?php if ($renderFormTags) { ?>
      <form
        <?php foreach ($attributes as $attr_name => $attr_value) {
          echo esc_attr($attr_name) . '="' . esc_attr($attr_value) . "\"\n";
        } ?>
      >
      <?php
    }

      if ($renderNoJsFallback) { ?>
        <div class="form-notice form-notice__thankyou wplf-submitfallback">
          <?=$this->selectors->parse($form->getSuccessMessage(), $form, $submission); ?>
        </div><?php
      }

      // This is where we output the user-input form html. We allow all HTML here. Yes, even scripts.
      echo $content;

      if ($printAdditionalFields) {
      // Prove yourself human by NOT filling this field
      ?>
        <div class="wplf-formRow wplf-fcaptcha" aria-hidden="true">
          <label>
            <strong>Prove that you are a human</strong>

            <input type="text" name="_fcaptcha">
          </label>
        </div>

        <div class="wplf-formMeta" aria-hidden="true">
          <?php
          $isArchive = is_archive();
          $referrerData = $isArchive ? [
            'type' => 'archive',
            'title' => get_the_archive_title(),
            'url' => currentUrl(),
          ] : [
            'type' => 'singular',
            'id' => get_the_ID(),
            'url' => currentUrl(),
          ]; ?>

          <input type="hidden" name="_referrerData" value='<?=json_encode($referrerData)?>'>
          <input type="hidden" name="_nojs" value="1">
          <input type="hidden" name="_formId" value="<?=$id?>">
        </div>
        <?php
      }

    if ($renderFormTags) { ?>
    </form>

    <?php }
  }
}
