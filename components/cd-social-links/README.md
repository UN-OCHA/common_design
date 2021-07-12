# Social links

## Purpose and Usage

Social links for social sharing.

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

### Variants

```
none

```
