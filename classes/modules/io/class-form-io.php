<?php

namespace WPLF;

class FormIo extends Module {
  public function getFormFields(Form $form, int $historyId = null) {
    if (!$historyId) {
      $data = $form->getMeta('Fields');
    } else {
      // Might throw if DB errors
      $data = $this->getFormHistoryFields($form, $historyId);
    }

    return is_array($data) ? $data : [];
  }

  public function getFormSubmissions(Form $form, int $page = 0, $limit = 100) {
    [$db, $prefix] = db();
    $tableName = getSubmissionsTableName($form);

    $dataQuery = "SELECT * FROM {$tableName} ORDER BY id LIMIT %d OFFSET %d";
    $data = $db->get_results($db->prepare($dataQuery, [$limit, $page * $limit]), DB_OUTPUT_TYPE);
    $count = $this->getFormSubmissionCount($form);

    $submissions = array_map(function ($data) use ($form) {
      // Ensure that the correct set of fields is used in the submission
      $historyId = (int) ($data['historyId'] ?? $form->getHistoryId());
      $form->setFields($this->getFormFields($form, $historyId));

      $submission = new Submission($form, $data);

      return $submission;
    }, $data);

    return [
      $submissions,
      (int) ($count / $limit), // return amount of pages with the current limit
      $count,
    ];
  }

  public function getFormSubmissionCount(Form $form) {
    [$db, $prefix] = db();
    $tableName = getSubmissionsTableName($form);

    return (int) $db->get_var("SELECT COUNT(*) FROM $tableName");
  }

  /**
   * Get a submission by it's auto incremented ID.
   *
   * Do not EVER expose this function to the world (in an API etc) or you're opening yourself to an enumeration attack.
   */
  public function getFormSubmissionById(Form $form, int $id) {
    [$db, $prefix] = db();
    $tableName = getSubmissionsTableName($form);

    $dataQuery = "SELECT * FROM {$tableName} WHERE id = %s LIMIT 1";
    $data = $db->get_row($db->prepare($dataQuery, [$id]), DB_OUTPUT_TYPE);

    if (empty($data)) {
      return null;
    }

    return new Submission($form, $data);
  }

  /**
   * Get a submission by it's UUID, which is generated when the submission is created. The risk of enumeration with UUIDs is minimal, although present.
   */
  public function getFormSubmissionByUuid(Form $form, string $uuid) {
    [$db, $prefix] = db();
    $tableName = getSubmissionsTableName($form);

    $dataQuery = "SELECT * FROM {$tableName} WHERE uuid = %s LIMIT 1";
    $data = $db->get_row($db->prepare($dataQuery, [$uuid]), DB_OUTPUT_TYPE);

    if (empty($data)) {
      return null;
    }

    return new Submission($form, $data);
  }

  public function insertHistoryFields(Form $form) {
    [$db, $prefix] = db();
    $tableName = getHistoryTableName($form);

    if ($db->insert($tableName, ['formId' => $form->ID, 'fields' => json_encode($form->getFields())], ['%d', '%s'])) {
      $form->setHistoryId((int) $db->insert_id);

      return $db->insert_id;
    } else {
      throw new Error('Unable to insert history entry!', [$form]);
    }
  }

  public function getFormHistoryFields(Form $form, int $historyVersion) {
    [$db, $prefix] = db();
    $tableName = getHistoryTableName($form);
    $id = (int) $form->ID;
    $res = $db->get_row("SELECT fields FROM $tableName WHERE formId = $id AND id = $historyVersion", DB_OUTPUT_TYPE);

    if ($res) {
      return json_decode($res['fields'], true);
    } elseif ($db->last_error) {
      throw new Error($db->last_error, [$form]);
    }
  }

  /**
   * Get a (possibly) huge chunk of fields that have existed in the form.
   * This is mainly useful for comparing current fields to previous ones in order to avoid DB conflicts.
   */
  public function getAllHistoryFieldsFormHasEverHad(Form $form) {
    [$db, $prefix] = db();
    $tableName = getHistoryTableName($form);
    $id = (int) $form->ID;
    $res = $db->get_results("SELECT fields FROM $tableName WHERE formId = $id", DB_OUTPUT_TYPE);
    $historyFields = [];

    if ($res) {
      foreach ($res as $row) {
        $fields = json_decode($row['fields'], true);

        foreach ($fields as $field) {
          $name = $field['name'];
          $historyFields[$name] = array_replace_recursive($historyFields[$name] ?? [], $field);
        }
      }
    } elseif ($db->last_error) {
      throw new Error($db->last_error, [$form]);
    }

    // Casted to object for convenience reasons, JavaScript expects an object, but empty array will convert into an array
    return apply_filters('wplfHistoryFields', (object) $historyFields, $form);
  }
}
