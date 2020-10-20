# WP Libre Form API

## PHP

[To the API](php-api.md)

## JavaScript

[To the API](javascript-api.md)

There's two ways to consume our JavaScript API. It's enqueued on the site by default, and exposed under `window.WPLF`. You can also install it as an npm package, and include it in your code.

### The easy way

```javascript
const { WPLF } = window
// same as var WPLF = window.WPLF
```

This is the easiest way to use it, you don't need any build tools for this approach, _but_...

There's a big chance our script will be loaded later than yours. If you try to reference WPLF before it has loaded, you will run into an error. [To fix it, make your script depend on `wplf-frontend`.](FAQ.md#uncaught-referenceerror-wplf-is-not-defined)

### The modern way

```
npm install @libreform/libreform
```

In addition to just installing the npm package, to avoid downloading the same script twice (once by us, again by you), you should deregister `wplf-frontend`.

Doing that will also prevent the matching `wp_localize_script` from working, which you need to fix, but luckily it's a write and forget kind of solution;

```php
add_action('wp_enqueue_scripts', function() {
  wp_deregister_script('wplf-frontend');

  wp_enqueue_script('yourscript', '/path/to/yourscript');

  // The scripts depend on a global object in window.wplfData;
  // this is how you add it.
  wp_localize_script(
    'yourscript',
    'wplfData',
    apply_filters('wplfFrontendData', libreform()->getLocalizeScriptData())
  );
});
```

Then you can just use it like you would any package.

```javascript
import WPLF from '@libreform/libreform'

const { WPLF_Form, WPLF_Tabs, api, manager } = WPLF
```

If you're building something like a SPA, then you should assign window.wplfData in your application, **before** importing the package.

When you import the package, it's default export will initialize, lookup window.wplfData, and then "cache" it, and you will have a bad time. You can also configure the data manually if you're feeling brave.
