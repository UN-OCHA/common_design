# Video

Produces a YouTube embed from a URL stored in a Drupal Link field. It's basically a reimplementation of [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed) by Paul Irish, but in Twig.

This component has been tested over the years on multiple World Humanitarian Day campaigns and has met the following requirements:

- **Performant:** loads minimal code/data up front, waits for user interaction before downloading video.
- **Accessible:** has been tested to ensure it meets our standards for screen-reader UX and keyboard nav.
- **Translatable:** all necessary labels can be translated by Drupal.
- **Trackable:** integrates with GTM out of the box by allowing the necessary permissions within the iframe that gets generated.

## Outline of Progressive Enhancement

1. When the page loads, it displays a responsive preview image with a YouTube play button superimposed over the preview. The video transcript is totally optional, but can be used to supplement the video for screen-reader users and requires no additional JS to be read. It uses the `<details>`/`<summary>` HTML elements and their built-in interactivity.
2. When the cursor hovers over the image, it will preconnect to YouTube.
3. When the user finally clicks the image, it will load the actual video embed.

## Caveats

The `video_slug`/`video_url` properties are rarely entered and stored directly in Drupal. Rather, we often have Editors enter a YouTube URL as displayed in the browser, and preprocess it into what we need. This example preprocess is intended for a Paragraph with machine name `video` which contains a Link field named `field_video_url`.

```php
/**
 * Implements hook_preprocess_paragraph__type().
 *
 * Example preprocess hook that converts a Link field that contains a
 * fully-qualified URL pointing to YouTube into the video slug/url.
 *
 * Example: https://www.youtube.com/watch?v=ScMzIvxBSi4
 */
function THEME_preprocess_paragraph__video(&$variables) {
  /** @var \Drupal\paragraphs\Entity\Paragraph $paragraph */
  $paragraph = $variables['paragraph'];

  if (!$paragraph->field_video_url->isEmpty()) {
    // Extract video slug from YouTube.
    $qs = parse_url($paragraph->get('field_video_url')->first()->uri, PHP_URL_QUERY);
    parse_str($qs, $params);
    $variables['video_slug'] = $params['v'];
    $variables['video_url'] = $paragraph->get('field_video_url')->first()->uri;
  }
}
```

## Future TODOs

- Once `sizes="auto"` is supported in evergreen browsers, we should use it. For the time being, we used some simple defaults that match the CD layout container.
