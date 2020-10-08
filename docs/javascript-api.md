### JavaScript API

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
