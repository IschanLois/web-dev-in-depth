# Video and audio

## Video
```HTML
<video
  controls
  width="400"
  height="400"
  autoplay
  loop
  muted
  preload="auto"
  poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Your browser doesn't support this video. Here is a
    <a href="rabbit320.mp4">link to the video</a> instead.
  </p>
</video>
```

### Attributes
- `src` -> video location (follow URL patters)
- `controls` -> displays the controls for controlling the video.
- `width` and `height` -> setting the dimensions of the video. Setting either will maintain the aspect-ratio of the video. If aspect ratio is not maintained, the video (container) will grow to fill the space.
- `autoplay` -> play the video when once loaded. Not recommended.
- `loop` -> loop the video. Not recommended.
- `muted` -> mute audio by default
- `poster` -> thumbnail

### Source tag
```HTML
<source src="rabbit320.webm" type="video/webm" />
```

- Different browsers may support different media type.
- Read about [media containers and media codecs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio#using_multiple_source_formats_to_improve_compatibility).
- Using the `<source>` tag instead of the `src` attribute will allow browsers to select the first media format they select.
- Use the `type` attribute to optimize performance. Browsers will use this information to select the media type it supports. This avoids the browser from loading every video.

## Audio
- Follows the same pattern as the `video` tag

```HTML
<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    Your browser doesn't support this audio file. Here is a
    <a href="viper.mp3">link to the audio</a> instead.
  </p>
</audio>
```

## Text tracks
- Displaying text on the media content.
- This uses `WebVTT` (.vtt), a file format for storing transcripts with various metadata such as styling and time in the video.
- These strings are called `cues` 
  - subtitle -> translations
  - captions -> synchronized transcriptions of video dialog/sounds.
  - timed descriptions -> descriptive text spoken by the media player.

```HTML
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

### Attributes
- `kind` -> type of cue
- `srclang` -> language the subtitle is written in
- `label` -> help readers identify the language they are searching for.
