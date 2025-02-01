# Structuring Documents

## Basic sections of a document

1. `header`
- Usually contains, heading, logo and perhaps a tagline.
2. `navigation bar`
- Links to the site's main sections.
- Can be a part of the header.
3. `main content`
- Contains most of unique content of a given webpage.
4. `sidebar`
- Peripheral info such as ads, links, etc.
5. `footer`
- Fine print, copyright notices, or contact info.

## HTML elements
1. `<header>` - header
   - if a child of the `<body>` defines a global header
   - if child of an `<article>` or `<section>` defines specific header.
2. `<nav>` - navigation bar
3. `<main>` - subsections represented by:
   - use only once per page
   - `<article>` - block of related elements that MAKES SENSE on its own
     - 1 blog post and so on
   - `<section>`- similar to article but more for grouping together a single part of the page that constitutes one functionality.
     - header of a blog
   - `<section>` can be divided into `<articles>` and vice versa.
     - A main `<section>` containing `<articles>` of different blogs, and those blogs contain different sections such as `intro` section and `body` section.
4. `<aside>` - sidebar
   - often placed inside `<main>`
   - not directly related to main content but provide additional information
5. `<footer>` - footer

### Non-semantic wrappers
1. `<div>` - block level element
2. `<span>` - inline element

---

**NOTE**
Only use these elements if it does not make sense to use semantic element for a content.

---

### Line breaks and Horizontal Line
1. `<br />` - line break
2. `<hr />` - horizontal rule to denote thematic change in text

### Planning a website

[Planning a website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents#planning_a_simple_website)
