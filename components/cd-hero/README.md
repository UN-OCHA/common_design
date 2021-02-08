# Hero

## Purpose and Usage
Provides a prominent image feature to visually augment homepages or landing pages.

- image
- title
- text
- date
- CTA

Use with cd-caption component for image caption and/or image credits.

Use with cd-bleed component for full viewport width option.

Use with cd-button component for CTA options.

@TODO use srcset with good defaults, and add note about Responsive image module in Drupal and its config.

## Caveats
Image uses object-fit and object-position when supported, otherwise a fallback technique using absolute positioning and transform is used.

### Variants

```
.cd-hero--style-one
.cd-hero--style-two
.cd-hero--style-three

```
