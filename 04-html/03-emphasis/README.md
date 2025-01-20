# Emphasis and Importance

## Emphasis
- `<em>`
- Semantically provides emphasis which are recognized by screen readers.
- Browsers style this as `italic`.
- DON'T use this purely for italic styling. Use `<span>` for that.

## Strong importance
- `<strong>`
- Semantically provides importance which are recognized by screen readers.
- Browsers style this as `bold`.
- DON'T use this purely for bold styling. Use `<span>` for that.

## Presentational Elements
- Italic `<i>`, Bold `<b>`, and Underline `<u>`.
- Was used before support for CSS was better.
- Should no longer be used, this only affect presentation and not semantics.
- Now have confusing semantic roles.
- Only use this to convey a traditional meaning to bold, italics, or underline when there isn't a more suitable element (there usually is).
- `<i>` is used to convey a meaning traditionally conveyed by italic: foreign words, taxonomic designation, technical terms, a thought… (from MDN)
- `<b>` is used to convey a meaning traditionally conveyed by bold: keywords, product names, lead sentence… (from MDN)
- `<u>` is used to convey a meaning traditionally conveyed by underline: proper name, misspelling… (from MDN)