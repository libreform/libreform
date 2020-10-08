<?php

namespace WPLF;

class DbIo extends Module {
  private $collate;


  public function __construct(Plugin $wplf) {
    parent::__construct($wplf);

    $this->collate = !empty(\DB_COLLATE) ? \DB_COLLATE : 'utf8mb4_unicode_ci';
  }

  private function mapFieldToSqlDefinition($field) {
    if (!$field) {
      throw new Error("Invalid field");
    }

    $type = $field['type'];
    $required = $field['required'];
    $multiple = $field['multiple'];
    $definition = "";

    switch ($type) {
      case 'email':
        $definition = $definition . 'VARCHAR(254) ';
            break;

      case 'file':
        if ($multiple) {
          // Separated with commas, any number of URLs or IDs
          $definition = $definition . 'TEXT ';
        } else {
          // Max length for a single URL
          $definition = $definition . 'VARCHAR(2048) ';
        }
            break;

      case 'textarea':
        $definition = $definition . 'LONGTEXT ';
            break;

      default:
        $definition = $definition . 'TEXT ';
            break;
    }

    // This could be enforced on the database level, but it's problematic if the user
    // starts adding the requires AFTER saving once, as the columns can't be changed,
    // only created and dropped.
    // if ($required) {
      // $definition = $definition . 'NOT NULL';
    // }

    return $definition;
  }


  public function updateFormSubmissionsTable(Form $form, ?array $newFields = null, ?array $dropFields = null) {
    if (empty($newFields) && empty($dropFields)) {
      // Nothing to do.

      isDebug() && log('Skipping submission table update');
      return;
    }

    [$db, $prefix] = db();
    $tableName = getSubmissionsTableName($form);

    $addSql = "";
    $dropSql = "";

    $fields = $form->getFields();

    if ($newFields) {
      $addedNames = [];

      foreach ($newFields as $i => $field) {
        $name = $field['name'];
        $name = $form->getFieldColumnName($name);
        $fieldDefinition = $this->mapFieldToSqlDefinition($field);

        if ($field['multiple'] && in_array($name, $addedNames)) {
          // Already added to the query. Adding it again will cause a db error.
          continue;
        }

        $addedNames[] = $name;
        $addSql = $addSql . "ADD COLUMN `$name` $fieldDefinition, ";
      }
    }

    // var_dump($addSql); die();


    if ($dropFields) {
      foreach ($dropFields as $field) {
        $name = $field['name'];
        $name = $form->getFieldColumnName($name);

        $dropSql = $dropSql . "DROP COLUMN IF EXISTS `$name`, ";
      }
    }

    $addSql = rtrim($addSql, ', ');
    $dropSql = rtrim($dropSql, ', ');

    $alterQuery = rtrim($dropFields ? "$dropSql, $addSql" : $addSql, ',');

    if (
        !$db->query("
      ALTER TABLE `$tableName` $alterQuery
    ")
    ) {
      throw new Error($db->last_error);
    }

    isDebug() && log("Updated form $form->ID submissions table");
    $this->insertHistoryFields($form);

    return true;
  }

  public function createFormSubmissionsTable(Form $form, $force = false) {
    [$db, $prefix] = db();
    $tableName = getSubmissionsTableName($form);
    $historyTableName = getHistoryTableName();
    $collate = $this->collate;

    if ($force) {
      if (!$db->query("DROP TABLE IF EXISTS `$tableName`;")) {
        throw new Error($db->last_error);
      }
    }

    /**
     * Prevents deletion of forms before all submissions have been deleted
     */
    if (
        !$db->query("
      CREATE TABLE `$tableName` (
        `uuid` varchar(36) NOT NULL UNIQUE,
        `id` bigint(20) NOT NULL AUTO_INCREMENT,
        `formId` bigint(20) UNSIGNED COMMENT 'Joins with ID in wp_posts',
        `historyId` bigint(20) COMMENT 'Joins with id in wp_wplf_history',
        `created` DATETIME DEFAULT CURRENT_TIMESTAMP,
        `modified` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        `meta` TEXT,
        `referrerData` TEXT,
        `usedFallback` boolean,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`formId`) REFERENCES {$prefix}posts(ID) ON DELETE RESTRICT,
        FOREIGN KEY (`historyId`) REFERENCES $historyTableName(id) ON DELETE SET NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE={$collate};
    ")
    ) {
      throw new Error($db->last_error);
    }

    $form->setSubmissionsTableCreatedValue(true);
    $this->insertHistoryFields($form);

    return true;
  }

  public function destroyFormSubmissionsTable(Form $form) {
    [$db, $prefix] = db();
    $tableName = getSubmissionsTableName($form);

    if (!$db->query("DROP TABLE `$tableName`")) {
      throw new Error($db->last_error);
    }

    $form->setSubmissionsTableCreatedValue(false);

    return true;
  }

  public function createHistoryTable($force = false) {
    [$db, $prefix] = db();
    $tableName = getHistoryTableName();
    $collate = $this->collate;


    if ($force) {
      if (!$db->query("DROP TABLE IF EXISTS `$tableName`;")) {
        throw new Error($db->last_error);
      }
    }

    /**
     * Rows are automatically deleted when a form is deleted
     */
    if (
        !$db->query("
      CREATE TABLE `$tableName` (
        `id` bigint(20) NOT NULL AUTO_INCREMENT,
        `formId` bigint(20) UNSIGNED NOT NULL COMMENT 'Joins with ID in wp_posts',
        `fields` LONGTEXT NOT NULL COMMENT 'Fields in JSON form',
        `created` DATETIME DEFAULT CURRENT_TIMESTAMP,
        `modified` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`formId`) REFERENCES {$prefix}posts(ID) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE={$collate};
    ")
    ) {
      throw new Error($db->last_error);
    }


    $this->settings->set('historyTableCreated', 'true'); // Converted to boolean true in the other end
    return true;
  }

  public function destroyHistoryFields(Form $form) {
    [$db, $prefix] = db();
    $tableName = getHistoryTableName($form);

    if ($db->delete($tableName, ['formId' => $form->ID], ['%d'])) {
      return true;
    } else {
      throw new Error('Unable to destroy history entry!', [$form]);
    }
  }
}
