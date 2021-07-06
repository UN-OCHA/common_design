### Component QA status

Add a check if you've reviewed the component and it passes the Criteria.

| Component           | Technical Review round 1    | Technical Review round 2    |
| :------------------ | :------------------ | :------------------ |
| cd-example          | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-alert            | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-article          | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-author           | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-banner           | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-bleed            | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-block-title      | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-bullet-list      | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-button           | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-byline           | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-caption          | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-card             | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-date             | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-dropdown         | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-event            | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-facets           | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-filter           | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-flow             | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-form             | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-grid             | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-hero             | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-image-grid       | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-link-list        | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-pagination       | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-read-more        | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-search           | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-search-inline    | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-select-a11y      | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-styled-list      | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-table            | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-tabs             | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-tabs             |                     | :heavy_check_mark:  |
| cd-teaser           | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-title-list       | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-toc              | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-typography       | :heavy_check_mark:  | :heavy_check_mark:  |
| cd-utilities        | :heavy_check_mark:  | :heavy_check_mark:  |




# What makes a component?

## Criteria
- Each component should have a clear purpose and a name to reflect.
- Each component should be defined by purpose, not visual style. *This may be difficult sometimes. Discuss with team members.
- The component name should start with `cd-`.
- Each component should be in its own folder.
- Each component should include a README.md and guidelines for use.
- If a similar component already exists, discuss as a team whether to modify and extend, or create a new component.
- Each component should be able to exist outside of Drupal.

### HTML
- Each component should include an html file with example markup and dummy text, to best demonstrate its use and variants.
- If there are multiple variants, each should be displayed for illustration purposes. Use `<hr>` to separate if needed.
- The components CSS and JS files should be included. For CSS, the component's CSS is usually placed last.
- Each component should link to the `cd-base.css` which has the CSS custom properties and other generic rules.
This is found in the [common_design_system repo](https://github.com/UN-OCHA/common_design_system/blob/main/cd-base.css)
- Any dependency components' CSS or JS should be linked to.

Eg. For cd-alert component
```
<link rel=stylesheet href="../cd-base.css" type="text/css" media=screen>
<link rel=stylesheet href="../cd-flow/cd-flow.css" type="text/css" media=screen>
<link rel=stylesheet href="../cd-typography/cd-typography.css" type="text/css" media=screen>
<link rel=stylesheet href="cd-alert.css" type="text/css" media=screen>
```
- Markup should be simple and semantic.
- Use nested BEM naming for selectors.

Eg. BEM
```
<ul class="cd-title-list">
  <li class="cd-title-list__item">
    <a href="/#" class="cd-title-list__link">
      <span class="cd-title-list__title">Title</span>
      <svg class="cd-icon cd-icon--arrow-right" aria-hidden="true" focusable="false" width="16" height="16">
        <use xlink:href="#cd-icon--arrow-right"></use>
      </svg>
    </a>
  </li>
   ...
```
- If the component requires a "page" layout for composition, add the standard layout divs from the base theme.
The layout styles are included in cd-base.css.

Eg. Layout markup
```
<div class="cd-layout-container">
  <main role="main" id="main-content" class="cd-container">
    <div class="cd-layout-content">
```

### CSS
- A component will likely have its own CSS stylesheet. Some components might be CSS only.
- There should be no hexidecimal colour values. We should use CSS custom properties for colour management.
- If variants exist, multiple stylesheets can be used to distinguish and organise.
- Variants should build on existing "base" rules. If that is not possible, it is likely not a good candidate for a variant.

Eg. For cd-hero component
```
{{ attach_library('common_design/cd-hero') }}
{{ attach_library('common_design/cd-hero--style-one') }}
```
- Each component should be tested and have applicable cross-browser and device fixes where required.
- Adopt a mobile-first approach by starting with generic rules and adding media queries with min-width values down the cascade.

### JS
- Each component should be tested and have applicable cross-browser and device fixes or polyfills where required.
- Adopt a content-first approach by ensuring all content is accessible and the site remains usable when JS is disabled.
*There may be exceptions.
- Add code comments to explain intent where relevant.


### Twig
- Include the markup without the wrapper divs. The main purpose of the twig file is to include the component on the demo page.
- Define and attach the relevant Drupal libraries instead of linking to the CSS files.
As this will display on the demo page (a Drupal site), the cd-base.css is replaced with styles.css (already loaded)

### Add the component to the Demo page
- Include the component in the list of Table of contents.
- Include the twig template on the demo page with a back-to-toc link.

Eg. Include cd-teaser component
```
// Table of Contents list.
<li><a href="#cd-teaser">Teaser</a></li>

// Include the component.
<h3 class="cd-styleguide"><a id="cd-teaser">cd-teaser</a>
  {% include '@cd-components/cd-back-to-toc/cd-back-to-toc.html.twig' %}</h3>

{% include '@cd-components/cd-teaser/cd-teaser.html.twig' %}
```
