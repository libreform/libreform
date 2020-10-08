# Concerns

User input is the root of all evil in computer science. Any plugin that lets outsiders write to your WordPress database and filesystem is a potential security threat. WP Libre Form is no different in that regard.

We maintain a high standard for security, but some tradeoffs have been made in name of usability and developer experience. In the end, your choices determine how secure or insecure this plugin is.

Using it wrong is certainly going to get your site hacked.

## List of concerns

- Our core feature is essentially an unescaped chunk of HTML, that can contain JavaScript. If it's on the page, anything can be done with it.
- Possible enumeration attack vector in nojs fallback under certain conditions
- Data validation
- Unrestricted file uploads
- GDPR

## Solutions

### Our core feature is essentially an unescaped chunk of HTML, that can contain JavaScript. If it's on the page, anything can be done with it.

The purpose of WPLF is to allow users to write forms in HTML without being hindered by WordPress. To be able to edit forms, users need the unfiltered_html capability, if they have that, they could do whatever they wanted anyway. In normal WordPress instances, every user with the right to edit posts has this capability. **THINK BEFORE ADDING USERS WITH TOO MUCH PRIVILEGES**. There are tools to customise user roles in WordPress, use them.

If you're using WPLF in a site with untrustworthy people having access to the forms, you should probably strip things like script tags and inline JavaScript from the form using our filters.

### Possible enumeration attack vector in nojs fallback under certain conditions

If you use the `## SUBMISSION ##` selector or equivalent in the submission success message and allow submissions without JavaScript, you're vulnerable. In the age of GDPR, you're also royally fucked if that were to happen.

When the server flows through the fallback path, it will redirect the user back to the same page with the submission uuid added as a GET parameter. Said parameter is used to get a submission from the database and the submission is used for selectors.

While UUIDs are not cryptographically secure, they're random enough. At least when it's a proper random byte generator behind them, like we have. Trillions of UUIDs are going to be have to created to have a microscopic chance of a collision with an existing UUID, but it's possible.

If you're concerned, you can either:

- clear the submission by using the wplfFormRenderSubmission filter. This prevents selectors that depend on \$submission from working in the render.
- avoid using selectors like SUBMISSION in the success message. We're not exposing any of your data out of the box, but you might do that yourself.
- create a pull request that implements JWT authentication based on the submission uuid, making enumeration impossible.
- figure something else out and share your thoughts with us!

### Data validation

We validate the submissions, but our validation is restricted to checking inputs with required attribute, and making sure there isn't anything extra in the data.

If you need to properly validate all inputs for phonenumbers, emails etc, nothing prevents you from doing that. Use the `wplfValidateSubmission` action.

### Unrestricted file uploads

Only a concern if you untick the box that says "add uploads to media library". The uploaded files aren't checked in any way. Here's a horror story.

> You add a public form with a file upload field. Someone uploads a file called `malicious.php`. They don't know for sure where it went, but they can guess. Even if they don't find it, if someone clicks that link when viewing the submission, you get owned.

Sure, we could add a check that prevents PHP files from being added. But that's security through obscurity. If you use the unrestricted file uploads, **ensure that execution of PHP and other potentially harmful files is blocked in the uploads folder**. If you don't know how, don't use the feature. In addition to that, you should add your own validation for the types of files you're expecting.

With great power...

### GDPR

TL;DW it's your problem. The data is in WordPress, you decide who gets to "process" it. Everyone who has access to the forms is a data processor from GDPR point of view, because they also have access to the form submissions.

At the time of writing, submissions are completely anonymous, even if the user is authenticated at the time of submission, but changing that is literally one line HTML code away. If you only use WPLF for something like a weekly poll system without gathering any personal data, GDPR doesn't concern you.
