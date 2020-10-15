<?php

namespace WPLF;

class AdminInterface extends Module {
  public function __construct(Plugin $wplf) {
    parent::__construct($wplf);

    // Nag if necessary
    add_action('admin_init', [$this, 'onAdminInit']);

    // Show sample content so even a HTML impaired user can use the plugin
    add_filter('default_content', [$this, 'defaultContent']);

    // Fancy editors are useless for our cause
    add_filter('user_can_richedit', [$this, 'disableTinymce']);
    add_filter('use_block_editor_for_post_type', [$this, 'disableGutenberg'], 10, 2);

    add_action('edit_form_after_editor', [$this, 'addCustomEditor']);
  }

  public function defaultContent($content) {
    global $pagenow;

    // only on post.php screen
    if ('post-new.php' !== $pagenow && 'post.php' !== $pagenow) {
      return $content;
    }

    // only for this cpt
    if (isset($_GET['post_type']) && Plugin::$postType === $_GET['post_type']) {
      ob_start();
      Form::printDefaultForm();
      $content = esc_textarea(ob_get_clean());
    }

    return $content;
  }

  public function onAdminInit() {
    $this->registerNotices();

    /**
     * Do not add more metaboxes unless you have a good reason. Bad UX.
     */
    \add_meta_box(
        'wplfFieldsMetabox',
        __('Form Fields Detected', 'wplf'),
        [$this, 'renderFieldsMetabox'],
        Plugin::$postType,
        'side'
    );
  }

  public function registerNotices() {
    $form = getFormPostObject($_GET['post'] ?? null);

    if ($form && $form->post_type === Plugin::$postType) {
      $form = new Form($form);
      $createdWithVersion = $form->getVersionCreatedAt();
      $unableToEdit = !currentUserIsAllowedToSave();

      $multisiteInfo1 = esc_html(__(
          'You need unfiltered_html capability to be able to save anything with HTML.',
          'wplf'
      ));
      $multisiteInfo2 = esc_html(__(
          'You do not have this capability, so to prevent you from accidentally destroying the form, you can\'t save here. Either switch to a user with Super Admin role, or install a plugin like Unfiltered HTML.',
          'wplf'
      ));

      $formVersionUpgradeInfo1 = sprintf(
          esc_html(
          // translators: Placeholders indicate version numbers
              __('This form was created with WPLF version %1$s, and your installed WPLF version is %2$s.', 'wplf')
          ),
          esc_html($createdWithVersion),
          esc_html($this->version)
      );

      $formVersionUpgradeInfo2 = esc_html__("In other words, WPLF has been updated after you created the form. We've placed it under a feature freeze to ensure it keeps working like it did before the update. Go to Settings -> Miscellaneous to upgrade the form if you want to remove the freeze.", 'wplf');

      $unfilteredHtmlNotice = $this->notices->add(
          'unfilteredHtmlWarning',
          "
        <p>$multisiteInfo1</p>
        <p>$multisiteInfo2</p>

        ",
          ['type' => 'error', 'show' => $unableToEdit]
      );

      $formVersionUpgradeNotice = $this->notices->add(
          'formVersionUpgrade',
          "
        <p>$formVersionUpgradeInfo1</p>
        <p>$formVersionUpgradeInfo2</p>
        ",
          ['type' => 'info', 'show' => version_compare($createdWithVersion, $this->version, '<')]
      );
    }
  }

  public function disableTinymce($value) {
    if (Plugin::$postType === get_post_type()) {
      return false;
    }

    return $value;
  }

  public function disableGutenberg($value, $post_type) {
    if (Plugin::$postType === $post_type) {
      return false;
    }

    return $value;
  }

