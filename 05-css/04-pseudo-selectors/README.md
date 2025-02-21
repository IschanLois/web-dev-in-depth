# Pseudo-classes and pseudo-elements

## Pseudo-class
- Selects an element that is in a `specific state`
- As if a `class` has been applied to an element

```CSS
/* The state is that the element is the first child of another element */
article p:first-child

/* The state is that the element is hovered by a mouse pointer */
article:hover

/* Focus on the element */
article:focus
```

## Pseudo-element
- Acts as if a whole new HTML element is added into the markup.

```CSS
/* Selects the first line of an article which may change depending on width */
article p::first-line

/* Used to generate text before an element */
/* It is mostly use to generate some sort of content, such as shapes, before another element */
.box::before {
  content: ""
}
.box::after {
  content: ""
}
```
