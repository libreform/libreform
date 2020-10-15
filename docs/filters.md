# Filters

The standard stuff. Add your filters with `add_filter`.

**Note:** This list is generated with silver searcher: `ag -Q apply_filters >> docs/actions.md`

Further descriptions of the filters have intentionally been left out. If you're going to change values on the fly, you better understand what the code is doing with the value. Documentations also go out of date, we might add a new parameter to a filter, but forget to reflect it here.

## List of filters

classes/entities/class-form.php:240: return apply_filters('wplfAdditionalFields', $defaults, $this);

classes/entities/class-form.php:290: $formEntries = apply_filters('wplfFieldsBeforeValidateSubmission', $formEntries, \$this);

classes/entities/class-form.php:292: $honeypotEnabled = apply_filters('wplfEnableHoneypot', true, $this);

classes/entities/class-form.php:293: $requiredEnabled = apply_filters('wplfEnableRequiredValidation', true, $this);

classes/entities/class-form.php:294: $additionalFieldsEnabled = apply_filters('wplfEnableAdditionalFieldsValidation', true, $this);

classes/entities/class-form.php:350: $whitelist = apply_filters('wplfAllowedFormFields', array_merge($formFieldNames, $this->getAdditionalFields()), $this);

classes/entities/class-submission.php:105: $data = apply_filters('wplfEmailNotificationData', $email, \$this);

classes/entities/class-submission.php:114: \$headers = apply_filters('wplfEmailNotificationHeaders', [

classes/entities/class-submission.php:117: $attachments = apply_filters('wplfEmailNotificationAttachment', [], $this);

classes/class-plugin.php:45: if (apply_filters('wplfEnablePolylangSupport', true) && class_exists('Polylang')) {

classes/class-plugin.php:149: 'requestHeaders' => (object) apply_filters('wplfSubmissionHeaders', [

classes/class-plugin.php:206: wp_localize_script('wplf-admin', 'wplfData', apply_filters('wplfAdminData', \$this->getLocalizeScriptData([

classes/class-plugin.php:215: $data = apply_filters('wplfFrontendData', $this->getLocalizeScriptData());

classes/class-plugin.php:621: $output = apply_filters('wplfAfterRender', $output, $form, $renderOptions);

classes/class-plugin.php:645: $submission = apply_filters('wplfFormRenderSubmission', $submission, $this, $options);

classes/class-plugin.php:646: $content = apply_filters('wplfImportFormTemplate', $options['content'] ?? $form->content, $form);

classes/class-plugin.php:657: $content = apply_filters('wplfBeforeRender', $content, $form, $options);

classes/modules/class-addons.php:165: return apply_filters('wplf_enabled_plugins', \$this->plugins);

classes/modules/class-addons.php:186: return apply_filters('wplf_recommended_plugins', \$list);

classes/modules/class-admin-interface.php:209: $importedContent = apply_filters('wplfImportFormTemplate', null, $form);

classes/modules/class-admin-interface.php:543: <?=checked($isNewPost || apply_filters('wplfUpgradeFormByFefault', false, $form), true, false)?>

classes/modules/io/class-submission-io.php:29: $entries = apply_filters('wplfFieldsAfterValidateSubmission', $entries, \$form);

classes/modules/io/class-submission-io.php:47: if (apply_filters('wplfUseDefaultAfterSubmission', true, $submission, $form)) {

classes/modules/io/class-submission-io.php:259: $name = sanitize_file_name(apply_filters('wplfUploadedFileName', $defaultName, $uploadData, $form));

classes/modules/io/class-submission-io.php:262: $filePath = apply_filters('wplfUploadedFilePath', $defaultPath, $uploadData, $form);

classes/modules/io/class-submission-io.php:301: 'value' => json_encode(apply_filters('wplfSubmissionMeta', [

classes/modules/class-selectors.php:62: $value = apply_filters('wplfSubmissionSelectorFileFieldValue', $str, $value, $formField);

classes/modules/class-selectors.php:67: \$value = apply_filters('wplfEmptySubmissionFieldValue', \_\_('(empty)', 'wplf'));

classes/modules/class-selectors.php:178: return apply_filters('wplfAllSelectors', \$this->entries);

classes/modules/class-rest-api.php:319: $useFallback = apply_filters('wplfSetNoJsFallback', isset($params['_nojs']), \$form);

classes/modules/class-rest-api.php:322: $allowFallback = apply_filters('wplfAllowNoJsFallback', true, $form);

classes/modules/io/class-form-io.php:158: return apply_filters('wplfHistoryFields', (object) $historyFields, $form);

docs/API.md:45: apply_filters('wplfFrontendData', libreform()->getLocalizeScriptData())

lib/helpers.php:126: return apply_filters('wplfMainCapability', 'upload_files');

index.php:28: require_once apply_filters('wplfPluginClassLocation', 'classes/class-plugin.php');
