# Social links

## Purpose and Usage

Social links for social sharing, plus a Copy to Clipboard button.

## Caveats

This also includes a download article icon that needs a preprocess node function and specific site building.

```php
function common_design_preprocess_node(&$variables) {
  // Add a link to download the PDF version of an article if any.
  if ($node->bundle() === 'article' && $node->hasField('field_pdf')) {
    $fid = $node->field_pdf->target_id;
    if (!empty($fid)) {
      $variables['pdf_download_url'] = '/node/' . $node->id() . '/download';
    }
  }
}
```

If you don't want to see the "Share" label, add the `visually-hidden` class to the label:

```html
<span class="cd-social-links__label visually-hidden">Share</span>
```

### Variants

```
none

```
