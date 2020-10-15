# JavaScript API

```javascript
import WPLF from '@libreform/libreform'

const { api, WPLF_Form, WPLF_Tabs } = WPLF
```

## WPLF

The face of the JavaScript API. Responsible for managing forms.

### `WPLF.findFormsById(id: number): WPLF_Form[]`

#### `WPLF.findFormsBySlug(slug: string): WPLF_Form[]`

Returns an array populated with `WPLF_Form` instances. It's valid to have multiple instances of the form on one page.

```javascript
WPLF.findFormsById(123).forEach((form) => {
  // Do whatever you want. Mess with the DOM, add callbacks, etc.
})
```

### `WPLF.initialize()`

Find all forms and make init them. This one runs automatically with the default settings. Run after dynamically loading forms or if you've disabled the autoinit.

### `WPLF.attach(form: Element | WPLF_Form)`

Create WPLF_Form instance from element and make it visible to WPLF.findFormsById.

You will only need this if you load forms dynamically or you've disabled autoinit of forms.

You can also pass WPLF_Form directly.

```javascript
WPLF.attach(document.querySelector('.wplf'))

WPLF.attach(new WPLF_Form(document.querySelector('.wplf')))
```

### `WPLF.detach(form: WPLF_Form)`

Destroy WPLF_Form instance and remove event listeners from the form.

## WPLF_Form

Responsible for a single form. Submits the form, handles callbacks etc.

**NOTE**: When you call `WPLF_Form` methods, note that you aren't actually using `WPLF_Form` in your call, but an instance of `WPLF_Form`.

Example:

```javascript
const form = WPLF.findFormsById(1)[0]

// not like this:
// WPLF_Form.createSubmitHandler(...)

// like this:
form.createSubmitHandler(...)
```

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

### `WPLF_Form.runCallback(type: string, params: List<any> = {})`

Use this inside your custom submit handler to keep callback support. It calls every callback of the `type` with any number of parameters.

## api

The WPLF api client. Used for all interactions between the client and the server, with the exception of admin.

Methods return a promise that resolves into a fetch response or an error. Always use with try/catch!

### `api.requestRender(id: string | number, content: string)`

Request REST API to render the form with the content provided. If no content is provided, defaults to the post_content.

**REQUIRES AUTHENTICATION AND EDITOR LEVEL PERMISSIONS.**

### `api.requestForm(idOrSlug: string | number)`

Request the data of a single form from the API.

### `api.requestForms(page: number)`

Request all forms. If there's a lot, pagination may be necessary. You'll find the pagination info in the response headers.

### `api.deleteSubmissions(idOrSlug: string | number, submissionUuids: string[])`

Delete form submissions. Uses UUIDs to lessen the risk of enumeration. To delete a single submission, pass it's uuid in an array.

**REQUIRES AUTHENTICATION AND EDITOR LEVEL PERMISSIONS.**

### `api.requestSubmissions(formIdOrSlug: string | number, page: number, limit: number)`

Request form submissions. If there's a lot, pagination is necessary. The pagination data can be found in the response headers.

**REQUIRES AUTHENTICATION AND EDITOR LEVEL PERMISSIONS.**

### `api.requestSubmission(formIdOrSlug: string | number, uuid: string)`

Request form submission.

**REQUIRES AUTHENTICATION AND EDITOR LEVEL PERMISSIONS.**

### `api.sendSubmission(body: FormData)`

Send the submission to the API.

## WPLF_Tabs

A class for creating tabs. Remembers the selection, supports nested tabs etc.

If you want to use the built-in tab functionality in some other way than we do, use this. The class expects certain attributes on the tab elements, but it's pretty relaxed about the HTML structure.

Please note that `WPLF_Tabs` refers to the instance variable and not the raw class itself.

### `WPLF_Tabs.refresh()`

Refreshes the instance. If you added new tabs, call this.

### `WPLF_Tabs.switchTab(string name)`

Switch tab to the name provided.
