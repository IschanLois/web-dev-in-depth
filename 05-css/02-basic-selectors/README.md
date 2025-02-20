# Basic selectors

## Type selectors

Used for selecting an `HTML` tag/element

```CSS
strong {
  color: rebeccapurple;
}
```

## Class selectors

Case-sensitive selector that starts with a dot (`.`)

```CSS
.highlight {
  background-color: yellow;
}
```

### Target specific elements with a class
```CSS
/* Selects any <h1> with class `highlight` */
h1.highlight {
  background-color: pink;
}
```

### Target element with more than one class
```CSS
.notebox {
  border: 4px solid #666;
  padding: 0.5em;
  margin: 0.5em;
}

/* Target an element with both class notebox and warning */
.notebox.warning {
  border-color: orange;
  font-weight: bold;
}
```

## ID selectors

Case-sensitive and begins with a hash (`#`). A specific ID should only be applied to one element in an HTML document.

```CSS
#one {
  background-color: yellow;
}

/* Select <h1> with id heading */
h1#heading {
  color: rebeccapurple;
}
```

## Selector lists

Apply same set of styles to multiple selectors

```CSS
h1, .special {
  color: blue;
}
```

If any one selector is not valid, it invalidates the whole rule.

## Universal selector

Apply style to everything within a document or within an elements descendants.

```CSS
* {
  margin: 0;
}

/* Apply to all descendant of <p> elements */
p * {
  margin: 0;
}
```

This is useful for "resetting (default) stylesheets" or for readability

```CSS
article :first-child {
  font-weight: bold;
}
/* is equal to but first one can be mistake for article:first-child */
article *:first-child {
  font-weight: bold;
}
```