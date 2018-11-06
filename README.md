# OCHA Common Design base theme for Drupal 8  

A base theme of the OCHA Common Design for Drupal 8. 

Extend as needed.


# @WIP Update below for D8


## This theme contains

* Common Header
* Common Footer
* Common SVG Icons
* Variables for breakpoints, colours, font-sizes, fonts, measurements and z-index
* Mixins for clearfix, REM font sizes and media queries
* Bootstrap dropdowns (requires jQuery 1.9.1 or higher)

**Optional components:**

* Grid (simplified version of Bootstrap v4 grid, https://v4-alpha.getbootstrap.com/layout/overview/)
* Typography
* Basic table styles
* Basic form styles
* Favicons
* gulp.js workflow for frontend development
  * Sass
  * Sourcemaps (see which specific Sass file contains styles during local development)
  * Autoprefixer
  * JS linting

## Getting started

1. Clone this repo to themes/contrib or install using Composer (todo)
2. If you want to renamne the theme, change the folder name, the filename of the .info file and find and replace for `ocha_basic` in the theme folder.
3. In the Drupal Admin, go to Appearance, find 'OCHA Basic Starter Theme' (or whatever you've renamed it to), and select **Enable and set default**

**To contribute to `common_design` development:**

1. Run `nvm use` to ensure the correct node version.
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

Preferably use Jenkins to run the Gulp task on build to generate the CSS. If this is possible on your project, add the `css/` folder to the `.gitignore` file and delete generated CSS from the repo.


## JS

Javascript files should be added to `js/` and to the scripts section of `ocha_basic.info`


## Icons

The available icons can be found in `img/icons`

There are two techniques used, depending on context.

1. SVG as a background-image value, usually on a pseudo element. The SVG fill colour is added as an attribute in the SVG file. We use this technique when using technique 2 isn't possible.
The icons are black by default. If you need another color, it's best to copy the icon and manually adjust the fill/stroke to suit your needs. Rename the copy to include the color in the filename eg. `arrow-down--white.svg`.

2. SVG symbol sprite using the `<use>` element. The SVG sprite is loaded as a single asset in the `html.tpl.php` before the closing body tag. Each icon within the sprite can be referenced by its ID eg. 
```
<svg class="icon icon--arrow-down">
  <use xlink:href="#arrow-down"></use>
</svg>
```
Each icon should have the class `icon` and a BEM selector if needed eg. `icon--arrow-down`. We can create associated CSS rules to control dimension and fill. We're using https://github.com/jkphl/gulp-svg-sprite. See https://una.im/svg-icons for more details.

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


## Add to Homescreen / manifest.json

We support the [PWA Drupal module](https://www.drupal.org/project/pwa) instead of providing our own manifest.json file. The `hook_pwa_manifest_alter()` hook is implemented in `template.php` with our default colors/icons, which can be overridden using the normal PWA admin UI.


## Styleguide

See https://un-ocha.github.io/styleguide/ocha/ for documentation and examples of the styles used.