  public function renderFieldsMetabox(): void {
    $form = new Form(getFormPostObject());
    $form->setFields($this->io->form->getFields($form));

    ?>
    <div class="wplf-formFields">
      <div class="wplf-formFields__field" hidden>
        <strong class="wplf-formFields__field__name">Field name</strong>

        <span class="wplf-formFields__field__type">
          <?php esc_html_e('Type: ', 'wplf'); ?>

          <em>text</em>
        </span>

        <span class="wplf-formFields__field__alert" title="Warning" aria-live="alert">!</span>
      </div>

      <!-- Used as JS template -->
    </div>


    <!-- List of fields is used to save the current fields to database -->
    <input type="hidden" name="wplfFields" id="wplfFields" value='<?=json_encode($form->getFields()); ?>'>

    <!-- New fields are used to add columns to the database. They are not saved.  -->
    <input type="hidden" name="wplfNewFields" id="wplfNewFields">

    <!-- See above comment about new fields.  -->
    <input type="hidden" name="wplfDeletedFields" id="wplfDeletedFields">

    <!-- All fields that the form "has ever had", according to history table. Used to prevent reusing the same field name for a column with data, but which may not be present in the form at this time. Not saved from this field. -->
    <input type="hidden" name="wplfHistoryFields" id="wplfHistoryFields" value='<?=json_encode($this->io->form->getAllHistoryFields($form)); ?>'>

    <!-- List of fields that the form MAY NOT have as they are added dynamically -->
    <input type="hidden" name="wplfAdditionalFields" id="wplfAdditionalFields" value='<?=json_encode($form->getAdditionalFields()); ?>'>

    <input type="hidden" name="wplfAllowSave" id="wplfAllowSave" value="1">
    <?php
  }

  /**
   * The editor is added under normal content field (which is hidden with CSS)
   * so it overwrites it. thisisfine.jpg
   */
  public function addCustomEditor(\WP_Post $form): void {
    if ($form->post_type !== Plugin::$postType) {
      return;
    }
    $form = new Form($form);
    $isNewPost = get_post_meta($form->ID, '_edit_last', true) != 1; // New posts don't have this meta field. This is the least hackiest way to get that data here.

    $subUuid = $_GET['submissionUuid'] ??  false;

    if ($subUuid) {
      ?>
    <div class="wplf">
      <div class="wplf-singleSubmission">
        Render submission here
      </div>
      </div>
      <?php

      return;
    }

    $metaSections = [
      'preview' => [
        'text' => 'Preview',
        'fn' => [$this, 'renderPreview'],
      ],

      'usage' => [
        'text' => 'Usage',
        'fn' => [$this, 'renderUsage']
      ],
      'selectors' => [
        'text' => 'Selectors',
        'fn' => [$this, 'renderSelectors']
      ],
      'submission' => [
        'text' => 'Submissions',
        'fn' => [$this, 'renderSubmissions']
      ],
      'settings' => [
        'text' => 'Settings',
        'fn' => [$this, 'renderSettings']
      ],
    ];
    $importedContent = apply_filters('wplfImportFormTemplate', null, $form);
    $htmlContent = $importedContent ? $importedContent : $form->post_content;

    wp_nonce_field('wplfSavePostNonce', 'wplfSavePostNonce');
    ?>

    <div class="wplf">
      <div class="wplf-editor">
        <textarea name="content" class="wplf-cmEditor" <?=$importedContent ? 'readonly' : ''?>><?=($htmlContent)?></textarea>

        <div class="wplf-editor__meta wplf-tabs" data-name="FormEditActiveTab" data-default="<?=array_keys($metaSections)[0]?>" data-remember>
          <header>
            <?php
            foreach ($metaSections as $key => $data) {
              echo "<button type='button' class='wplf-tabs__tabSwitcher' data-name='FormEditActiveTab' data-target='$key'>";
              echo $data['text'];
              echo "</button>";
            }
            ?>
          </header>

          <?php

          foreach ($metaSections as $key => $data) {
            echo "<section class='wplf-tabs__tab wplf-$key' data-name='FormEditActiveTab' data-tab='$key'>";

            try {
              $data['fn']($form, $isNewPost);
            } catch (Error $e) {
              $msg = $e->getMessage();

              echo "<p>$msg</p>";
            }
            echo "</section>";
          }
          ?>
        </div>
      </div>
    </div><?php
  }

