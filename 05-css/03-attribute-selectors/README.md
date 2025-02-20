# Attribute selectors

## Presence and value selectors

```CSS
/* Matches any element with `class` attribute */
[class] {
  color: red;
}

/* Matches any <li> element with `class` attribute */
li[class] {
  font-size: 120%;
}

/* Matches any <li> element with `class` attribute set to ONLY `a` */
li[class="a"] {
  background-color: yellow;
}

/* Matches any <li> element with `class` attribute containing a (space separated) */
li[class~="a"] {
  color: red;
}

/* Matches any <li> element with `class` attribute exactly `a` or `a` followed by a hyphen (`-`) */
li[class|="a"] {
  color: red;
}
```

## Substring matching

```CSS
/* Matches any <li> element with `class` attribute value starting with `a` */
li[class^="a"] {
  font-size: 120%;
}

/* Matches any <li> element with `class` attribute value ending with `a` */
li[class$="a"] {
  background-color: yellow;
}

/* Matches any <li> element with `class` attribute value containing `a` as a substring */
li[class*="a"] {
  color: red;
}
```
