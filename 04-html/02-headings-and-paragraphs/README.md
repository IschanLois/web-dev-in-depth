# Headings and Paragraphs

`Headings` and `paragraphs` allows developers to structure text within an HTML documents, just like how different headings and paragraphs structure a newspaper.

**Headings**
- `<h1>`, `<h2>`, `<h3>`, `<h3>`, `<h4>`, `<h4>`
- Gives emphasis to a text or can logically group content.
- It's up to the developers to structure headings as long as they make sense/
- Ideally, there should only be 1 `<h1>` element, all other headings should be occur in order, i.e. `<h2>` followed by `<h3>`
- Aim to have at most 3 levels possible.

**Pargraph**
- `<p>`
- Used to represent a paragraph

## Why structuring is important
1. Users often just scan quickly and read the `headings`.
2. Search Engine Optimization `SEO`. Headings are important keywords for influencing a page search ranking.
3. Support for `screen readers` (used by visually impaired people). Screen readers read out the headings, to allow users to find content quickly. If not headings are not available, they will be forced to listen to docs read out loud.
4. Wrapping content in relevant elements makes them easier to be targeted by CSS and HTML.

## Semantics
We need to make sure to give our contents, not only visually attractive appearance, but also meaning or `SEMANTICS`

Correct `semantics` mean that we are using the correct elements that we needed, giving content correct meaning, function, and appearance.

- `<h1>` has a semantic or meaning `"a top level heading on your page."`. The browser will give it a large font size to make it look like a heading.
- In theory this could be achieved by other elements such as `<span>` but it has no semantics. ONLY USE THIS FOR CSS.
