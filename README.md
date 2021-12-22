# OCHA Common Design System

- Full-width header and footer
- Full-width components

---

# Common Design base theme for Drupal 8/9

## Releases

We use [npm-version][npm] and [semantic versioning][semver]

We aim to facilitate an annual major release. The next release date is June
2022.

We continue to regularly release patches or minor releases to include bug fixes,
dependency updates, and component improvements. Refer to the [CHANGELOG][log]
and/or [Github releases][releases] for the latest tagged releases.

There may be several breaking changes during the year which result in increments
to the major release number. Teams using the base theme might be “behind” by a
few numbers when they update annually. We hope these numbers will help to
highlight the major changes and we will offer support during these times so the
updates are as clear as possible.

  [npm]: https://docs.npmjs.com/cli/version
  [semver]: https://semver.org/
  [log]: https://github.com/UN-OCHA/common_design/blob/main/CHANGELOG.md
  [releases]: https://github.com/UN-OCHA/common_design/releases

## This theme contains

* Common Header
* Common Footer
* Common SVG Icons (a web-specific subset of [OCHA humanitarian icons][icons])
* Variables for breakpoints, colours, font sizes, fonts, and z-index
* Mixins for clearfix and media queries
* Custom javascript for dropdown behaviour
* See [v3.0.0 Release notes][v3] and [common_design implementation notes for v2][v2]
for more detailed documentation

There is a sub theme included in this repo.
   * This can be used as a starting point for implementations. Add components,
   override and extend the base theme as needed. Copy the common_design_subtheme
   directory to `/themes/custom/` and refer to its [README][readme].
   All the implementation-specific work should happen in the sub theme.

  [icons]: https://brand.unocha.org/d/xEPytAUjC3sH/icons
  [v3]: https://github.com/UN-OCHA/common_design/releases/tag/v3.0.0
  [v2]: https://docs.google.com/document/d/1GpTtCWNQvGiPDfZmhFvaKGvU9hbOG0HedFTYgo3nvd4
  [readme]: https://github.com/UN-OCHA/common_design/blob/main/common_design_subtheme/README.md

**Drupal components:**

* normalize-css library is included in [Drupal core][normalize]
* jQuery is [included in Drupal core][core] but is not loaded globally. We
include it as a library only when we need it.
* [hidden.module.css][hidden] is included in Drupal core for display-related
utility classes

  [normalize]: https://github.com/UN-OCHA/common-design-site/tree/develop/html/core/assets/vendor/normalize-css
  [core]: https://github.com/UN-OCHA/common-design-site/blob/develop/html/core/core.libraries.yml#L362
  [hidden]: https://github.com/UN-OCHA/common-design-site/blob/develop/html/core/modules/system/css/components/hidden.module.css

**Additional components:**

* Typography
* Component library
   * HTML/CSS/JS components that can be attached as Drupal libraries to twig
   templates, or copied into sass partials.
   * Requires Drupal [Components module][components].
   * See [Common Design demo][demo] for Component examples.
   * Refer to [Components README][components-readme] and the [components used][components-used]
   in the theme.
* Favicons and OCHA branded assets based on https://brand.unocha.org
* Node workflow for frontend development
  * SASS
  * Sourcemaps (to show which specific Sass file contains styles during local
  development)
  * Autoprefixer
  * Sass and JS linting
  * SVG sprite
  * E2E tests

  [components]: https://www.drupal.org/project/components
  [demo]: https://web.brand.unocha.org/demo
  [components-readme]: https://github.com/UN-OCHA/common_design/blob/main/components/README.md
  [components-used]: https://github.com/UN-OCHA/common_design/blob/main/components/

## Getting started

1. Clone this repo to `/themes/contrib/` or install using `composer require
unocha/common_design`.
2. Copy the `common_design_subtheme` directory to `/themes/custom/`.
3. In the Drupal Admin, go to Appearance, find 'OCHA Common Design sub theme'
and select **Enable and set default**.

**To contribute to `common_design` base theme or sub theme development and/or
to customise the sub theme**

