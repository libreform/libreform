<?php

namespace WPLF;

class Form {
  public $ID;
  public $slug;
  public $title;
  public $fields = null;
  public $content = null;
  public $additionalFields; // meta etc
  public $addToMediaLibrary;
  public $versionCreatedAt;

  private $raw;

  /**
   * Since it's not possible to extend WP_Post, a bit of magic will do.
   * $this->something will look at this class first, if it doesn't exist, it looks at the WP_Post class.
   * It's important for the FORM selector.
   */
  public function __get(string $name) {
    $existsHere = isset($this->$name) ? $this->$name : false;
    $existsInPost = isset($this->raw->$name) ? $this->raw->$name : false;

    return  $existsHere ?: $existsInPost ?: null;
  }

  public function __construct(?\WP_Post $form, $fields = []) {
    if (!$form) {
      throw new Error('No post provided');
    } elseif ($form->post_type !== Plugin::$postType) {
      throw new Error("Post ID {$this->ID} is not a form");
    }

    $this->ID = (int) $form->ID;
    $this->title = $form->post_title;
    $this->content = $form->post_content;
    $this->slug = $form->post_name;
    $this->raw = $form;

    /**
     * There are two possible locations for the field data; The history table, and postmeta of the form.
     *
     * While the most recent version of the fields reside in postmeta, we intentionally avoid setting them by default, so you avoid passing the wrong fields when you should've used ones from history.
     *
     * Most of the time the fields aren't even required, and if they are, you can get them by using io->getFormFields().
     */
    if ($fields) {
      $this->setFields($fields);
    }

    // $this->fields = $this->getFields();
    $this->additionalFields = $this->getAdditionalFields();
    $this->addToMediaLibrary = $this->getAddToMediaLibraryValue();
    $this->versionCreatedAt = $this->getVersionCreatedAt();
  }

  /**
   * Fields are stored with a prefix to separate user data from core data
   * but we can't show that prefix to the user.
   */
  public function getFieldOriginalName(string $fieldName) {
    return str_replace('field', '', $fieldName);
  }

  /**
   * Get database column name for the field
   */
  public function getFieldColumnName(string $fieldName) {
    return 'field' . ($fieldName);
  }

  /**
   * Get raw WP_Post object that the Form is based on
   */
  public function getPost() {
    return $this->raw;
  }

  /**
   * Get WPLF spesific post meta for this form
   */
  public function getMeta(string $name, $default = null) {
    // Keys are prefixed with _ to make them "hidden"

    return get_post_meta($this->ID, "_wplf" . $name, true) ?? $default;
  }

  /**
   * Set WPLF spesific post meta for this form
   */
  public function setMeta(string $name, $data = []): void {
    update_post_meta($this->ID, "_wplf" . $name, $data);
  }

  public function isSubmissionsTableCreated(): bool {
    return $this->getMeta('DBTableCreated');
  }

  public function setSubmissionsTableCreatedValue(bool $value): void {
    $this->setMeta('DBTableCreated', $value);
  }

  /**
   * Get current HistoryId of the form
   */
  public function getHistoryId(): int {
    return (int) $this->getMeta('HistoryId');
  }

  /**
   * Set current HistoryId of the form
   */
  public function setHistoryId(int $value): void {
    $this->setMeta('HistoryId', $value);
  }

  public function getFields() {
    if (!$this->fields) {
      throw new Error(__("Unable to get fields, as they have not been initialized yet! Provide them with setFields() if you can't pass them in the constructor.", 'wplf'));
    }

    return $this->fields;
  }

  /**
   * Set form fields for the current HistoryId
   */
  public function setFields($fields = []) {
    $this->fields = $fields;
    $this->setMeta('Fields', $fields);
  }

  /**
   * Set whether file uploads should be added to the media library or not.
   * 0 for no, 1 for yes.
   */
  public function setAddToMediaLibraryValue(int $status): void {
    $this->setMeta('AddToMediaLibrary', $status);
  }

  public function getAddToMediaLibraryValue() {
    return $this->getMeta('AddToMediaLibrary') ?? 1;
  }

  /**
   * Get whether or not unused database columns should be destroyed.
   * 0 for no, 1 for yes.
   */
  public function getDestroyUnusedDatabaseColumnsValue(): int {
    return (int) $this->getMeta('DestroyUnusedDatabaseColumns') ?? 0;
  }

  /**
   * Set whether or not unused database columns should be destroyed.
   * 0 for no, 1 for yes.
   */
  public function setDestroyUnusedDatabaseColumnsValue(int $status): void {
    $this->setMeta('DestroyUnusedDatabaseColumns', $status);
  }

  /**
   * Get email data from the form
   */
  public function getEmailNotificationData() {
    return $this->getMeta('EmailNotification') ?? [];
  }

  /**
   * Set email data for the form
   */
  public function setEmailNotificationData($data = []): void {
    $this->setMeta('EmailNotification', $data);
  }

  public function getSubmissionTitleFormat() {
    return $this->getMeta('SubmissionTitleFormat') ?: '## FORM title ## ### SUBMISSION id ##'; // );
  }

  public function setSubmissionTitleFormat(string $formattedString = ''): void {
    $this->setMeta('SubmissionTitleFormat', $formattedString);
  }

  /**
   * Get the version of WPLF of which was used when this form was created, or last updated.
   */
  public function getVersionCreatedAt() {
    return $this->getMeta('VersionCreatedAt');
  }

  /**
   * Set the version of WPLF of which was used when this form was created, or last updated.
   */
  public function setVersionCreatedAt(string $version): void {
    $this->setMeta('VersionCreatedAt', $version);
  }

