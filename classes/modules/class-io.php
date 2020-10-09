<?php

namespace WPLF;

/**
 * All database and filesystem operations live here. IO operations are expensive, try to avoid making any unnecessary calls.
 *
 * Validate the data BEFORE using it here or any of the subclasses.
 */
class Io extends Module {

  public $submission;
  public $form;
  public $db;

  public function __construct(Plugin $wplf) {
    parent::__construct($wplf);

    require_once __DIR__ . '/io/class-db-io.php';
    require_once __DIR__ . '/io/class-submission-io.php';
    require_once __DIR__ . '/io/class-form-io.php';

    $this->submission = new SubmissionIo($wplf);
    $this->form = new FormIo($wplf);
    $this->db = new DbIo($wplf);
  }

  /**
   * Generic get_option wrapper, prefixes for you.
   */
  public function getOption(string $name, $defaultData = null) {
    return get_option("wplf$name", $defaultData);
  }

    /**
   * Generic set_option wrapper, prefixes for you.
   */
  public function setOption(string $name, $data = null) {
    return update_option("wplf$name", $data);
  }
}
