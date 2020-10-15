# Actions

The standard stuff. Add your actions with `add_action`.

**Note:** This list is generated with silver searcher: `ag -Q do_action >> docs/actions.md`

Further descriptions of the actions have intentionally been left out. You better understand where the action runs and what it runs with before using the action. Documentations also go out of date, we might add a new parameter to an action, but forget to reflect it here.

## List of filters

classes/class-plugin.php:287: do_action("wplfBeforeDeleteForm", $form, $submissionCount);

classes/class-plugin.php:339: do_action("wplfDeleteForm", new Form(\$post));

classes/entities/class-form.php:301: do_action('wplfValidateSubmission', $formEntries, $this);

classes/entities/class-form.php:377: do_action('wplfHoneypotTriggered', $formEntries, $this);

classes/modules/io/class-submission-io.php:45: do_action('wplfAfterSubmission', $submission, \$form);
