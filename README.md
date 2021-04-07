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
* Common SVG Icons (a web-specific subset of [OCHA humanitarian icons](https://thenounproject.com/ochavisual/))
* Variables for breakpoints, colours, font sizes, fonts, measurements and z-index
* Mixins for clearfix and media queries
* Custom javascript for dropdown behaviour
* See [v3.0.0 Release notes](https://github.com/UN-OCHA/common_design/releases/tag/v3.0.0) and [common_design implementation notes for v2](https://docs.google.com/document/d/1GpTtCWNQvGiPDfZmhFvaKGvU9hbOG0HedFTYgo3nvd4) for more detailed documentation

There is a [sub theme](https://github.com/UN-OCHA/common_design_subtheme) available
   * This can be used as a starting point for implementations. Add components, override and extend the base theme as needed. Clone the common_design_subtheme directory to /themes/custom/ and remove the .git folder (all the implementation specific work should happen in the subtheme). Optionally rename the subtheme folder and associated theme files. See the [sub theme README](https://github.com/UN-OCHA/common_design_subtheme/blob/main/README.md)

**Drupal components:**

* normalize-css library is included in [Drupal core](https://github.com/UN-OCHA/common-design-site/tree/develop/html/core/assets/vendor/normalize-css)
* jQuery is [included in Drupal core](https://github.com/UN-OCHA/common-design-site/blob/develop/html/core/core.libraries.yml#L362) but is not loaded globally. We include it as a library only when we need it.
* [hidden.module.css](https://github.com/UN-OCHA/common-design-site/blob/develop/html/core/modules/system/css/components/hidden.module.css) is included in Drupal core for display-related utility classes

**Additional components:**

* Typography
* Component library
   * HTML/CSS/JS that can be attached as Drupal libraries to twig templates, or copied into sass partials.
   * Requires Drupal [Components module](https://www.drupal.org/project/components)
   * See [Common Design demo](https://demo.commondesign-unocha-org.ahconu.org) for Component examples
   * Refer to [Components README](https://github.com/UN-OCHA/common_design/blob/main/components/README.md) and https://github.com/UN-OCHA/common_design/blob/main/components/
* Favicons and OCHA assets based on https://brand.unocha.org
* gulp.js workflow for frontend development
  * SASS
  * Sourcemaps (see which specific Sass file contains styles during local development)
  * Autoprefixer
  * Sass and JS linting

## Getting started

1. Clone this repo to `/themes/contrib/` or install using `composer require unocha/common_design`
2. Clone the [common_design_subtheme](https://github.com/UN-OCHA/common_design_subtheme) repo to `/themes/custom/`
3. In the Drupal Admin, go to Appearance, find 'OCHA Common Design sub theme' (or whatever you've renamed it to), and select **Enable and set default**

**To contribute to `common_design` base theme development and/or to customise the sub theme**

1. Run `nvm use` in theme folder to ensure the correct node version.
2. Install the dependencies: `npm install`
3. Copy `localConfig.example.json` to `localConfig.json` and specify the URL of your local Drupal environment.
4. Run the simple gulp task to build the CSS and watch for new changes: `gulp dev`
5. When you make commits, it will automatically run a "production" Sass build that excludes Sourcemaps
6. For twig debug and local development see [Disable Drupal 8 caching during development
](https://www.drupal.org/node/2598914)

Drupal 8 core has helper classes for accessibility [Hide content properly](https://www.drupal.org/docs/8/accessibility/hide-content-properly)

## CSS

This project uses [Sass](http://sass-lang.com/). To make changes edit the `.scss` files in the `sass/` folder, do NOT edit the files in `css/` directly.

Run `gulp dev` in the theme folder to have gulp watch for changes and automatically rebuild the CSS.

Run `gulp sass` to compile the CSS only.

Preferably use Jenkins to run the Gulp task on build to generate the CSS. If this is possible on your project, add the `css/` folder to the `.gitignore` file and delete generated CSS from the repo.


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


## Gulp

This project uses [Gulp 4](https://github.com/gulpjs/gulp#whats-new-in-40)

To see a task listing, run the following command:

`gulp --tasks`


## Icons

The available icons can be found in `img/icons`

There are two techniques used, depending on context.

1. SVG as a background-image value, usually on a pseudo element. The SVG fill colour is added as an attribute in the SVG file. We use this technique only when using technique 2 isn't possible.
The icons are black by default. If you need another color, it's best to copy the icon and manually adjust the fill/stroke to suit your needs. Rename the copy to include the color in the filename eg. `arrow-down--white.svg`.

2. SVG symbol sprite using the `<use>` element. The SVG sprite is loaded as a single asset in the `html.tpl.php` before the closing body tag. Each icon within the sprite can be referenced by its ID eg.
```
<svg class="cd-icon cd-icon--arrow-down" width="16" height="16" aria-hidden="true" focusable="false">
  <use xlink:href="#cd-icon--arrow-down"></use>
</svg>
```
Each icon should have the class `cd-icon` and a BEM selector if needed eg. `cd-icon--arrow-down`. We can create associated CSS rules to control dimension and fill.

Each icon should have reasonable width and height attribute values. These control the SVG display when the CSS is slow or does not load. 
If the icon is decorative, add `aria-hidden="true" focusable="false"` to remove the element from the accessibility tree.

We're using https://github.com/jkphl/gulp-svg-sprite. See https://una.im/svg-icons for more details.

### Generating the icons sprite
As defined in the gulp task, all new icons should be placed in the `img/icons` directory.
Run `gulp sprites` to generate a new sprite.
This generates the sprite SVG and places it in `img/icons/icons-sprite.svg` and it creates an html page with all SVGs for reference `img/icons/sprite.symbol.html`.


### Renaming icons
When importing a new version of the Common Icons, there is a bulk-renaming command in `package.json` that can be invoked by running the following:

```
# first, cd to repo root
npm run icon-rename
```

This assumes that you have a tool compatible with http://brewformulas.org/Rename — you can install it on OSX using Homebrew:

```
brew install rename
```


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
npm run e2e -- -t 'OCHAServicesDropdown'
npm run e2e -- -t 'Subtheme: OCHAServicesDropdown'
```