  private function renderPreview(Form $form, bool $isNewPost): void {
 ?>
    <div class="wplf-editor__preview">
      <!-- Rendered with JS -->

      <?php
      // This can't work, because it renders <form> tags, and that creates nested forms, which result in undefined broken behaviour.

      // That's why it's done with JS.
      // $this->core->render($form, ['renderNoJsFallback' => false]);
      ?>
    </div><?php
  }


  private function renderUsage(Form $form, bool $isNewPost): void {
    $post = getFormPostObject(); ?>
    <p>
      <?=esc_html__('Put this shortcode in a post to use the form.', 'wplf')?>
    </p>

    <div class="wplf-formRow">
      <input type="text" class="code" value='[libreform id="<?php echo esc_attr($post->ID); ?>"]' readonly>
    </div>

    <p>
      <?=esc_html__('If you prefer PHP, that works too:', 'wplf')?>
    </p>

    <!-- Ugly but it works as intended -->
    <code>&lt;?php
$form = new \WPLF\Form(getFormPostObject(<?=absint($post->ID)?>));
libreform()->render($form); ?&gt;</code>
    <?php
  }


  private function renderSelectors(Form $form, bool $isNewPost): void {
    $all = $this->selectors->getAll();

    ksort($all);
    ?>


    <div class="wplf-selectors">
      <div class="wplf-selectors__info">
        <p>
          <?=__('Selectors are special strings that will be replaced with their corresponding values at runtime.', 'wplf')?>
          <?=__('Most selectors work everywhere, while some depend on a spesific context, such as the form submission.', 'wplf')?>
        </p>

        <h3>Syntax</h3>

        <code>## SELECTOR_NAME OptionalArgument1, OptionalArgument2 ##</code>

        <p>
          <?=__('Selector names are always uppercase alphanumeric strings, and can receive any number of arguments, separated by commas.', 'wplf')?>
          <?=__('The arguments are treated as strings, and are passed into the corresponding selector function.', 'wplf')?>
        </p>
      </div>

      <div class="wplf-selectors__list">
        <?php foreach ($all as $selectorKey => $selector) {
          // Trusted input with HTML data, no escaping.
          $description = $selector['labels']['description'];
          $usage = $selector['labels']['usage'];
          $name = $selector['labels']['name'];
          $example = $selector['labels']['example'];

          // Input is trusted and has to be unescaped for formatting to work.
          ?>
          <div class="wplf-selectors__selector">
            <strong class="wplf-selectors__selector__name"><?=$name?></strong>

            <p class="wplf-selectors__selector__description">
              <?=$description?>
            </p>

            <p class="wplf-selectors__selector__usage">
              <?=$usage?>
            </p>

            <code class="wplf-selectors__selector__example"><?=$example?></code>
          </div>
          <?php
        } ?>
      </div>
    </div>
    <?php
  }

  private function renderSubmissions(Form $form, bool $isNewPost): void {
    // $form = getFormPostObject();
    // $form = new Form($form);
    $form->setFields($this->io->form->getFields($form));

    ?>

    <div class="wplf-submissionList">
      <!-- SubmissionList.tsx is injected here -->
    </div><?php
  }

