<?php

namespace WPLF;

function isDebug() {
  return defined('WP_DEBUG') && WP_DEBUG == true; // Loose comparison to support 1, 'yes' etc
}

function isRest() {
  return defined('REST_REQUEST');
}

function log($anything) {
  error_log('WPLF: ' . print_r($anything, true));
}

function minifyHtml(string $html) {
  return str_replace(array("\n", "\r"), ' ', $html);
}

/**
 * Strip <form> tags from the form content, you can't have forms inside forms
 */
function stripFormTags($content) {
  return preg_replace('/<\/?form.*>/i', '', $content);
}

/**
 * Sanitizes (list of) email address(es) to be used in to-field of the email confirmation. If value is a selector, leaves it as is to allow sending confirmation to a value from the submission itself.
 */
function sanitizeEmailAddressesWhileAllowingSelectors(string $value) {
  // If $value starts and ends with ##, it's a selector. Return as is.
  $start = substr($value, 0, 2);
  $end = substr($value, -2);

  if ($start === '##' && $end === '##') {
    return $value;
  }

  $result = '';

  // If the field contains commas, assume it's a well-formed list of email addresses.
  if (strpos($value, ',') > 0) {
    $emails = explode(',', $value);

    foreach ($emails as $email) {
      $email = trim($email);
      // $email = sanitize_email($email) . ', ';
      $email = filter_var($email, \FILTER_SANITIZE_EMAIL)  . ', ';

      $email .= $email;
    }

    $result = rtrim($email, ', ');
  } else {
    // $result = sanitize_email($value);
    $result = filter_var($value, \FILTER_SANITIZE_EMAIL);
  }

  return $result;
}

function findFieldByName(string $name, array $fields) {
  foreach ($fields as $field) {
    if ($field['name'] === $name) {
      return $field;
    }
  }

  return false;
}

function isFileArray(array $data) {
  $keys = ['name', 'type', 'tmp_name', 'error', 'size'];

  foreach ($keys as $k => $v) {
    if (!in_array($k, $data)) {
      return false;
    }
  }

  return true;
}

/**
 * https://www.php.net/manual/en/features.file-upload.errors.php#115746
 */
function getFileUploadError(int $errorNumber) {
  $errors = [
    0 => 'There is no error, the file uploaded with success.',
    1 => 'The uploaded file exceeds the upload_max_filesize directive in php.ini',
    2 => 'The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form',
    3 => 'The uploaded file was only partially uploaded',
    4 => 'No file was uploaded',
    6 => 'Missing a temporary folder',
    7 => 'Failed to write file to disk.',
    8 => 'A PHP extension stopped the file upload.',
  ];

  if ($errorNumber === 0) {
    return false;
  }

  return new Error($errors[$errorNumber]);
}

function getUploadedFiles(): ?array {
  $uploads = $_FILES;

  return !empty($uploads) ? $uploads : null;
}

function db() {
  global $wpdb;

  return [
    $wpdb,
    $wpdb->prefix,
  ];
}

function currentUrl() {
  $protocol = (isset($_SERVER['HTTPS']) ? "https" : "http");

  return "$protocol://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
}

function uuid() {
  $data = \random_bytes(16);
  assert(strlen($data) == 16);

  $data[6] = chr(ord($data[6]) & 0x0f | 0x40); // set version to 0100
  $data[8] = chr(ord($data[8]) & 0x3f | 0x80); // set bits 6-7 to 10

  return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}

function getMainCapability() {
  // Forms can be used to upload files which can be added to the media library. User who isn't allowed to do that can't edit forms either.
  return apply_filters('wplfMainCapability', 'upload_files');
}

/**
 * With default roles, this will match anyone with author or above role.
 * We're checking spesific caps for a reason.
 */
function currentUserIsAllowedToSave() {
  $cond1 = getMainCapability();

  // Multisite users are going to need super admin or a plugin like Unfiltered HTML.
  // $cond2 = is_multisite() ? current_user_can('unfiltered_html') : true;
  $cond2 = current_user_can('unfiltered_html');

  return $cond1 && $cond2;
}

function currentUserIsAllowedToUse() {
  return current_user_can('edit_posts');
}

function getFormPostObject($x = null): ?\WP_Post {
  if (is_numeric($x)) {
    return get_post((int) $x);
  } elseif (is_string($x)) {
    $posts = get_posts([
      'post_type' => Plugin::$postType,
      'name' => $x,
      'posts_per_page' => 1,
    ]);

    return $posts[0] ?? null;
  } else {
    return get_post();
  }

  return null;
}

function getSubmissionsTableName(Form $form) {
  [$db, $prefix] = db();
  $name = "{$prefix}wplf_{$form->ID}_submissions";

  return $name;
}

function getHistoryTableName() {
  [$db, $prefix] = db();
  $name = "{$prefix}wplf_history";

  return $name;
}
