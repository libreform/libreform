<?php

namespace WPLF;

class Submission {
  public $ID;
  public $uuid;
  public $title;
  public $referrer;
  public $historyId;
  public $createdAt; // UTC
  public $modifiedAt; // UTC
  public $usedFallback;
  public $formId;

  public $entries = [];
  public $formFields = [];
  public $meta = [];

  private $form;
  private $rawData;

  public function __construct(Form $form, array $dbColumns = [], string $title = null) {
    $this->form = $form;
    $this->ID = ((int) $dbColumns['id']) ?: null;
    $this->uuid = $dbColumns['uuid'] ?? null;
    $this->referrer = json_decode($dbColumns['referrerData'], true);
    $this->historyId = $dbColumns['historyId'] ? (int) $dbColumns['historyId'] : null;
    $this->createdAt = $dbColumns['created'] ? $dbColumns['created'] : null;
    $this->modifiedAt = $dbColumns['modified'] ? $dbColumns['modified'] : null;
    $this->usedFallback = ((int) $dbColumns['usedFallback']) ? true : false;
    $this->formId = (int) ($dbColumns['formId'] ?? null);

    if (!$dbColumns || empty($dbColumns)) {
      throw new Error('Submission cannot be created without $dbColumns');
    } else if ($this->formId !== $this->form->ID) {
      throw new Error('Submission data is associated to a different form than what was used for the submission.');
    }

    $this->setTitle($title);

    // Unset the values after using to prevent from being used in the loop
    unset($dbColumns['id']);
    unset($dbColumns['uuid']);
    unset($dbColumns['referrerData']);
    unset($dbColumns['historyId']);
    unset($dbColumns['created']);
    unset($dbColumns['modified']);
    unset($dbColumns['usedFallback']);
    unset($dbColumns['formId']);

    // Exposed under this object for REST API responses. Fields will match the historyId of the submission IF Submission is created correctly.
    $this->formFields = $form->getFields();
    $this->rawData = $dbColumns;

    foreach ($this->rawData as $name => $v) {
      if (strpos($name, 'field') === 0) {
        $this->entries[$this->form->getFieldOriginalName($name)] = $v;
      } elseif ($name === 'meta') {
        $this->meta = json_decode($v);
      } else {
        log("Unknown entry, $name isn't assignable to anything");
      }
    }
  }

  public function setTitle(string $title = null) {
    $this->title = $title ? $title : __('Submission', 'wplf') . " {$this->ID}";
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
    $emailCopyData = $this->form->getEmailNotificationData();
    $data = apply_filters('wplfEmailNotificationData', $emailCopyData, $this);
    $wplf = \libreform(); // There's no access to the core plugin object from this class, but we need to do selector conversion.

    $createdWithVersion = $this->form->getVersionCreatedAt();
    $pre21 = version_compare($createdWithVersion, '2.1.0', '<');

    $emailCopies = [];

    if (!$pre21) {
      foreach ($emailCopyData as $i => $data) {
        $emailCopies[$i] = [
          'enabled' => $data['enabled'],
          'to' => $wplf->selectors->parse($data['to'], $this->form, $this) ,
          'from' => $wplf->selectors->parse($data['from'], $this->form, $this),
          'cc' => $wplf->selectors->parse($data['cc'], $this->form, $this),
          'bcc' => $wplf->selectors->parse($data['bcc'], $this->form, $this),
          'subject' => $wplf->selectors->parse($data['subject'], $this->form, $this),
          'content' => $wplf->selectors->parse($data['content'], $this->form, $this)
        ];
      }
    } else {
      $emailCopies[] = [
        'enabled' => $emailCopyData['enabled'],
        'to' => $wplf->selectors->parse($emailCopyData['to'], $this->form, $this),
        'from' => $wplf->selectors->parse($emailCopyData['from'], $this->form, $this),
        'cc' => '', // $wplf->selectors->parse($emailCopyData['cc'], $this->form, $this),
        'bcc' => '', // $wplf->selectors->parse($emailCopyData['bcc'], $this->form, $this),
        'subject' => $wplf->selectors->parse($emailCopyData['subject'], $this->form, $this),
        'content' => $wplf->selectors->parse($emailCopyData['content'], $this->form, $this)
      ];
    }

    foreach ($emailCopies as $data) {
      if ($data['enabled']) {
        $to = $wplf->selectors->parse($data['to'], $this->form, $this);
        $from = $wplf->selectors->parse($data['from'], $this->form, $this);
        $cc = $wplf->selectors->parse($data['cc'], $this->form, $this);
        $bcc = $wplf->selectors->parse($data['bcc'], $this->form, $this);
        $subject = $wplf->selectors->parse($data['subject'], $this->form, $this);
        $content = $wplf->selectors->parse($data['content'], $this->form, $this);

        $headers = apply_filters('wplfEmailNotificationHeaders', [
          'From' => $from,
          'Cc' => $cc,
          'Bcc' => $bcc,
        ], $this);
        $attachments = apply_filters('wplfEmailNotificationAttachment', [], $this);

        if (!$this->sendEmail($to, $subject, $content, $headers, $attachments)) {
          isDebug() && log("Failed to send email");
        }
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