  private function renderSettings(Form $form, $isNewPost = false) {
    $form = getFormPostObject();

    $form = new Form($form);
    // $meta = get_post_meta($post->ID);
    $siteEmail = str_replace(['https://', 'http://'], '', home_url());

    $thankYou = $form->getSuccessMessage();
    $submissionTitleFormat = $form->getSubmissionTitleFormat();

    $toPlaceholder = esc_attr(get_option('admin_email'));  // this get_option is ok, the option is autoloaded anyway
    $fromPlaceholder = "WordPress <wordpress@$siteEmail>";
    $subjectPlaceholder = esc_attr__('Submission ### SUBMISSION id ## from form ## FORM title ##', 'wplf');
    $contentPlaceholder = esc_attr__('Form ## FORM title ## (ID ## FORM ID ##) was submitted with the following values:', 'wplf') . "\n\n ## SUBMISSION ##";

    $emailCopy = $form->getEmailNotificationData();
    $emailCopyEnabled = $emailCopy['enabled'] ?? null === 1;
    $to = $emailCopy['to'] ?? $toPlaceholder;
    $from = $emailCopy['from'] ?? $fromPlaceholder;
    $subject = $emailCopy['subject'] ?? $subjectPlaceholder;
    $content = $emailCopy['content'] ?? $contentPlaceholder;

    $wplfDestroyUnusedDatabaseColumnsEnabled = $form->getDestroyUnusedDatabaseColumnsValue();
    $addToMediaLibraryEnabled = $form->getAddToMediaLibraryValue();
    ?>

    <div class="wplf-tabs wplf-formSettings" data-name="FormEditSettingsActiveTab" data-default="afterSubmission" data-remember>
      <section class="wplf-tabs__tab wplf-afterSubmission" data-name="FormEditSettingsActiveTab" data-tab="afterSubmission">

        <h3>
          <?=__('After submission', 'wplf')?>
        </h3>

        <div class="wplf-formRow">
          <label for="wplfSuccessMessage">
            <strong>
              <?php esc_attr_e('Success message', 'wplf'); ?>
            </strong>

            <textarea name="wplfSuccessMessage" class="wplf-cmEditor"><?=$thankYou?></textarea>

            <p><?=__('HTML and selectors allowed. If part of the message is clipped when you try to edit it, save the form to refresh the page. It should work normally afterwards.', 'wplf')?>
          </label>
        </div>


      </section>



      <section class="wplf-tabs__tab wplf-email" data-name="FormEditSettingsActiveTab" data-tab="email">
        <h3>
          <?=__('Email confirmation', 'wplf')?>
        </h3>

        <div class="wplf-formRow">
          <label for="wplfEmailCopyEnabled">
            <input
              id="wplfEmailCopyEnabled"
              name="wplfEmailCopyEnabled"
              type="checkbox"
              value="1"
              <?=checked($emailCopyEnabled, true, false)?>
            >

            <?php esc_html_e('Send email when form is submitted?', 'wplf'); ?>
          </label>
        </div>

        <p>
          <?=__('You may use selectors like ## SUBMISSION ## and ## FORM title ## in the message to add content dynamically. HTML is not supported by default.', 'wplf'); ?>
        </p>

        <div class="wplf-formRow">
          <label for="wplfEmailCopyContent">
            <strong>
              <?php esc_attr_e('Content', 'wplf'); ?>
            </strong>

            <textarea
              name="wplfEmailCopyContent"
              placeholder="<?=$contentPlaceholder?>"
              rows="10"
            ><?php echo esc_attr($content); ?></textarea>
          </label>
        </div>

        <div class="wplf-formRow">
          <label for="wplfEmailCopyTo">
            <strong>
              <?php esc_attr_e('Send to', 'wplf'); ?>
            </strong>

            <input
              type="text"
              name="wplfEmailCopyTo"
              value="<?php echo esc_attr($to); ?>"
              placeholder="<?=$toPlaceholder?>"
            >
          </label>
        </div>

        <div class="wplf-formRow">
          <label for="wplfEmailCopyFrom">
            <strong>
              <?php esc_attr_e('Sender email', 'wplf'); ?>
            </strong>

            <input
              type="text"
              name="wplfEmailCopyFrom"
              value="<?php echo esc_attr($from); ?>"
              placeholder="<?=$fromPlaceholder?>"
            >
          </label>
        </div>

        <div class="wplf-formRow">
          <label for="wplfEmailCopySubject">
            <strong>
              <?php esc_attr_e('Subject', 'wplf'); ?>
            </strong>

            <input
              type="text"
              name="wplfEmailCopySubject"
              value="<?php echo esc_attr($subject); ?>"
              placeholder="<?=$subjectPlaceholder?>"
            >
          </label>
        </div>
      </section>

      <section class="wplf-tabs__tab wplf-misc" data-name="FormEditSettingsActiveTab" data-tab="misc">
        <h3>
          <?=__('Submission settings', 'wplf')?>
        </h3>

        <div class="wplf-formRow">
          <label for="wplfSuccessMessage">
            <strong>
              <?php esc_attr_e('Title format', 'wplf'); ?>
            </strong>

            <input name="wplfSubmissionTitleFormat" value="<?=esc_attr($submissionTitleFormat)?>">

            <p><?php esc_html_e('Submissions will generate a title based on this format.', 'wplf'); ?></p>
            <p><?=__('Selectors are allowed. No HTML.')?></p>
          </label>
        </div>



        <h3>
          <?=__('Potentially dangerous options', 'wplf')?>
        </h3>

        <div class="wplf-formRow">
          <label for="wplfAddToMediaLibrary">
            <input
              id="wplfAddToMediaLibrary"
              name="wplfAddToMediaLibrary"
              type="checkbox"
              value="1"
              <?=checked($addToMediaLibraryEnabled, 1, false)?>
            >
            <?php esc_html_e('Add files to media library', 'wplf'); ?>
          </label>
        </div>

        <p><?php esc_html_e("Uploads to the media library are slow because there are safeguards protecting you from yourself.", 'wplf'); ?></p>

        <p><?php esc_html_e("You can skip the media library, and upload files directly to your server, but you do so at your own risk.", 'wplf'); ?></p>

        <p>
          <a href="https://github.com/libreform/libreform/blob/master/docs/concerns.md"><?=__('Make sure to acquaint yourself with this document before changing this.', 'wplf')?></a>
        </p>

        <?php
        $formVersion = $form->getVersionCreatedAt();

        if (\version_compare($formVersion, $this->core->version, '<')) {
          ?>
            <div class="wplf-formRow">
              <label for="wplfUpdateVersionCreatedAt">
                <input
                  id="wplfUpdateVersionCreatedAt"
                  name="wplfUpdateVersionCreatedAt"
                  type="checkbox"
                  value="1"
                  <?=checked($isNewPost || apply_filters('wplfUpgradeFormByFefault', false, $form), true, false)?>
                >
                <?php esc_html_e('Update form version', 'wplf'); ?>
              </label>
            </div>

            <p><?php esc_html_e('When you create the form initially, we save the WPLF version used to create it. Some new features might be unavailable before you update the version.', 'wplf'); ?></p>

            <p><?php esc_html_e('This is to ensure your forms keep working after an update.', 'wplf'); ?></p>
          <?php
        } ?>

        <div class="wplf-formRow">
          <label for="wplfDestroyUnusedDatabaseColumns">
            <input
              id="wplfDestroyUnusedDatabaseColumns"
              name="wplfDestroyUnusedDatabaseColumns"
              type="checkbox"
              value="1"
              <?=checked($wplfDestroyUnusedDatabaseColumnsEnabled, 1, false)?>
            >
            <?php esc_html_e('Delete removed fields from database', 'wplf'); ?>
          </label>
        </div>

        <p>
          <?=__("This setting WILL cause loss of data if used on a form with submissions. It's useful for reusing the same form after an event or freeing field names in the database. ", 'wplf')?>
        </p>

        <p>
          <?=__("All field data that doesn't have a field in the current version of the form will be deleted, and form history data will be destroyed.", 'wplf')?>
        </p>
      </section>

      <header>
        <button type='button' class='wplf-tabs__tabSwitcher' data-name='FormEditSettingsActiveTab' data-target='afterSubmission'>
          <?=__('After submission', 'wplf')?>
        </button>

        <button type='button' class='wplf-tabs__tabSwitcher' data-name='FormEditSettingsActiveTab' data-target='email'>
          <?=__('Email confirmation', 'wplf')?>
        </button>

        <button type='button' class='wplf-tabs__tabSwitcher' data-name='FormEditSettingsActiveTab' data-target='misc'>
          <?=__('Miscellaneous', 'wplf')?>
        </button>
      </header>
    </div>
    <?php
  }
}
