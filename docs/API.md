# WP Libre Form API

## PHP

We'll start by listing the modules, and then we will be looking at the entities. Please note that this list is by no means exhaustive, if you think something should be added, feel free to contribute an issue or a pull request.

WPLF instance is saved in a static variable and can be accessed with the `libreform()` function. Assume `$wplf = libreform();` in the following examples.

## IO

Available under `$wplf->io`.

As the name suggests, the IO class contains IO operations.

There's intentionally no method list for this class, to encourage you to look at the code before using it. There should be plenty of comments to guide you on your path to ~~enlightenment~~ success.

The class contains methods that are potentially destructive or that open gaping security holes if used wrong, so think before you use. This isn't meant to discourage you from using it, but to make you aware of the implications of using it.

### Settings

Available under `$wplf->settings`.

#### `$wplf->settings->get($settingName)`

Get setting value.

#### `$wplf->settings->set($settingName, $value)`

Set setting value. Will throw an Error if \$settingName does not exist.

### Notices

Available under `$wplf->notices`. Object-oriented API for admin notices.

#### `$wplf->notices->add(string $name, string $content, $options = [])`

Add a notice to the list of notices. `$name` must be unique.

`$options` include

- type, controls notice appearance. Defaults to `'info'`.
- dismissable, boolean. Self explanatory. Defaults to `false`.
- show, boolean. Whether or not to show the notice. Defaults to `false`.

#### `$wplf->notices->show(string $name)`

#### `$wplf->notices->hide(string $name)`

Show or hide notice

### Selectors

Available under `$wplf->selectors`.

#### `$wplf->selectors->getTemplateTag()`

Get tag used for capturing selectors.

#### `$wplf->selectors->createSelector(string $selector, $callback, $labels = [])`

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

#### `$wplf->selectors->getAll()`

Get all selectors. If you want to modify them, use the `$wplfAllSelectors` filter.

#### `$wplf->selectors->parse(string $content, ?Form $form, ?Submission $submission)`

Run a string of content through the parser, returning a new string where the selectors are replaced with data. Provide the rest of the arguments if you want them to be available to the selectors.

### Addons

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

### Rest API

Available conditionally under `$wplf->restApi`. While most of the methods are public, there's nothing useful here, for the average user at least.

### Admin interface

Available conditionally under `$wplf->adminInterface`. There's nothing useful here. It's just there to wrap the admin interface together.

### Polylang

Available conditionally under `$wplf->polylang`. It registers strings for Polylang to use and contains a failsafe'd translate function, but mostly it just makes the integration happen.

## Entity classes

### `Form`

`WPLF\Form` instance. Used as a type guard and as an interface.

Properties marked as `public` are visible in REST API responses.

Contains a magic \_\_get that will fallback into the underlying WP_Post object if you try and access a property that doesn't exist. Also contains so many getters that it would drive me mad to list them all, just open the file if you're looking for the spesifics.

### `Submission`

`WPLF\Submission` instance. Used as a type guard and as an interface.

Properties marked as `public` are visible in REST API responses.

Contains so many getters that it would drive me mad to list them all, just open the file if you're looking for the spesifics.

### `Error`

`WPLF\Error` instance, nothing more but a class that extends \Exception and adds an additional property for data.

### `Module`

Abstract class that the classes under `classes/` extend. Also the reason why you can access other modules from other modules.

Contains a magic \_\_get that uses an array of names to route to the core plugin object.

## JavaScript

If you have installed our npm package:

```javascript
import WPLF from '@libreform/libreform'
```

and if you haven't

```javascript
const { WPLF } = window // same as var WPLF = window.WPLF
```

You might find `WPLF_Form` useful as well. You can access it through the WPLF object. Note that you don't need to create instances of it yourself in most situations.

```javascript
const { WPLF_Form } = WPLF
```

Remember to make your own scripts depend on our, or else: [Uncaught ReferenceError: WPLF is not defined](FAQ.md#uncaught-referenceerror-wplf-is-not-defined)

### Methods

More methods than these exist, but if it's undocumented, you shouldn't use it. That's especially true for any methods prefixed with an underscore `_`. Because it's JavaScript, there's no real way of having private class methods.

**NOTE**: When you call `WPLF_Form` methods, note that you aren't actually using `WPLF_Form` in your call, but an instance of `WPLF_Form`.

Example:

```javascript
const form = WPLF.findFormsById(1)[0]

// not like this:
// WPLF_Form.createSubmitHandler(...)

// like this:
form.createSubmitHandler(...)
```

#### `WPLF.findFormsById(id: number): WPLF_Form[]`

#### `WPLF.findFormsBySlug(slug: string): WPLF_Form[]`

Returns an array populated with `WPLF_Form` instances. It's valid to have multiple instances of the form on one page.

```javascript
WPLF.findFormsById(123).forEach((form) => {
  // Do whatever you want. Mess with the DOM, add callbacks, etc.
})
```

#### `WPLF.attach(form: Element | WPLF_Form)`

Create WPLF_Form instance from element and make it visible to WPLF.findFormsById.

You will only need this if you load forms dynamically or you've disabled autoinit of forms.

You can also pass WPLF_Form directly.

```javascript
WPLF.attach(document.querySelector('.wplf'))

WPLF.attach(new WPLF_Form(document.querySelector('.wplf')))
```

#### `WPLF.detach(form: WPLF_Form)`

Destroy WPLF_Form instance and remove event listeners from the form.

#### `WPLF_Form.addCallback(name: string, type: string, callback: FormCallback)`

Adds a callback to the form. `type` can be one of three: `beforeSend`, `success` or `error`.

The callback parameters depend on the type of callback.

```javascript
const form = WPLF.findFormsById(123)[0]

form.addCallback('huge success', 'success', (response) => {
  alert('???')
})
```

#### `WPLF_Form.removeCallback(name: string, type: string)`

Remove a callback from the form.

```javascript
const form = WPLF.findFormsById(123)[0]

form.removeCallback('huge success', 'success')
```

#### `WPLF_Form.createSubmitHandler(handler?: SubmitHandler)`

If you want to set a custom submit handler for the form, this is how. Please note that if you don't implement callbacks in your submit handler, they will not work.

You can also call it without params to create the default handler.

#### `WPLF_Form.removeSubmitHandler()`

Using your own custom submit handler requires unsetting the existing one.

#### `WPLF_Form.attachSubmitHandler()`

Attach the submit handler to the form. If you created your own submit handler, **remember to assign it to the form instance first.**

```javascript
const handler = form.createSubmitHandler()

form.submitHandler = handler
form.attachSubmitHandler()
```

#### `WPLF_Form.runCallback(type: string, params: List<any> = {})`

Use this inside your custom submit handler to keep callback support. It calls every callback of the `type` with any number of parameters.

#### `WPLF_Form.send()`

Gathers form data from the DOM and sends the data to backend. You can implement your own send method as well, but do we recommend it?

No. Customise the server handler instead.
