<?php

namespace WPLF;

class SubmissionIo extends Module {
  private $readyToUpload = false;

  private $wpContentDir;
  private $wpContentUrl;

  public function __construct(Plugin $wplf) {
    parent::__construct($wplf);

    $this->wpContentDir = \WP_CONTENT_DIR;
    $this->wpContentUrl = \content_url();
  }

  /**
   * $entries is an associative array, using keys for field names and values for the field values.
   */
  public function create(Form $form, $entries = []): Submission {
    [$valid, $error] = $form->validate($entries);

    // If a validation error occurs, throw it.
    if ($error instanceof Error) {
      throw new Error($error->getMessage(), $error->getData());
    }

    $entries = apply_filters('wplfFieldsAfterValidateSubmission', $entries, $form);
    try {
      [$db, $prefix] = db();
      $tableName = getSubmissionsTableName($form);
      [$data, $placeholders] = $this->mapFieldsToInsertableData($form, $entries);

      if ($db->insert($tableName, $data, $placeholders)) {
        $submissionId = $db->insert_id;
        $submission = $this->io->form->getSubmissionById($form, $submissionId);
      } else {
        throw new Error('Unable to create submission!', [$form, $entries]);
      }
    } catch (Error $e) {
      throw $e;
    }

    do_action('wplfAfterSubmission', $submission, $form);

    if (apply_filters('wplfUseDefaultAfterSubmission', true, $submission, $form)) {
      $submission->afterSubmission();
    }

    return $submission;
  }

  /**
   * File deletion doesn't work yet
   *
   * @see https://github.com/libreform/libreform/issues/8
   */
  public function delete(Submission $submission, $removeUploads = true) {

    [$db, $prefix] = db();
    $tableName = getSubmissionsTableName($submission->getForm());

    $entries = $this->getEntries();
    $historyId = (int) $this->getMeta()['historyId'];
    $formFields = $submission->formFields;

    foreach ($entries as $name => $value) {
      $formField = $formFields[$name];
      $type = $formField['type'];

      if ($removeUploads && $type === 'file') {
        $path = $value['path'];

        if (!$this->io->submission->deleteFile($path)) {
          isDebug() && log("Unable to delete file $path");
        }
      } elseif ($removeUploads && $type === 'attachment') {
        // no such type and value is a string, condition is invalid
        $id = $value['id'];

        if (!wp_delete_attachment($id, true)) {
          isDebug() && log("Unable to delete attachment $id");
        }
      }
    }

    if (!$db->delete($tableName, ['id' => $submission->ID], ['%d'])) {
      throw new Error('Unable to delete submission!', ['submission' => $submission]);
    }

    return true;
  }


  /**
   * This method is a clusterfuck, but it works. To explain myself;
   * media_handle_upload only works on the global $_FILES array. It also can't handle multiple files in one upload, so "some hacking around" is required.
   *
   * $blackbox is the most fitting name for the data I could come up with. It's passed here somewhat unmodified, so iTs bAsIc PhP.
   */
  public function uploadFiles(Form $form, string $name, $blackbox) {
    $this->readyToUpload || $this->loadUploadStuff();
    $addUploadsToMediaLibrary = $form->getAddToMediaLibraryValue();

    /**
     * Assuming you've done everything right and made sure you're using this function on actual file inputs only, this safeguard works to separate multiple file uploads from single uploads.
     *
     * We could fetch the field using $form->getFields() to check if it's marked as multiple, but this works too.
     */
    $isMultiple = is_array($blackbox['name']);

    // Empty string to hold the URL / ID.
    $value = "";

    // Kept for reference, we're doing dirty things to it soon
    $oldSFiles = $_FILES;


    if ($isMultiple) {
      /**
       * Multiple files are in a weird format. Instead of having an easily iterable array, it's all mashed together. Thanks PHP!
       *
       * Here be dragons, you have been warned.
       */
      $filenames = $blackbox['name'];

      foreach ($filenames as $i => $n) {
        $type = $blackbox['type'][$i];
        $tmp_name = $blackbox['tmp_name'][$i];
        $error = $blackbox['error'][$i];
        $size = $blackbox['size'][$i];

        // Variable names must be exactly these or else...
        $upload = compact("name", "type", "tmp_name", "error", "size");

        if ($addUploadsToMediaLibrary) {
          /**
           * Don't do this. DO NOT DO THIS.
           * This is the WORST part of the codebase right here.
           */
          $_FILES[$name . $i] = $upload;
          $actualName = $n . $i;

          // Attachment id
          $value = $value . $this->uploadToMediaLibrary($actualName, $form) . ", ";
        } else {
          // Path to file
          $value = $value . $this->uploadOutsideMediaLibrary($actualName, $upload, $form) . ", ";
        }
      }

      // As a desperate attempt to not break anything, restore the global to what it was.
      $_FILES = $oldSFiles;

      // And cut the trailing comma from the value.
      $value = rtrim($value, ", ");
    } else {
      /**
       * Single uploads are so much easier.
       */
      if ($addUploadsToMediaLibrary) {
        // Attachment id
        $value = $this->uploadToMediaLibrary($name, $form);
      } else {
        // Path to file
        $value = $this->uploadOutsideMediaLibrary($name, $blackbox, $form);
      }
    }

    // If there's no file, an empty string will be returned.
    // This is in line with the other input types, although it could be a boolean too.
    return $value;
  }

