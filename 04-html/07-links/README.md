# Link (Hyperlinks)

For more context, see [URL section](../../02-url)

- use the `<a>` (anchor) tag.

## Usage
```HTML
<a href="some-url-can-be-relative-or-absolute">
  Any HTML content (images, text, heading, etc.)
</a>

<!-- part of another html document -->
<a href="some-url#id">
  Any HTML content (images, text, heading, etc.)
</a>

<!-- part of the same html document -->
<a href="#id">
  Any HTML content (images, text, heading, etc.)
</a>
```

## Link to a download
```HTML
<a
  href="some-url-to-non-html-file"
  download="default-name"
>
  Download file
</a>
```

## Supporting information
- the `title` attribute will be shown as a tooltip
```HTML
<a
  href="some-url-to-non-html-file"
  title="some information about link"
  >
  Download file
</a>

```

## Email links
- using `mailto:`
- open user`s email client outgoing email window
```HTML
<a href="mailto:email@example.com">
  Send email to
<a>

<!-- Can omit email -->
<a href="mailto:">
  Send email to
<a>

<!-- Include email content -->
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email"
>
  Send mail with cc, bcc, subject and body
</a>
```

## Best practices
- Use meaningful text that can be taken out of context to maximize accessibility.

```HTML
<!-- GOOD -->
<p><a href="https://www.mozilla.org/en-US/firefox/">Download Firefox</a></p>

<!-- BAD -->
<p>
  <a href="https://www.mozilla.org/en-US/firefox/">Click here</a> to download
  Firefox
</p>
```

- Keep text as short as possible.
- Don't use the link as the text for a link.

## Learning
- Try opening index.html (if possible using a directory web server) to see how links work.
