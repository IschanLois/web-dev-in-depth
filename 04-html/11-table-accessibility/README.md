# Table accessibility

## Column and row headers
- `th` -> important to use for accessibility. This gives programmatic association to the headers and the cells they relate to.

## Caption
```HTML
<table>
  <caption>
    Some caption
  </caption>

  …
</table>
```

- We can also use the `summary` attribute in `<table>` but this is deprecated and doesn't appear on the page. But this is read by screen readers the same as `<caption>`

Check [time-table.html](./time-table.html) for more details.

## Table structure
```HTML
<table>
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
  <tfoot>
    ...
  </tfoot>
</table>
```
- `<thead>` -> header of the table, usually the column headings (not always).
  - if using [col](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col)/[colgroup](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup), `<thead>` should come below those
- `<tbody>` -> implicitly/explicitly always included in a table. Main part of the table
- `<tfoot>` -> footer of the table. Might be the last row summarizing the previous rows.
- These elements do not necessarily make the table more accessible to screen readers, or even visual readers. But they are useful for CSS styling and layout enhancements.

Check [spending-record.html](./spending-record.html) for more details.

## Association

### scope attribute
- Used for defining association of a header in terms of whether it is a `col`, `row`, `colgroup`, `rowgroup` header.
- `col` -> the header is for a column
- `colgroup` -> the header is for a group of columns
- `row` -> the header is for a row
- `rowgroup` -> the header if a for a group of rows

Check [items-sold.html](./items-sold.html) for more details.

### id and headers attribute
- Find grained associations by specifying an `id` for a header, and `headers` for a cell or another header containing the ids of the header it is associated with.

Check [items-sold-2.html](./items-sold-2.html) for more details
