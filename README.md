# OCHA Common Design for Drupal 9+

This theme provides a starting point for OCHA's Drupal websites. By installing the base theme you get the following standardized features that must be common to all the websites in our network:

* **Common Header:** OCHA Services menu, Language switcher, User menu, Main nav, site search.
* **Common Footer:** Navigation, social links, legal info.
* **Common SVG Icons:** a subset of [OCHA Humanitarian Icons][ocha-icons]

  [ocha-icons]: https://brand.unocha.org/d/xEPytAUjC3sH/icons

## Getting started

1. **Do not modify the base-theme.** Follow the setup guide in the [sub-theme README][subtheme-readme].
2. For Twig debug and local development see [Disable Drupal 8+ caching during development][drupal-caching].

  [subtheme-readme]: https://github.com/UN-OCHA/common_design/blob/develop/common_design_subtheme/README.md
  [drupal-caching]: https://www.drupal.org/node/2598914

## Drupal utilities

* normalize-css library is included in [Drupal core][normalize] and we depend on it.
* jQuery is [available in Drupal core][core], but the Common Design does not depend on it. It gets loaded only once it is needed.
* [hidden.module.css][hidden] is included in Drupal core to provide utility classes that hide content in an accessible manner.

  [normalize]: https://git.drupalcode.org/project/drupal/-/blob/10.4.x/core/assets/vendor/normalize-css/normalize.css
  [core]: https://git.drupalcode.org/project/drupal/-/blob/10.4.x/core/core.libraries.yml
  [hidden]: https://git.drupalcode.org/project/drupal/-/blob/10.4.x/core/modules/system/css/components/hidden.module.css

## Additional tools

* Typography defaults
* Component library. See [Common Design demo][cd-demo] for live examples.
  * Components that can be attached as [Drupal Libraries][drupal-libraries] to Twig templates.
  * Namespacing by way of [Components module][components-module].
  * Docs available in [Libraries README][libraries-readme] and [each Drupal Library][libraries-list] has some docs in the base theme.
* Favicons and OCHA branded assets based on https://brand.unocha.org

  [cd-demo]: https://web.brand.unocha.org/demo
  [drupal-libraries]: https://www.drupal.org/docs/theming-drupal/adding-assets-css-js-to-a-drupal-theme-via-librariesyml
  [components-module]: https://www.drupal.org/project/components
  [libraries-readme]: https://github.com/UN-OCHA/common_design/blob/develop/libraries/README.md
  [libraries-list]: https://github.com/UN-OCHA/common_design/blob/develop/libraries/

## Single Directory Components

The preferred way of encapsulating components in Drupal 10+ is using [Single Directory Components][sdc]. SDCs contain all elements of a component inside one directory: HTML (Twig), CSS, JS, and images. You don't have to maintain an entry in the theme's Libraries YML, nor do you have to manually call `attach_library` to ensure the markup gets styled. It's really nice.

Read more details in the `components` subdirectory. Each component also has its own README.

