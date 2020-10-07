# WP Libre Form

[![Build Status](https://travis-ci.org/libreform/wp-libre-form.svg?branch=master)](https://travis-ci.org/libreform/wp-libre-form) [![Latest Stable Version](https://poser.pugx.org/libreform/wp-libre-form/v/stable)](https://packagist.org/packages/libreform/wp-libre-form) [![Total Downloads](https://poser.pugx.org/libreform/wp-libre-form/downloads)](https://packagist.org/packages/libreform/wp-libre-form) [![Latest Unstable Version](https://poser.pugx.org/libreform/wp-libre-form/v/unstable)](https://packagist.org/packages/libreform/wp-libre-form) [![License](https://poser.pugx.org/libreform/wp-libre-form/license)](https://packagist.org/packages/libreform/wp-libre-form)

Use standard HTML5 markup to create fully functional forms for WordPress. [Version 2.0 breaks backwards compatibility.](#new-in-2-0)

## Features

- Forms are made of plain ol' HTML5; Type it in and it comes out as you intended.
- Works with any[\*](docs/limitations.md) valid HTML form. Just copy a form from a website and it should just work.
- Form submissions are saved to the database, each form has it's own table for the submissions
- Forms are stored in a custom post type `libreform`, and the accompanying data is in `wp_postmeta`. Importing and exporting your forms is as easy as ever.
- Validates fields tagged with the native HTML5 `required` attribute. Can be extended to validate `pattern` attribute if necessary.
- **It's hackable.** Add your own functionality with hooks and APIs. Frontend and backend.
- Email notifications of received form submissions
- File upload support to Media Library and outside with input type=file
- Multilingual support with Polylang
- Imported HTML templates for forms
- Selectors like `## USER_EMAIL ##`. Like eval, but safe.
- JavaScript API, written in TypeScript
- Forms are submitted with AJAX by default, but fall back to traditional methods if necessary.

## Why?

Modern HTML markup is a great way to build forms. With Libre Form, there's no need to use clunky form builders that are hard to customise. Ever tried building a pixel perfect implementation of a form design? It's drastically harder when you don't control the markup.

WP Libre Form is built upon the "WYSIWYG" principle. We use the HTML you supply somewhat as-is, we only parse it for selectors and minify it, so `wpautop` doesn't murder it.

That's our core feature, the rest are bonuses which you may find useful.

## Try it

[TryoutWP](https://gettryout.com/) has provided us with a live demo, [which you can find here](http://gettryout.com/new/?template=libreform&provider=demo&redirect=wp-admin%2Fpost.php%3Fpost%3D4%26action%3Dedit).

Please note that it reflects the current release, not the master branch.

## Server requirements

- PHP 7.3 or newer

## New in 2.0

The plugin has been rewritten from the ground up, breaking backwards compatibility. In other words; WPLF 1.5 is dead, long live WPLF 1.5!

Nothing in particular was wrong with 1.5, but it was getting a little annoying to maintain. The original version was written during ONE WordCamp, and we had added countless new features since that. You can still use the old version, but it will not receive updates anymore.

As migrations tend to be a pain in the ass, I made sure that the new version works side by side with the old one. Everything has been renamed so they do not conflict with each other.

Some key changes;

- New directory and slug, from `wp-libre-form` to `libreform`
- Shortcode has been renamed to `libreform` from `libre-form`
- The form post type is now `libreform` (the old one was `wplf-form`)
- API has been camelCase'd
- Actions and hooks have been renamed
- Form submissions live in separate database tables now, each form gets a table.

## Screenshots

### Form edit screen

![Form edit](assets/screenshot-1.png)

### Rendered form in the default 2020 theme

![Submissions](assets/screenshot-2.png)

### Email confirmation

![Submissions](assets/screenshot-3.png)

### Success message

![Submissions](assets/screenshot-4.png)

## Installation

### The Composer Way (preferred)

Install the plugin via [Composer](https://getcomposer.org/)

```
composer require libreform/libreform
```

Activate the plugin

```
wp plugin activate libreform
```

### The Old Fashioned Way

~~This plugin is available on the [official WordPress.org plugin directory](https://wordpress.org/plugins/libre-form/).~~ Not yet though.

You can also install the plugin by directly uploading a .zip of this repository

## Further reading

- [Examples](docs/examples.md)
- [Actions](docs/actions.md)
- [Filters](docs/filters.md)
- [API](docs/API.md)
- [FAQ](docs/FAQ.md)
- [Limitations](docs/limitations.md)
- [Architecture](docs/architecture.md)