1. Run `nvm use` in theme folder to ensure the correct node version.
2. Install the dependencies: `npm install`
3. For development, run `npm run sass:watch` (this includes an initial linting
and sourcemaps) or run `npm run sass:compile-dev` to compile.
4. Run `npm run sass:build` for final CSS generation.
5. For twig debug and local development see [Disable Drupal 8/9 caching during
development][drupal-caching].

Drupal 8/9 core have helper classes for accessibility [Hide content properly][a11y-help]

  [drupal-caching]: https://www.drupal.org/node/2598914
  [a11y-help]: https://www.drupal.org/docs/8/accessibility/hide-content-properly

## CSS

This project uses [Sass][sass]. To make changes edit the `.scss` files in the
`sass/` folder, do NOT edit the files in `css/` directly.

Run `npm run sass:watch` in the theme folder to watch for changes and
automatically rebuild the CSS.

Run `npm run sass:lint` in the theme folder for linting. To use the [automatic
fix][lint-fix], run `npm run sass:lint-fix`

The `stylelintrc.json` config file extends Drupal core stylelint config. Run
`npm i` in `html/core` to install the stylelint plugins if there are errors
indicating missing packages.

Run `npm run sass:build` to compile production-ready CSS.

Preferably use Jenkins to run the `sass:build` task on build to generate the
CSS.

Follow [Drupal CSS coding standards and best practices][css-standards]

  [sass]: http://sass-lang.com/
  [lint-fix]: https://stylelint.io/user-guide/usage/cli#--fix
  [css-standards]: https://www.drupal.org/docs/develop/standards/css

## JS

Javascript files should be added to `js/` and defined as a library in
`common_design.ibraries.yml`

Instead of grouping all JS in one file, each component has its own JS file
associated with it. They have been built to be reused, allowing you to mix and
match any combination of JS files and use each as a dependency without altering
the original file. The general pattern to reference the method of a behavior is:

```js
// Use a method called "methodName" inside the same Behavior file
this.methodName();

// Use a method called "methodName" defined in cd-dropdown.js
Drupal.behaviors.cdDropdown.methodName();
```

Using `this` works for most functions except ones which are assigned to event
listeners. For those, we have prefixed all of them with the word `handle` — and
despite being contained within the same Behavior, you'll need to reference
internal functions using the full Behavior name (see second example above, as
if it were outside your Behavior)

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

## Fonts

This projects defines a few `css custom properties` for font families that use google fonts in
`sass/cd/_cd-variables.scss`, in accordance with the brand visual identity as explained at
https://brand.unocha.org/d/xEPytAUjC3sH/visual-identity#/basics/fonts-1

Roboto font is included by default as a sass partial in `sass/base/_fonts.scss` and imported in `styles.scss`.
This means Roboto font is compiled as part of `styles.css`

Additional fonts for advanced typography and multilingual are available as libraries (ex: `common_design/fonts-arabic`)
defined in `common_design.libraries.yml` to include as needed. For performance reasons, we do not include these by
default.

The fonts can be enabled in the `common_design_subtheme` by adding the relevant libraries as a dependency to the global
styles in the `common_design_subtheme.info.yml`:

```yaml
global-styling:
  css:
    theme:
      css/styles.css: {}
  dependencies:
    - common_design_subtheme/fonts-advanced
    - common_design_subtheme/fonts-arabic
    - common_design_subtheme/fonts-chinese
    - common_design_subtheme/fonts-russian
```

## Task management

This project uses some Node packages for Sass compilation, watching and linting,
JS linting and SVG icon sprite generation.

See [scripts in package.json][scripts].

To get a list of commands, do `npm run` and it will output all possible options.

  [scripts]: https://github.com/UN-OCHA/common_design/blob/main/package.json#L8-L21

## Icons

The available icons can be found in `img/icons`

There are two techniques used, SVG symbol sprite with the `<use>` element, and
SVG as a background-image, depending on context. The sprite technique is
preferred. We only use svg as a background image when using the sprite isn't
possible.

### 1. SVG sprite

SVG symbol sprite with the `<use>` element. The SVG sprite is loaded as a
single asset in the `html.html.twig` before the closing body tag. Each icon
within the sprite can be referenced by its ID eg.

