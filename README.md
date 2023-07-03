# OCHA Common Design for Drupal 9+

This theme provides a starting point for OCHA's Drupal websites. By installing the base theme you get the following standardized features that must be common to all the websites in our network:

* **Common Header:** OCHA Services menu, Language switcher, User menu, Main nav, site search.
* **Common Footer:** Navigation, social links, legal info.
* **Common SVG Icons:** a subset of [OCHA Humanitarian Icons][ocha-icons]

It provides the following theming tools that you should leverage in order to maintain the high standards for accessibility that our organization strives to meet:

* JavaScript dropdowns which do not require jQuery or any framework.
* Common Design frontend components

  [ocha-icons]: https://brand.unocha.org/d/xEPytAUjC3sH/icons

## Drupal utilities

* normalize-css library is included in [Drupal core][normalize] and we depend on it.
* jQuery is [available in Drupal core][core], but the Common Design does not depend on it. It gets loaded only once it is needed.
* [hidden.module.css][hidden] is included in Drupal core to provide utility classes that hide content in an accessible manner.

  [normalize]: https://git.drupalcode.org/project/drupal/-/blob/9.5.x/core/assets/vendor/normalize-css/normalize.css
  [core]: https://git.drupalcode.org/project/drupal/-/blob/9.5.x/core/core.libraries.yml
  [hidden]: https://git.drupalcode.org/project/drupal/-/blob/9.5.x/core/modules/system/css/components/hidden.module.css

## Additional components

* Typography defaults
* Component library. See [Common Design demo][cd-demo] for live examples.
  * Components that can be attached as Drupal libraries to twig templates.
  * Component namespacing by way of [Components module][components-module].
  * Docs available in [Components README][components-readme] and [each component][components-used] has some docs in the base theme.
* Favicons and OCHA branded assets based on https://brand.unocha.org

  [cd-demo]: https://web.brand.unocha.org/demo
  [components-module]: https://www.drupal.org/project/components
  [components-readme]: https://github.com/UN-OCHA/common_design/blob/main/components/README.md
  [components-used]: https://github.com/UN-OCHA/common_design/blob/main/components/

## Getting started

1. Follow the setup guide in the [sub-theme README][subtheme-readme].
2. For twig debug and local development see [Disable Drupal 8+ caching during development][drupal-caching].

  [subtheme-readme]: https://github.com/UN-OCHA/common_design/blob/main/common_design_subtheme/README.md
  [drupal-caching]: https://www.drupal.org/node/2598914

## CSS

For managing CSS, the recommended approach is to use [Drupal Libraries][drupal-libraries] to create components made of vanilla CSS/JS files, and attach them to the appropriate Twig template so that they only appear on pages where needed.

  [drupal-libraries]: https://www.drupal.org/docs/theming-drupal/adding-assets-css-js-to-a-drupal-theme-via-librariesyml

## JS

Javascript files should be added to a component-specific folder and defined as part of a library in `common_design.ibraries.yml`

Instead of grouping all JS in one file, each component has its own JS file associated with it. They have been built to be reused, allowing you to mix and match any combination of JS files and use each as a dependency without altering the original file. The general pattern to reference the method of a behavior is:

```js
// Use a method called "methodName" inside the same Behavior file
this.methodName();

// Use a method called "methodName" defined in cd-dropdown.js
Drupal.behaviors.cdDropdown.methodName();
```

Using `this` works for most functions except ones which are assigned to event listeners. For those, we have prefixed all of them with the word `handle` — and despite being contained within the same Behavior, you'll need to reference internal functions using the full Behavior name (see second example above, as if it were outside your Behavior).

```js
(function (Drupal) {
  'use strict';

  Drupal.behaviors.exampleBehavior = {
    attach: function (context, settings) {
      // Assign handleClick as an event listener. When assigning the handler
      // it is correct to prefix the method name with `this`
      document.addEventListener('click', this.handleClick);
    },

    sendAlert: function (message) {
      window.alert(message);
    },

    handleClick: function (ev) {
      // ❌ WRONG:
      //
      // Inside this event listener handler, we do not have access to the
      // Behavior object as `this` so this.sendAlert() will not be defined
      // and the following error will occur:
      //
      // Uncaught TypeError: this.sendAlert is not a function
      this.sendAlert(ev.target);

      // ✅ CORRECT:
      //
      // Referencing the Behavior as defined in Drupal object will work.
      Drupal.behaviors.exampleBehavior.sendAlert(ev.target);
    }
  };
})(Drupal);
```

