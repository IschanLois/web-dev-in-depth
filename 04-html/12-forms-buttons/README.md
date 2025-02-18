# Forms and buttons

## Form controls
```HTML
<!-- Text field -->
<input type="text" name="name" required/>
<!-- Dropdown -->
<select name="name">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
<select>
```

- `<input>` represents the different data that can be entered by the user.
- There are also different type of form control such as `<select>` (dropdown).
- `type` attribute -> determine the type of input that the `<input>` is for
  - There are specialized input type such as `email`, `password`, `tel`, `color`
  - Different input type provide different out of the box validation for user data.
- `name` attribute -> identifier (key) for the data entered by the user
- `required` attribute -> a default browser validation.

## Label
```HTML
<!-- Explicit -->
<label for="id">Input label</label>
<input type="text" id="id" name="name" />

<!-- Implicit -->
<label>
  Input label
  <input type="text" name="name" />
</label>
```

- Provide identification for a form control that describe what the control is for.
- It also provides an addition **hit area** for the control.
- Provide an `id` attribute for the form control and add a `for` attribute in the label pointing to the `id` of the control it is associated into.
- Label and form associated can be `explicit` or `implicit` (using nesting for association) as stated above. It is recommended to use `explicit` as it is supported better.

## Button
```HTML
<!-- Submits a form -->
<button type="submit">Click Me</button>
<!-- Resets a form -->
<button type="reset">Click Me</button>
<!-- Same as button outside a form -->
<button type="button">Click Me</button>
```

- We can also use `<input type="submit/reset/button">` but it is has disadvantages in terms of accessibility.
- In theory, with CSS and JavaScript, we can make any HTML element (such as `<div>`) to behave like a button. However, we should opt to use the `<button>` element due to its semantic and accessibility. ALWAYS USE CORRECT SEMANTICS!

## Forms
```HTML
<form action="/som_path" method="get">
  <label for="id">Text Field</label>
  <input type="text" name="name" id="id">
  <button type="submit">Button<button>
</form>
```
- A form is mostly used to submit data to a server, which is also the default semantics of a `<form>`.
- `action` attribute -> path where we want to submit form data into
- `method` attribute -> HTTP method.
  - Setting the value to `get` should use the data in the form controls as a query string parameter for the request. `/some_path?key=value`

### Anatomy
1. `<form>` -> wraps form contents. Form controls inside `<form>` are part of a single form. This groupings provide the semantic that form controls within this form will be acted upon as a set of `key/value` pairs.
2. Pairs of `<labels>` and form controls (i.e. `<input>`, `<select>`, etc.). Form controls belonging to a single form will be sent to a server as a set of key/value pairs, the value of the `name` attribute as the key and user input data as the value.
3. `<button>` used to submit the contents of the form.

## Fieldset
```HTML
<fieldset>
  <legend>Choose classes to attend:</legend>
  <div>
    <input type="checkbox" id="yoga" name="yoga" />
    <label for="yoga">Yoga (+$10)</label>

    <input type="checkbox" id="coffee" name="coffee" />
    <label for="coffee">Coffee roasting (+$20)</label>

    <input type="checkbox" id="balloon" name="balloon" />
    <label for="balloon">Balloon animal art (+$5)</label>
  </div>
</fieldset>
```

- Used for labelling and structuring form controls as a single unit.
- Is also useful for disabling multiple form controls.
