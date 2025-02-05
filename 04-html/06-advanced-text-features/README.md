# Advanced Text Features

## Quotations

### Blockquotes
- block level content is _QUOTED FROM SOMEWHERE ELSE_
- browsers will render this as an indented paragraph
```HTML
<blockquote cite="https://some.url.com">
  <p>Paragraph</p>
</blockquote>
```

### Inline quotations
- browsers will render this with quotation marks
```HTML
<p>
  <p>Quote
    <q cite="https://some.url.com">
      Citation
    </q>
  </p>
</p>
```

### Citations
- The cite attribute does no mean much to browsers or even screen readers.
- To display its contents, we need CSS or JS solutions.
- `<cite>` element is meant to contain the title of the quoted resource, but we can use links.
- Italic by default
```HTML
<p>
  Paragraph
  <a href="https://some.url.com">Title</a>
</p>
```

### Abbreviations
```HTML
<!-- include expansion -->
<p>
  <abbr>HTML</abbr>, Hypertext Markup Language.
</p>

<!-- use "title" if expansion makes little sense -->
<p>
  <abbr title="Reverend">Rev.</abbr>
</p>
```

### Contact Details
- use this for contact information of the author contained within the nearest `<article>` or `<body>`.
- do not use to mark up contact information unrelated to the content of the page.
```HTML
<address>
  <p>
    Chris Mills<br />
    Manchester<br />
    The Grim North<br />
    UK
  </p>

  <ul>
    <li>Tel: 01234 567 890</li>
    <li>Email: me@grim-north.co.uk</li>
  </ul>
</address>

<!-- links to a contact information  -->
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

### Superscript and subscrit
```HTML
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

### Computer Code
- `<code>` - generic computer code
- `<pre>` - preserve whitespaces
- `<var>` - variable names
- `<kbd>` - input (Ctrl, CMD, shell inputs)
- `<samp>` - output of a program

### Times and dates
- mark up dates and times in machine-readable format.
```HTML
<time datetime="2016-01-20">20 January 2016</time>
```

```HTML
<!-- Standard simple date -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- Just year and month -->
<time datetime="2016-01">January 2016</time>
<!-- Just month and day -->
<time datetime="01-20">20 January</time>
<!-- Just time, hours and minutes -->
<time datetime="19:30">19:30</time>
<!-- You can do seconds and milliseconds too! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Date and time -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Date and time with timezone offset -->
<time datetime="2016-01-20T19:30+01:00">
  7.30pm, 20 January 2016 is 8.30pm in France
</time>
<!-- Calling out a specific week number -->
<time datetime="2016-W04">The fourth week of 2016</time>
```