  /**
   * Used for deleting attachments and the like
   */
  private function deleteFile($path) {
    return unlink($path);
  }

  /**
   * Function required for uploading files are not loaded by default
   */
  private function loadUploadStuff() {
    require_once(ABSPATH . 'wp-admin/includes/image.php');
    require_once(ABSPATH . 'wp-admin/includes/file.php');
    require_once(ABSPATH . 'wp-admin/includes/media.php');

    $this->readyToUpload = true;
  }

  private function uploadToMediaLibrary(string $fieldName, Form $form) {
    $id = \media_handle_upload($fieldName, 0, [], ['test_form' => false]);
    $field = findFieldByName($fieldName, $form->getFields());
    $required = $field['required'];

    if (is_wp_error($id)) {
      $msg = $id->get_error_message();

      if (!$required && $msg === 'No file was uploaded.') {
        // Empty string on purpose
        return '';
      }

      throw new Error($msg);
    }

    return $id;
  }

  private function uploadOutsideMediaLibrary(string $fieldName, $uploadData, Form $form): string {
    $field = findFieldByName($fieldName, $form->getFields());

    if ($uploadData['error']) {
      $number = (int) $uploadData['error'];
      $error = null;

      if ($field['required']) { // If the field is required, always error
        $error = getFileUploadError($number);
      } elseif ($number !== 4) { // Or if the error code is something other than 4 (no file uploaded), which is normal
        $error = getFileUploadError($number);
      } elseif ($number === 4) {
        return '';
      }

      if ($error) {
        throw $error;
      }
    }

    $defaultName = 'lf_' . date('ymdhms') . '-' . $uploadData['name'];
    $name = sanitize_file_name(apply_filters('wplfUploadedFileName', $defaultName, $uploadData, $form));

    $defaultPath = wp_upload_dir()['path'] . '/' . $name;
    $filePath = apply_filters('wplfUploadedFilePath', $defaultPath, $uploadData, $form);

    move_uploaded_file($uploadData['tmp_name'], $filePath);

    return $this->convertServerPathsToUrls($filePath);
  }

  private function convertServerPathsToUrls(string $paths) {
    $wpContentDir = $this->wpContentDir;
    $wpContentUrl = $this->wpContentUrl;

    $x = explode(', ', $paths);
    $fileurls = array_map(function ($path) use ($wpContentDir, $wpContentUrl) {
      return str_replace($wpContentDir, $wpContentUrl, $path);
    }, $x);

    return join(', ', $fileurls);
  }

  private function mapFieldsToInsertableData(Form $form, array $data) {
    $formFields = $form->getFields($form->getHistoryId());

    $fields = [
      'uuid' => ['value' => uuid(), 'placeholder' => '%s'],
      'formId' => ['value' => $form->ID, 'placeholder' => '%d'],
      'historyId' => ['value' => $form->getHistoryId(), 'placeholder' => '%d'],
      'usedFallback' => ['value' => 0, 'placeholder' => '%d'], // boolean in DB
    ];

    foreach ($data as $name => $value) {
      switch ($name) {
        case '_referrerData':
          $fields['referrerData'] = [
            'value' => $value,
            'placeholder' => '%s',
          ];
              break;

        case '_nojs':
          // If the field exists, the fallback was triggered.
          $fields['usedFallback'] = [
            'value' => 1,
            'placeholder' => '%d',
          ];
              break;

        case '_fcaptcha':
          // Discard the value. Validation will prevent this case from happening.
              break;

        case '_formId':
          // Already handled
              break;

        case 'lang':
          // Discard, only used to trigger Polylang
              break;

        default:
          $field = $formFields[$name];
          $type = $field['type'];
          $multiple = $field['multiple'];

          if ($type === 'file') {
            // uploadFiles handles multiple files as the name suggests
            $value = $this->uploadFiles($form, $name, $value);
          } elseif ($multiple) {
            $value = join(', ', $value);
          }

          $fields[$form->getFieldColumnName($name)] = [
            'placeholder' => '%s',
            'value' => $value,
          ];
              break;
      }
    }

    $data = [];
    $placeholders = [];

    foreach ($fields as $k => $v) {
      $data[$k] = $v['value'];
      $placeholders[] = $v['placeholder'];
    }

    return [$data, $placeholders];
  }
}
