# Images

For more context, see [URL section](../../02-url)

- Is a `void` element (can not nest other HTML content)

## Usage

```HTML
<img
  src="some-link-to-image"
  alt="meaningful-text"
  title="meaningful-text"
  width="1"
  height="1"
/>
```
- `src` can be relative or absolute
- `alt` text that will be shown when there is an issue with loading the image
- `title` additional information that will be shown as a `tooltip`
- `width` and `height` are expected size of the image.

## Figures
- Useful for SEMANTICALLY annotating images. The text will be semantically linked to the image (but is not limited to images).
```HTML
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <figcaption>
    A T-Rex on display in the Manchester University Museum.
  </figcaption>
</figure>
```

## Best practices
- If possible, use `relative` links rather than `hard` (absolute) links.
- Add meaningful text inside `alt` for better accessibility, BUT only if it makes sense. Not necessary to add `alt` to images that will be used for decoration (but prioritize using CSS for this).
- There is no need to put any value to `alt` if there is a descriptive content for the image.
- Do not use images for text.
- Use `width` and `height` to allow browser to allocate the expected size before the image is loaded. This prevents other content from moving once image is loaded.
- Using the `title` tag is not really recommended due to poor support from browsers and screen readers.

---
**IMPORTANT**

WHEN USING AN IMAGE, MAKES SURE TO READ THE [LICENSING](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images#media_assets_and_licensing) OF THE IMAGE

---