Follow [Drupal JS coding standards and best practices][js-standards]

  [js-standards]: https://www.drupal.org/docs/develop/standards/javascript


## Accessibility

Drupal 9+ core have helper classes for accessibility. [Hide content properly][a11y-help] using official drupal.org docs.

  [a11y-help]: https://www.drupal.org/docs/accessibility/hide-content-properly


## Fonts

This projects defines a few CSS Vars for font-families that use Google Fonts. The actual fonts must be loaded by enabling them individually (see below). You can read official guidance on [OCHA's visual identity website][brand-fonts].

Here are the technical details relating to the theme itself:

- **Roboto** is included by default in the HTML response. If you implement the CD outside Drupal, the following HTML should be directly copied into the global page template:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:ital,wght@0,300%3B0,400%3B0,500%3B0,700%3B0,900%3B1,400%3B1,700&amp;display=swap" />
```

- Additional fonts for advanced typography and other languages which don't use Latin character sets are available as Drupal Libraries. The list is defined in `common_design.libraries.yml`. For performance reasons, we do not include these by default. If your website must support character sets that are not included in the base-theme, refer to the sub-theme's Libraries file `common_design_subtheme.libraries.yml` to see a commented-out example helping you create your own Drupal Library.


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

This project uses node.js for some development tasks: watching and linting, JS linting and SVG icon sprite generation. See [scripts in package.json][pkg-scripts] for full config. To get a list of commands, do `npm run` and it will output all possible options.

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

There are E2E tests using [Jest][jest] and [Puppeteer][puppeteer] in the base and sub theme. There is a [repo for Visual Regression testing][ocha-vrt] using [backstopjs][backstopjs] and a Jenkins Job to run VRT on the server. Depending on the JSON configuration files, we can generate screenshots from lists of URLs (including authenticated user pages), of multiple viewport dimensions, and capture keypress, hover and click actions.

Depending on the project, we run tests via [Travis CI][travis-ci]. For the [common-design-site repo][cds-travis] we run PHP lint and Drupal coding standards checks. These are common among most projects. Additionally, we install Drupal, import the config, import a database of sample data and run a web server so we can then run the e2e tests.

There is an open issue to integrate Lighthouse performance and accessibility testing [OPS-7526][ops-7526]

  [jest]: https://github.com/facebook/jest
  [puppeteer]: https://github.com/puppeteer/puppeteer
  [ocha-vrt]: https://github.com/UN-OCHA/ocha_vrt
  [backstopjs]: https://github.com/garris/BackstopJS
  [travis-ci]: https://travis-ci.org
  [cds-travis]: https://github.com/UN-OCHA/common-design-site/blob/develop/.travis.yml#L45
  [ops-7526]: https://humanitarian.atlassian.net/browse/OPS-7526

### E2E testing

```sh
# Install dependencies for your host machine.
npm i

# Run all E2E tests in headless mode. The console will output the results.
npm run e2e

# See the tests run in a visible browser window with --debug
npm run e2e -- --debug

# If you want to run a limited number of tests, specify a string with the -t
# argument. It will parse all of the describe() blocks and only run tests when
# it matches the string you supply.

# All tests that include 'OCHAServicesDropdown'.
npm run e2e -- -t 'OCHAServicesDropdown'

# Only tests in 'Subtheme: OCHAServicesDropdown' block.
npm run e2e -- -t 'Subtheme: OCHAServicesDropdown'

# All 'OCHAServicesDropdown' test except blocks including 'Subtheme'.
npm run e2e -- -t '^(?!.*Subtheme).*$OCHAServicesDropdown'

# All tests except blocks including 'Subtheme'.
npm run e2e -- -t '^(?!.*Subtheme).*$'
```

## Progressive Web App

[web.brand.unocha.org][brand] website uses the Drupal [PWA module][pwa]

There is a `site.webmanifest` file available in the sub theme as an alternative to the module, if all you want is the Web Manifest, and you don't want offline capability. The manifest file should be adjusted per implementation, and added using a `<link>` element in the `<head>`, with additional configuration needed. See the [Manifest documentation][manifest-docs] for implementation details.

  [brand]: https://web.brand.unocha.org
  [pwa]: https://www.drupal.org/project/pwa
  [manifest-docs]: https://developer.mozilla.org/en-US/docs/Web/Manifest

## Translations

Arabic, French and Spanish string translation files are available for the Common Design Header and Footer user interface, for example the OCHA Services in the header and the OCHA mandate in the footer. Refer to the `.po` files in the `translations` directory and the [README][translations].

  [translations]: https://github.com/UN-OCHA/common_design/blob/main/translations/README.md
