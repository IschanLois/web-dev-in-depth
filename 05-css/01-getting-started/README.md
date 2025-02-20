# Getting started with CSS

## Anatomy
```CSS
p {
  color: green;
}
```
- The whole block is called a CSS `rule`
- `p` -> selector
- `color` -> property
- `green` -> value

## Adding CSS to documents
1. **Inline**
```HTML
<span style="color: purple; font-weight: bold">span element</span>
 ```
2. **Internal stylesheets**
```HTML
<head>
  <style>
    p {
      color: purple;
    }
  </style>
</head>
```
3. **External stylesheets**

`index.html`
```HTML
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

`styles.css`
```CSS
h1 {
  color: red;
}
```

## Selectors and Combinators

- Used to target HTML elements when applying styles.
- Combinators are compound selectors

1. **Element (Type) selector**
```CSS
p {
  color: green;
}
```

2. **Target multiple selectors (APPLY TO ALL)**
```CSS
p,
li {
  color: green;
}
```

3. **Class**

`html`
```HTML
<li class="special">Item two</li>
```

`css`
```CSS
.special {
  color: orange;
  font-weight: bold;
}
```

4. **Location**
```CSS
/* DESCENDANT COMBINATOR */
/* All <em> that is a descendant of  <li>*/
li em {
  color: rebeccapurple;
}

/* SIBLING COMBINATOR */
/* All <p> that is an immediate sibling of <h1> */
h1 + p {
  font-size: 200%;
}
```

5. State
```CSS
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

## Complex selections
```CSS
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
}

h1 + p .special {
}
```

## Other features

### Functions
1. `calc()` 
```CSS
.box {
  width: calc(90% - 30px);
}
```

2. **Transform functions**
```CSS
.box {
  transform: rotate(0.8turn);
}
```

### @rules
- Defines how CSS should behave
- Example is `@media` (media queries) for conditional styling
```CSS
/* Apply depending on screen size */
@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

### Shorthand properties
Set several properties in a single line
```CSS
padding: 10px 15px 15px 5px;

/* expands to */
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```