```html
<svg class="cd-icon cd-icon--arrow-down" width="16" height="16" aria-hidden="true" focusable="false">
  <use xlink:href="#cd-icon--arrow-down"></use>
</svg>
```

Each icon should have the class `cd-icon` and a BEM selector if needed eg.
`cd-icon--arrow-down`. We can create associated CSS rules to control dimension
and fill.

Each icon should have reasonable width and height attribute values. These
control the SVG display when the CSS is slow or does not load. If the icon is
decorative, add `aria-hidden="true" focusable="false"` to remove the element
from the accessibility tree.

We're using https://github.com/jkphl/svg-sprite node package. See
https://una.im/svg-icons for more details.

### 2. SVG background-image

SVG as a background-image value, usually on a pseudo element. The SVG fill
colour is added as an attribute in the SVG file. The icons are black by default.
If you need another color, it's best to copy the icon and manually adjust the
fill/stroke to suit your needs. Rename the copy to include the color in the
filename eg. `arrow-down--white.svg`.

### Generating the icons sprite
As defined in the node scripts, all new icons should be placed in the
`img/icons` directory.
Run `npm run svg:sprite` to generate a new sprite.
This generates the sprite SVG `img/icons/cd-icons-sprite.svg` and it creates an
html page with all SVGs for reference
`img/icons/sprite.symbol.html`.

## Browser support
Progressive enhancement approach to layout, using Feature Queries to detect
support for flexbox and grid.

## Favicons
OCHA default favicons are provided. Update these with your logo.

http://realfavicongenerator.net/ is a good tool for generating favicons.

## Testing
### What we test
See [Browsers to test](https://docs.google.com/document/d/1lN0kLOkgfEAmdGODZ0PzLxiAr0Z-87C4ytet6F4GIuw) and 
[Draft - Supporting a global audience](https://docs.google.com/document/d/1AjKtlwUuJhZpbSrPs-nku3ECnMyZ67m9A1Lh05w7xM4/)

We use [browserstack](https://www.browserstack.com/) for browser and device testing. We can test using our local
development environments, select specific browsers for manual testing, and generate screenshots of many browsers at once.
Join the Flowdock [Developers](https://www.flowdock.com/app/unocha/developers) channel for access.

### How we test
There are e2e test using [Jest](https://github.com/facebook/jest) and [Puppeteer](https://github.com/puppeteer/puppeteer) in the base and sub theme.
There is a [repo for Visual Regression testing](https://github.com/UN-OCHA/ocha_vrt/) using [backstopjs](https://github.com/garris/BackstopJS) and a 
[Jenkins Job](https://github.com/UN-OCHA/ocha_vrt/) to run VRT on the server. Depending on the json configuration files,
we can generate screenshots from lists of URLs (including authenticated user pages), of multiple viewport dimensions, 
and capture keypress, hover and click actions.

Depending on the project, we run tests via [Travis CI](https://travis-ci.org/). For the [common-design-site repo](https://github.com/UN-OCHA/common-design-site/blob/develop/.travis.yml#L45) 
we run PHP lint and Drupal coding standards checks, and compile the theme's sass files. These are common among most 
projects.
Additionally, we install Drupal, import the config, import a database of sample data and run a web server so we can then 
run the e2e tests.

There is an open issue to integrate Lighthouse performance and accessibility testing [OPS-7526](https://humanitarian.atlassian.net/browse/OPS-7526)

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

There is a `site.webmanifest` file available in the sub theme as an alternative
to the module, if all you want is the Web Manifest, and you don't want offline
capability. The manifest file should be adjusted per implementation, and added
using a `<link>` element in the `<head>`, with additional configuration needed.
See the [Manifest documentation][manifest-docs] for implementation details.

  [brand]: https://web.brand.unocha.org
  [pwa]: https://www.drupal.org/project/pwa
  [manifest-docs]: https://developer.mozilla.org/en-US/docs/Web/Manifest

## Translations
Arabic, French and Spanish string translation files are available for the Common Design Header and Footer user 
interface, for example the OCHA Services in the header and the OCHA mandate in the footer. Refer to the `.po` files in
the `translations` directory and the [README](https://github.com/UN-OCHA/common_design/translations/README.md).
