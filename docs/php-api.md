# PHP API

Let's look at modules first, and entities after that. Please note that this list is by no means exhaustive, if you think something should be added, feel free to contribute an issue or a pull request. Do note that some parts may have been left out intentionally.

WPLF instance is saved in a static variable and can be accessed with the `libreform()` function. Assume `$wplf = libreform();` in the following examples.

## IO

Available under `$wplf->io`. **Always** wrap IO calls inside try / catch blocks as the methods may throw `Error`.

### `$wplf->io->getOption(string $name, $defaultData = null)`

Get prefixed option from wp_options.

### `$wplf->io->setOption(string $name, $data = null)`

Set prefixed option to wp_options.

## `$wplf->io->form`

Subclass containing form related operations.

### `$wplf->io->form->getFields(Form $form, int $historyId = null)`

Get the form fields array, optionally for a spesific history id.

### `$wplf->io->form->getSubmissions(Form $form, int $page = 0, $limit = 100)`

Get form submissions. Returns the following array;

```php
[
  $submissions,
  (int) ($count / $limit), // return amount of pages with the limit
  $count,
];
```

### `$wplf->io->form->getSubmissionCount(Form $form)`

Count submissions in form.

### `$wplf->io->form->getSubmissionById(Form $form, int $id)`

### `$wplf->io->form->getSubmissionByUuid(Form $form, string $uuid)`

Get a single submission.

### `$wplf->io->form->insertHistoryFields(Form $form)`

Backup the current form fields to the history table.

### `$wplf->io->form->getHistoryFields(Form $form, int $historyVersion)`

Get fields from a spesific history version.

### `$wplf->io->form->getAllHistoryFields(Form $form)`

Get list of fields the form has ever had, as far as we know. This can be reset from the form edit view.

## `$wplf->io->submission`

Subclass containing submission related operations.

#### `$wplf->io->submission->create(Form $form, $entries = [])`

Create a `Submission` from \$entries and associate it to `$form`. Returns the `Submission`, or throws trying.

#### `$wplf->io->submission->delete(Submission $submission, $removeUploads = true)`

Deletes the submission and it's uploads if `$removeUploads` is set to `true`. Returns true on success, throw on error.

#### `$wplf->io->submission->uploadFiles(Form $form, string $name, $blackbox)`

If you're going to use this, you're going to have to read the source yourself instead of relying on this. You shouldn't have to, as create will call it for you if necessary.

## `$wplf->io->db`

Subclass containing database related operations, such as table creation.

There's intentionally no method list for this class, to encourage you to look at the code before using it. There should be plenty of comments to guide you on your path to ~~enlightenment~~ success.

The class contains methods that are potentially destructive or that open gaping security holes if used wrong, so think before you use. This isn't meant to discourage you from using it, but to make you aware of the implications of using it.

Even the advanced user should have little to no use of this class.

## Settings

Available under `$wplf->settings`.

### `$wplf->settings->get($settingName)`

Get setting value.

### `$wplf->settings->set($settingName, $value)`

Set setting value. Will throw an Error if \$settingName does not exist.

## Notices

Available under `$wplf->notices`. Object-oriented API for admin notices.

### `$wplf->notices->add(string $name, string $content, $options = [])`

Add a notice to the list of notices. `$name` must be unique.

`$options` include

- type, controls notice appearance. Defaults to `'info'`.
- dismissable, boolean. Self explanatory. Defaults to `false`.
- show, boolean. Whether or not to show the notice. Defaults to `false`.

### `$wplf->notices->show(string $name)`

### `$wplf->notices->hide(string $name)`

Show or hide notice

## Selectors

Available under `$wplf->selectors`.

### `$wplf->selectors->getTemplateTag()`

Get tag used for capturing selectors.

### `$wplf->selectors->createSelector(string $selector, $callback, $labels = [])`

Attach a closure to a selector name. Example:

```php
$wplf->selectors->createSelector(
  'TIMESTAMP',
  function () {
    return time();
  },
  [
    'name' => __('Timestamp', 'wplf'),
    'description' => __('Get UNIX epoch at the time of form render. Can be used to determine how long did it take for the user to fill the form.', 'wplf'),
    'usage' => __('Works everywhere.', 'wplf'),
  ]
);
```

`$callback` _may_ receive these parameters, in this order. Depending on the context, they may not all be available.

- `$params`, optional parameters passed after the selector name.
- `$form`, `Form` instance.
- `$submission`, `Submission` instance.

Try not to expose any personal data with these while you're at it, ok?

### `$wplf->selectors->getAll()`

Get all selectors. If you want to modify them, use the `$wplfAllSelectors` filter.

### `$wplf->selectors->parse(string $content, ?Form $form, ?Submission $submission)`

Run a string of content through the parser, returning a new string where the selectors are replaced with data. Provide the rest of the arguments if you want them to be available to the selectors.

## Addons

Available under `$wplf->addons`. API to register your code as a WPLF addon. Addons are "first class citizens", meaning they get their own settings page, and access to the core plugin object.

Only thing of interest here is the `register` method, which is best described with an example.

```php
$addon = new YourPlugin();

$wplf->addons->register([
  // The name you wish to show on the WPLF plugin page. Will also be used to access methods in the instance.
  "name" => "YourPlugin",

  // Used in the rendered box on the addons page
  "description" => "What your plugin does in a sentence or two",

  // Plugin URL. Can be wordpress.org or pretty much any URL where you can download the plugin
  "link" => "https://toyourplugin.com",

  // Also used in the box
  "version" => YOUR_PLUGIN_VERSION,

  // Self-explanatory?
  "instance" => $plugin,

  // Function that renders your settings page, or a string that contains the link to it. Leave empty to disable.
  "settingsPage" => [$plugin, "render_settings_page"],
]);
```

If you use spaces in the name, you can access the plugin instance like this:

`$wplf->plugins->{"Your plugin"}->somePublicMethod()`

## Rest API

Available conditionally under `$wplf->restApi`. While most of the methods are public, there's nothing useful here, for the average user at least.

## Admin interface

Available conditionally under `$wplf->adminInterface`. There's nothing useful here. It's just there to wrap the admin interface together.

## Polylang

Available conditionally under `$wplf->polylang`. It registers strings for Polylang to use and contains a failsafe'd translate function, but mostly it just makes the integration happen.

# Entity classes

## `Form`

`WPLF\Form` instance. Used as a type guard and as an interface.

Properties marked as `public` are visible in REST API responses.

Contains a magic \_\_get that will fallback into the underlying WP_Post object if you try and access a property that doesn't exist. Also contains so many getters that it would drive me mad to list them all, just open the file if you're looking for the spesifics.

## `Submission`

`WPLF\Submission` instance. Used as a type guard and as an interface.

Properties marked as `public` are visible in REST API responses.

Contains so many getters that it would drive me mad to list them all, just open the file if you're looking for the spesifics.

## `Error`

`WPLF\Error` instance, nothing more but a class that extends \Exception and adds an additional property for data.

## `Module`

Abstract class that the classes under `classes/` extend. Also the reason why you can access other modules from other modules.

Contains a magic \_\_get that uses an array of names to route to the core plugin object.
