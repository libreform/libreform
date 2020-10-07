## Limitations

There are some limitations. If you find your way around some of these, contributions are more than welcome.

- Nested field names like the following; `fieldgroup[name]` are not supported.
  - Multi-value field names like `dietaryRestrictions[]` are fine, and **required** for radio buttons that work.
  - This restriction exists because supporting them complicates things quite a lot, and I can't think of a single use case where you couldn't just use a different naming convention.
- There are some additional restrictions to field names.
  - Field names like `_fieldId` which would wreak havoc in the database are not allowed. There's no list, but fear not and read on.
  - You can't reuse a name which has existed before in the form. This is to protect any earlier submissions. You can override this on a form-by-form basis.
  - A validation error is thrown if a field name is invalid, so you can't mess up.
- The Polylang integration doesn't always work in the _admin preview_ of the form. It is what it is, it works in every other case.
- Submissions view is "a bit crude" at the moment and there is no export.
- Uninstallation doesn't delete data yet. Should it? The tables we create don't hinder performance even if they stay.
- The text domain refuses to load, meaning plugin only works in English

## Browser support

The plugin may not work properly in outdated browsers, as it uses modern JavaScript features such as Fetch, Promise and async await. At the time of writing, all of these have been available natively in evergreen browsers such as Brave, Chrome and Firefox for quite some time now.

We used to provide polyfills for Fetch and Promise, but doing it yourself is a much better option. Test your forms on browsers that you expect your users to submit them with, and provide the necessary polyfills yourself. Our build process compiles the JS to target target browsers matching this browserslist query: [`>0.25%, not ie 11, not op_mini all`](https://jamie.build/last-2-versions)

In other words, our code is not bloated with stuff that 99% of the browsers have natively. You can use polyfill.io to provide support for older browsers if necessary. It's possible to get the plugin to work in a "browser" such as IE11, submit an issue if you need help with that.
