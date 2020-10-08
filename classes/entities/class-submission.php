<?php

namespace WPLF;

class Submission {
  public $ID;
  public $uuid;
  public $referrer;
  public $historyId;
  public $createdAt; // UTC
  public $modifiedAt; // UTC

  public $entries = [];
  public $formFields = [];
  public $meta = [];

  private $form;
  private $rawData;

  public function __construct(Form $form, ?array $data = null) {
    $this->form = $form;
    $this->ID = ((int) $data['id']) ?: null;
    $this->uuid = $data['uuid'] ?? null;
    $this->referrer = json_decode($data['referrerData'], true);
    $this->historyId = $data['historyId'] ? (int) $data['historyId'] : null;
    $this->createdAt = $data['created'] ? $data['created'] : null;
    $this->modifiedAt = $data['modified'] ? $data['modified'] : null;

    // Unset the values after using to prevent them from ending under meta
    unset($data['id']);
    unset($data['uuid']);
    unset($data['referrerData']);
    unset($data['historyId']);
    unset($data['created']);
    unset($data['modified']);

    // Exposed under this object for REST API responses. Fields will match the historyId of the submission IF Submission is created correctly.
    $this->formFields = $form->getFields();

    if ($data) {
      $this->rawData = $data;

      foreach ($this->rawData as $name => $v) {
        if (strpos($name, 'field') === 0) {
          $this->entries[$this->form->getFieldOriginalName($name)] = $v;
        } else {
          // Other columns in the table are metadata
          $this->meta[$name] = $v;
        }
      }
    }
  }

  public function getForm() {
    return $this->form;
  }

  public function getHistoryId() {
    return $this->historyId;
  }

  public function getId() {
    return $this->ID;
  }

  public function getUuid() {
    return $this->uuid;
  }

  public function getReferrer() {
    return $this->referrer;
  }

  public function getField(string $fieldName) {
    return $this->entries[$fieldName] ?? null;
  }

  public function getEntries() {
    return $this->entries;
  }

  public function getMeta() {
    return $this->meta;
  }

  public function afterSubmission() {
    $email = $this->form->getEmailNotificationData();
    $data = apply_filters('wplfEmailNotificationData', $email, $this);
    $wplf = \libreform(); // There's no access to the core plugin object from this class, but we need to do selector conversion.

    if ($data['enabled']) {
      $to = $wplf->selectors->parse($data['to'], $this->form, $this);
      $from = $wplf->selectors->parse($data['from'], $this->form, $this);
      $subject = $wplf->selectors->parse($data['subject'], $this->form, $this);
      $content = $wplf->selectors->parse($data['content'], $this->form, $this);

      $headers = apply_filters('wplfEmailNotificationHeaders', [
        'From' => $from,
      ], $this);
      $attachments = apply_filters('wplfEmailNotificationAttachment', [], $this);


      if (!$this->sendEmail($to, $subject, $content, $headers, $attachments)) {
        isDebug() && log("Failed to send email");
      }
    }
  }

  public function sendEmail(string $to, string $subject, string $content, array $headers = [], array $attachments = []) {
    $actualHeaders = [];

    foreach ($headers as $k => $v) {
      $actualHeaders[] = "$k: $v";
    }

    return wp_mail($to, $subject, $content, $actualHeaders, $attachments);
  }
}
