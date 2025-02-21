# Combinators

Used to combine other selectors. This allows us to select elements based on their location in the DOM relative to other elements

## Descendant combinator
- Select any matching descendant of an element.
```CSS
/* Select any <p> inside an <article> that is inside <body> */
body article p {}
```

## Child combinator
- Similar to descendant combinator but only selects element that is an immediate child.
```CSS
/* Select any <li> that is a child of <ul> */
ul > li {}
```

## Next-sibling combinator
- Matches elements that is an immediate sibling of another
```CSS
/* Select any <img> that is immediately beside <p> */
p + img {}
```

## Subsequent-sibling combinator
- Matches elements that is a sibling of another
```CSS
/* Selects all <img> that are a sibling of a <p> */
p ~ img {}
```

## Nesting
- Used to create complex selectors

```CSS
/* & is the nesting selector */
/* p img {} */
p {
  & img {
  }
}

/* The nesting selector (&) can be omitted */
/* p ~ img {} */
p {
  ~ img {}
}
```
