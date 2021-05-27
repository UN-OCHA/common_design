# OCHA Common Design System v3

- Full-width header and footer
- Full-width components

---

# Common Design base theme for Drupal 8

## Releases

Refer to [Github releases](https://github.com/UN-OCHA/common_design/releases) for latest updates. We use [npm-version](https://docs.npmjs.com/cli/version) and [semantic versioning](https://semver.org/)

## This theme contains

* Common Header
* Common Footer
* Common SVG Icons (a web-specific subset of [OCHA humanitarian icons](https://brand.unocha.org/d/xEPytAUjC3sH/icons))
* Variables for breakpoints, colours, font sizes, fonts, and z-index
* Mixins for clearfix and media queries
* Custom javascript for dropdown behaviour
* See [v3.0.0 Release notes](https://github.com/UN-OCHA/common_design/releases/tag/v3.0.0) and [common_design implementation notes for v2](https://docs.google.com/document/d/1GpTtCWNQvGiPDfZmhFvaKGvU9hbOG0HedFTYgo3nvd4) for more detailed documentation

There is a sub theme included in this repo.
   * This can be used as a starting point for implementations. Add components, override and extend the base theme as needed. Copy the common_design_subtheme directory to /themes/custom/ and refer to its [README](https://github.com/UN-OCHA/common_design/blob/main/common_design_subtheme/README.md). All the implementation-specific work should happen in the sub theme. Optionally rename the subtheme folder and associated theme files.

**Drupal components:**

* normalize-css library is included in [Drupal core](https://github.com/UN-OCHA/common-design-site/tree/develop/html/core/assets/vendor/normalize-css)
* jQuery is [included in Drupal core](https://github.com/UN-OCHA/common-design-site/blob/develop/html/core/core.libraries.yml#L362) but is not loaded globally. We include it as a library only when we need it.
* [hidden.module.css](https://github.com/UN-OCHA/common-design-site/blob/develop/html/core/modules/system/css/components/hidden.module.css) is included in Drupal core for display-related utility classes

**Additional components:**

* Typography
* Component library
   * HTML/CSS/JS components that can be attached as Drupal libraries to twig templates, or copied into sass partials.
   * Requires Drupal [Components module](https://www.drupal.org/project/components)
   * See [Common Design demo](https://web.brand.unocha.org/demo) for Component examples
   * Refer to [Components README](https://github.com/UN-OCHA/common_design/blob/main/components/README.md) and https://github.com/UN-OCHA/common_design/blob/main/components/
* Favicons and OCHA branded assets based on https://brand.unocha.org
* Node workflow for frontend development
  * SASS
  * Sourcemaps (see which specific Sass file contains styles during local development)
  * Autoprefixer
  * Sass and JS linting
  * SVG sprite
  * E2E tests

## Getting started

1. Clone this repo to `/themes/contrib/` or install using `composer require unocha/common_design`
2. Copy the `common_design_subtheme` directory to `/themes/custom/`
3. In the Drupal Admin, go to Appearance, find 'OCHA Common Design sub theme' (or whatever you've renamed it to), and select **Enable and set default**

**To contribute to `common_design` base theme or sub theme development and/or to customise the sub theme**

1. Run `nvm use` in theme folder to ensure the correct node version.
2. Install the dependencies: `npm install`
3. For development, run `npm run sass:watch` (this includes an initial linting and sourcemaps) or run `npm run sass:compile-dev` to compile.
4. Run `npm run sass:build` for final CSS generation.
5. For twig debug and local development see [Disable Drupal 8 caching during development
](https://www.drupal.org/node/2598914)

Drupal 8 core has helper classes for accessibility [Hide content properly](https://www.drupal.org/docs/8/accessibility/hide-content-properly)

## CSS

This project uses [Sass](http://sass-lang.com/). To make changes edit the `.scss` files in the `sass/` folder, do NOT edit the files in `css/` directly.

Run `npm run sass:watch` in the theme folder to watch for changes and automatically rebuild the CSS.

Run `npm run sass:lint` in the theme folder for linting. To use the [automatic fix](https://stylelint.io/user-guide/usage/cli#--fix), run `npm run sass:lint-fix`

The `stylelintrc.json` config file extends Drupal core stylelint config. Run `npm i` in `html/core` to install the stylelint plugins if there are errors indicating missing packages.

Run `npm run sass:build` to compile production-ready CSS.

Preferably use Jenkins to run the `sass:build` task on build to generate the CSS.


## JS

Javascript files should be added to `js/` and defined as a library in `common_design.ibraries.yml`

Instead of grouping all JS in one file, each component has its own JS file associated with it. They have been built to be reused, allowing you to mix and match any combination of JS files and use each as a dependency without altering the original file. The general pattern to reference the method of a behavior is:

```js
// Use a method called "methodName" inside the same Behavior file
this.methodName();

// Use a method called "methodName" defined in cd-dropdown.js
Drupal.behaviors.cdDropdown.methodName();
```

Using `this` works for most functions except ones which are assigned to event listeners. For those, we have prefixed all of them with the word `handle` — and despite being contained within the same Behavior, you'll need to reference internal functions using the full Behavior name (see second example above, as if it were outside your Behavior)

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
      // Behavior object as `this` so this.sendAlert() will not be defined
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


## Task management

This project uses some Node packages for Sass compilation, watching and linting, JS linting and SVG icon sprite generation.

See [scripts in package.json](https://github.com/UN-OCHA/common_design/blob/main/package.json#L9)

To get a list of commands, do `npm run` and it will output all possible options.

## Icons

The available icons can be found in `img/icons`

There are two techniques used, depending on context.

1. SVG as a background-image value, usually on a pseudo element. The SVG fill colour is added as an attribute in the SVG file. We use this technique only when using technique 2 isn't possible.
The icons are black by default. If you need another color, it's best to copy the icon and manually adjust the fill/stroke to suit your needs. Rename the copy to include the color in the filename eg. `arrow-down--white.svg`.

2. SVG symbol sprite using the `<use>` element. The SVG sprite is loaded as a single asset in the `html.html.twig` before the closing body tag. Each icon within the sprite can be referenced by its ID eg.
```
<svg class="cd-icon cd-icon--arrow-down" width="16" height="16" aria-hidden="true" focusable="false">
  <use xlink:href="#cd-icon--arrow-down"></use>
</svg>
```
Each icon should have the class `cd-icon` and a BEM selector if needed eg. `cd-icon--arrow-down`. We can create associated CSS rules to control dimension and fill.

Each icon should have reasonable width and height attribute values. These control the SVG display when the CSS is slow or does not load. 
If the icon is decorative, add `aria-hidden="true" focusable="false"` to remove the element from the accessibility tree.

We're using https://github.com/jkphl/svg-sprite node package. See https://una.im/svg-icons for more details.

### Generating the icons sprite
As defined in the node scripts, all new icons should be placed in the `img/icons` directory.
Run `npm run svg:sprite` to generate a new sprite.
This generates the sprite SVG `img/icons/cd-icons-sprite.svg` and it creates an html page with all SVGs for reference `img/icons/sprite.symbol.html`.

## Browser support
Progressive enhancement approach to layout, using Feature Queries to detect support for flexbox and grid.


## Favicons
OCHA default favicons are provided. Update these with your logo.

http://realfavicongenerator.net/ is a good tool for generating favicons.


## E2E testing

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