If you can't or don't want to use SDC, read the [CSS](#css) and [JS](#js) sections below for guidance on using Drupal Libraries, which was the preferred way to manage frontend assets in Drupal 8/9, and still works the same in Drupal 10.

  [sdc]: https://www.drupal.org/project/sdc

## CSS

For managing CSS, use [Drupal Libraries][drupal-libraries] to create components made of vanilla CSS/JS files, store them in a component-specific folder inside `libraries`, and attach them to the appropriate Twig template so that they only appear on pages where needed.


## JS

JavaScript files should be added to a component-specific folder inside `libraries` and defined as part of a [Drupal Library][drupal-libraries] in `common_design.libraries.yml`

Instead of grouping all JS in one file, each component has its own JS file associated with it. They have been built to be reused, allowing you to mix and match any combination of JS files and use each as a dependency without altering the original file. The general pattern to reference the method of a behavior is:

```js
// Use a method called "methodName" inside the same Behavior file
this.methodName();

// Use a method called "methodName" defined in cd-dropdown.js
Drupal.behaviors.cdDropdown.methodName();
```

Using `this` works for most functions except ones which are assigned to event listeners. For those, we have prefixed all of them with the word `handle`. In order to easily use other methods defined in your Behavior, you'll need to bind `this` manually. [There are examples of the process in the CD Dropdown][bind-this].

If you don't manually bind `this`, then you have to use the full object as if you were in the global global scope. See code:

  [bind-this]: https://github.com/UN-OCHA/common_design/blob/8c7b648a86c2f7293d96f3fefbd9345c83d843aa/libraries/cd-dropdown/cd-dropdown.js#L9-L14

```js
(function (Drupal) {
  'use strict';

  Drupal.behaviors.exampleBehavior = {
    attach: function (context, settings) {
      // ✅ Manually bind `this` before it gets used.
      this.handleClick = this.handleClick.bind(this);

      // Assign handleClick as an event listener. When assigning the handler
      // it is correct to prefix the method name with `this`
      document.addEventListener('click', this.handleClick);
    },

    showAlert: function (message) {
      window.alert(message);
    },

    handleClick: function (ev) {
      // ✅ after binding `this`
      //
      // Shorthand will work as long as the .bind(this) command was run inside
      // the `attach` method.
      this.showAlert(ev.target);

      // ❌ without binding `this`
      //
      // If we hadn't bound `this` inside `attach` then it would be long-winded:
      Drupal.behaviors.exampleBehavior.showAlert(ev.target);
    }
  };
})(Drupal);
```

Follow [Drupal JS coding standards and best practices][js-standards].

  [js-standards]: https://www.drupal.org/docs/develop/standards/javascript


## Accessibility

Drupal 9+ core have helper classes for accessibility. [Hide content properly][hide-content] using official drupal.org docs.

Our base-theme templates have been vetted for accessibility by automated tools and manual verification of screen-reading UX. If you override a template, try not to disrupt the ARIA roles and labels that were already put into place.

If you do create a new template, use one from the base-theme as a guide. They have many mechanisms taken care of, such as translated ARIA labels, landmark roles, and properly-hidden labels. If you author JavaScript, use existing components as a guide to create valid screen-reader announcements in response to user interactions.

  [hide-content]: https://www.drupal.org/docs/accessibility/hide-content-properly

## Print

Using `@media print` should be sufficient in most cases, unless there is a specific reason to have a specific print.css stylesheet (e.g. used by [Snap Service][snap-classes]). Refer to `_print.scss` for basic rules.

  [snap-classes]: https://github.com/UN-OCHA/tools-snap-service?tab=readme-ov-file#using-snap-service-on-your-website

## Fonts

This projects defines a few CSS Vars for font-families that use Google Fonts. The actual fonts must be loaded by enabling them individually (see below). You can read official guidance on [OCHA's visual identity website][brand-fonts].

Here are the technical details relating to the theme itself:

- **Roboto** is included by default in the HTML response. If you implement the CD outside Drupal, the following HTML should be directly copied into the global page template:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto:ital,wght@0,300%3B0,400%3B0,500%3B0,700%3B0,900%3B1,400%3B1,700&amp;display=swap" as="style" onload="this.onload=null;this.setAttribute(`rel`, `stylesheet`);" />
```

- Additional fonts for advanced typography and other languages which don't use Latin character sets are available as [Drupal Libraries][drupal-libraries]. The list is defined in `common_design.libraries.yml`. For performance reasons, we do not include these by default. If your website must support character sets that are not included in the base-theme, refer to the sub-theme's Libraries file `common_design_subtheme.libraries.yml` to see a commented-out example helping you create your own Drupal Library.


### Enabling individual fonts

The fonts can be enabled one of two ways.

First, in the `common_design_subtheme` by adding the relevant base-theme libraries as a dependency to the global styles in the `common_design_subtheme.libraries.yml`:

```yaml
global-styling:
  css:
    theme:
      css/styles.css: {}
  dependencies:
    - common_design/fonts-advanced
    - common_design/fonts-arabic
    - common_design/fonts-chinese
    - common_design/fonts-russian
```

Second, you can also enable them in the Drupal Admin UI under the sub-theme theme settings at `/admin/appearance/settings/common_design_subtheme`.

  [brand-fonts]: https://brand.unocha.org/d/xEPytAUjC3sH/visual-identity#/basics/fonts-1

## Task management

This project uses node.js for some development tasks: watching and linting, JS linting and SVG icon sprite generation. See [scripts in package.json][pkg-scripts] for full config. To get a list of commands, do `npm run` inside the base-theme to have it output all possible options.

  [pkg-scripts]: https://github.com/UN-OCHA/common_design/blob/develop/package.json#L8-L17

## Icons

The available icons can be found in `img/icons`. There are two techniques used, depending on context:

1. SVG sprite with the `<use>` element
2. SVG as a background-image

The sprite technique is preferred. We only use svg as a background image as a last resort when using the sprite isn't possible. Using a background image prevents use of many nice SVG features, such as recoloring dynamically.

### 1. SVG sprite

SVG symbol sprite with the `<use>` element. The sprite is loaded as a single inlined asset in the `html.html.twig` before the closing body tag. Each icon within the sprite can be referenced by its ID. For example:

```html
<svg class="cd-icon cd-icon--arrow-down" width="16" height="16" aria-hidden="true" focusable="false">
  <use xlink:href="#cd-icon--arrow-down"></use>
</svg>
```

Each icon should have the class `cd-icon` and a BEM selector in the format `cd-icon--SYMBOL-ID`. Now it's possible to write CSS that controls dimensions, fill color, and so forth.

Each icon should have reasonable width and height attribute values. These control the SVG display when the CSS is slow or does not load. If the icon is decorative, add `aria-hidden="true" focusable="false"` to remove the element from the accessibility tree.

We're using the [SVG sprite][svg-sprite] node package. [Read here for more details][una-svg].

  [svg-sprite]: https://github.com/jkphl/svg-sprite
  [una-svg]: https://una.im/svg-icons

### 2. SVG background-image

SVG as a background-image value, usually on a pseudo element via CSS. The SVG fill colour is added as an attribute in the SVG file. The icons are black by default. If you need another color, it's best to copy the file and manually adjust the fill/stroke to suit your needs. Rename the copy to include the color in the filename eg. `arrow-down--white.svg`.

### Generating the icons sprite

As defined in the node scripts, all new icons should be placed in the `img/icons` directory. Run `npm run svg:sprite` to generate a new sprite. This generates the sprite SVG `img/icons/cd-icons-sprite.svg` and it creates an html page with all SVGs for reference `img/icons/sprite.symbol.html`.

## Favicons

OCHA default favicons are provided. Update these with your logo.

http://realfavicongenerator.net/ is a good tool for generating favicons.

## Browser support

Based on continuous monitoring of OCHA's traffic patterns combined with corporate policy for standard-issue laptops, we assume a modern browser is being used. We no longer guarantee 100% feature parity for browsers such as IE11, or older mobile browsers.

The theme is built using Progressive Enhancement, providing widely available CSS techniques first, and using feature queries to enable more advanced features on a case-by-case basis for each visitor.

We assume the presence of `addEventListener` and support for CSS Flexbox as our baseline.

### What browsers we test

See [Browsers to test][browsers-to-test] and [Draft - Supporting a global audience][support-global-audience].

We use [browserstack][browserstack] for browser and device testing. During development we can test continuously using our local development environments, select specific browsers for manual testing, and generate screenshots of many browsers at once. Join the OCHA Slack [#developers][channel-developers] channel for access.

  [browsers-to-test]: https://docs.google.com/document/d/1lN0kLOkgfEAmdGODZ0PzLxiAr0Z-87C4ytet6F4GIuw
  [support-global-audience]: https://docs.google.com/document/d/1AjKtlwUuJhZpbSrPs-nku3ECnMyZ67m9A1Lh05w7xM4/
  [browserstack]: https://www.browserstack.com/
  [channel-developers]: https://app.slack.com/client/T03HVR4QD8R/C03L72QQFCP

## Testing

There are E2E tests using [Jest][jest] and [Puppeteer][puppeteer] in the sub-theme. There is a [repo for Visual Regression testing][tools-vrt] using [backstopjs][backstopjs] and a Jenkins Job to run VRT on the server. Depending on the JSON configuration files, we can generate screenshots from lists of URLs (including authenticated user pages), of multiple viewport dimensions, and capture keypress, hover and click actions.

  [jest]: https://github.com/facebook/jest
  [puppeteer]: https://github.com/puppeteer/puppeteer
  [tools-vrt]: https://github.com/UN-OCHA/tools-vrt/
  [backstopjs]: https://github.com/garris/BackstopJS

## E2E Testing

Refer to [common_design_subtheme README E2E testing][cd-testing] for information about running tests.

  [cd-testing]: https://github.com/UN-OCHA/common_design/tree/develop/common_design_subtheme#tests


## Progressive Web App
There is a `site.webmanifest` file available in the sub theme for the Web Manifest. The manifest file should be adjusted per implementation, and added using a `<link>` element in the `<head>`, with additional configuration needed. See the [Manifest documentation][manifest-docs] for implementation details.

  [manifest-docs]: https://developer.mozilla.org/en-US/docs/Web/Manifest

## Translations

Arabic, French and Spanish string translation files are available for the Common Design, for example the OCHA Services in the header and the OCHA mandate in the footer. Refer to the `.po` files in the `translations` directory and the [README][translations].

  [translations]: https://github.com/UN-OCHA/common_design/blob/develop/translations/README.md
