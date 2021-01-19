# Social links

## Purpose and Usage

Social links for social sharing. This also includes a download article icon.

## Add icons to twig

Since the twig template uses variables for the icons, you'll need to populate the variables

```php
/**
 * Implements hook_preprocess_node().
 *
 * @see common_design_subtheme_preprocess_page()
 * @see common_design_subtheme_get_block_render_array()
 */
function common_design_subtheme_preprocess_node(&$variables) {
  // Add the SVGs for cd-social-links so we can output them in multiple
  // templates without having to keep them up to date.
  $icon_twitter = file_get_contents(drupal_get_path('theme', 'common_design_subtheme') . '/components/cd-social-links/img/icon--twitter.svg');
  $icon_facebook = file_get_contents(drupal_get_path('theme', 'common_design_subtheme') . '/components/cd-social-links/img/icon--facebook.svg');
  $icon_linkedin = file_get_contents(drupal_get_path('theme', 'common_design_subtheme') . '/components/cd-social-links/img/icon--linkedin.svg');
  $icon_copyurl = file_get_contents(drupal_get_path('theme', 'common_design_subtheme') . '/components/cd-social-links/img/icon--copyurl.svg');
  $icon_pdf = file_get_contents(drupal_get_path('theme', 'common_design_subtheme') . '/components/cd-social-links/img/icon--pdf.svg');
  $variables['icon_twitter'] = $icon_twitter;
  $variables['icon_facebook'] = $icon_facebook;
  $variables['icon_linkedin'] = $icon_linkedin;
  $variables['icon_copyurl'] = $icon_copyurl;
  $variables['icon_pdf'] = $icon_pdf;

  // Add a link to download the PDF version of an article if any.
  if ($node->bundle() === 'article' && $node->hasField('field_pdf')) {
    $fid = $node->field_pdf->target_id;
    if (!empty($fid)) {
      $variables['pdf_download_url'] = '/node/' . $node->id() . '/download';
    }
  }
}
```