  /**
   * Get message shown after a succesful submission
   */
  public function getSuccessMessage() {
    return $this->getMeta('ThankYou') ?: '<p>' . __('Form submitted succesfully. \n\n ## SUBMISSION ##', 'wplf') . '</p>';
  }

    /**
   * Get message shown after a succesful submission
   */
  public function setSuccessMessage(string $message): void {
    $this->setMeta('ThankYou', $message);
  }

  public function isPublished() {
    return $this->post_status === 'publish';
  }


  /**
   * Get list of fields which names are already used. These fields
   * are handled differently than the rest of the submission, and are not added to the database
   * by default. Feel free to add your own if you must but I suggest using hidden fields instead.
   */
  public function getAdditionalFields() {
    $defaults = ['_fcaptcha', '_referrerData', '_nojs', '_formId', 'lang'];

    return apply_filters('wplfAdditionalFields', $defaults, $this);
  }

  public static function printDefaultForm() {
    $required = esc_html_x('(required)', 'wplf');
    $defaultName = esc_html_x('John Doe', 'Default placeholder name', 'wplf');
    $nameLabel = esc_html_x('Please enter your name', 'wplf');

    $defaultEmail = esc_html_x('example@email.com', 'Default placeholder email', 'wplf');
    $emailLabel = esc_html_x('Please enter your email address', 'wplf');

    $defaultMessage = esc_html_x('I wanted to ask about...', 'Default placeholder message', 'wplf');
    $messageLabel = esc_html_x('Write your message below', 'wplf');

    $buttonText = esc_html_x('Submit', 'wplf');
    $comment = esc_html_x('Any valid HTML form can be used here!', 'The HTML comment at the end of the example form', 'wplf');

    // Lines must be indented like this to show properly in the editor
    ?>

<div class="wplf-formRow">
  <label for="name">
    <strong><?=$nameLabel?></strong>
    <input type="text" name="name" id="name" placeholder="<?=$defaultName?>">
  </label>

  <label for="email">
    <strong><?=$emailLabel?> <?=$required?></strong>
    <input type="email" name="email" id="email" placeholder="<?=$defaultEmail?>" required>
  </label>
</div>

<div class="wplf-formRow">
  <label for="message">
    <strong><?=$messageLabel?></strong>
    <textarea name="message" rows="5" id="message" placeholder="<?=$defaultMessage ?>" required></textarea>
  </label>
</div>

<div class="wplf-formRow">
  <button type="submit"><?=$buttonText?></button>
</div>

<!-- <?=$comment?> --><?php
  }


  public function validate($formEntries = []) {
    $valid = false;
    $error = null;

    $formEntries = apply_filters('wplfFieldsBeforeValidateSubmission', $formEntries, $this);

    $honeypotEnabled = apply_filters('wplfEnableHoneypot', true, $this);
    $requiredEnabled = apply_filters('wplfEnableRequiredValidation', true, $this);
    $additionalFieldsEnabled = apply_filters('wplfEnableAdditionalFieldsValidation', true, $this);

    try {
      $honeypotEnabled && $this->validateHoneypot($formEntries);
      $requiredEnabled && $this->validateFieldsWithRequired($formEntries);
      $additionalFieldsEnabled && $this->validateAdditionalFields($formEntries);

      do_action('wplfValidateSubmission', $formEntries, $this);

      $valid = true;
    } catch (Error $e) {
      $valid = false;

      $error = $e;
    }

    return [$valid, $error];
  }

  /**
   * Validate that fields with the required attribute
   * are not empty.
   *
   * @see https://github.com/libreform/libreform/issues/7
   */
  public function validateFieldsWithRequired($formEntries = []): void {
    $fields = $this->getFields();

    $missing = [];
    foreach ($fields as $field) {
      $required = $field['required'];
      $name = $field['name'];
      $value = $formEntries[$name] ?? false;

      $valueIsEmpty = empty($value);
      // $valueIsArray = !$valueIsEmpty ? is_array($value) : false;
      // $valueIsFileArray = $valueIsArray && isFileArray($value);

      if ($required && $valueIsEmpty) {
        $missing[] = $name;
      }
    }

    if (!empty($missing)) {
      throw new Error(__('Required fields are missing.', 'wplf'), [
        'requiredFields' => $missing,
      ]);
    }
  }

  /**
   * Check for presence of fields that weren't in the form
   * and that may be malicious. Additional fields will also throw SQL errors,
   * so we want none.
   */
  public function validateAdditionalFields($formEntries = []): void {
    $fields = $this->getFields();

    $formFieldNames = array_map(function ($field) {
      return $field['name'];
    }, $fields);
    $additionalFields = [];
    $whitelist = apply_filters('wplfAllowedFormFields', array_merge($formFieldNames, $this->getAdditionalFields()), $this);

    foreach ($formEntries as $key => $value) {
      $fieldIsWhiteListed = in_array($key, $whitelist);

      if ($fieldIsWhiteListed) {
        continue;
      }

      $additionalFields[] = $key;
    }

    if (!empty($additionalFields)) {
      $additionalFieldsStr = join(', ', $additionalFields); // Stringified for the error message.

      throw new Error(
        __("Additional fields are present: {$additionalFieldsStr}", 'wplf'),
        ['additionalFields' => $additionalFields]
      );
    }
  }

  /**
   * Ensure that a dumb bot isn't spamming submissions. Error is intentionally vague.
   */
  public function validateHoneypot($formEntries = []): void {
    if (!empty($data['_fcaptcha'])) {
      do_action('wplfHoneypotTriggered', $formEntries, $this);

      throw new Error(__("Captcha wasn't filled properly.", 'wplf'), []);
    }
  }
}
