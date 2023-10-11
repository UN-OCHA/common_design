# OCHA Common Design sub-theme for Drupal 9+

A starterkit to use the [OCHA Common Design](https://github.com/UN-OCHA/common_design) base-theme in a way that allows for "upstream" changes such as security updates, new features, and so forth. The sub-theme is ready to help you implement the following types of customizations:

- Customise your site colors
- Add your own icons to the SVG sprite
- Override/extend base-theme templates
- Adding/overriding/extending frontend components

Refer to [Drupal 9+ Theming documentation][theming-docs] for more information.

  [theming-docs]: https://www.drupal.org/docs/theming-drupal


## Getting started

1. Copy the `common_design_subtheme` directory from the base-theme into `/themes/custom/` of the Drupal site.
2. Rename the `common_design_subtheme.info.yml.example` to `common_design_subtheme.info.yml`
3. In the Drupal Admin, go to Appearance, find **OCHA Common Design sub theme** and select **Enable and set default**.
4. Customize the `name`/`description` fields of the sub-theme's info file if you wish.
5. Rebuild the cache.
6. Edit the sub-theme's `css/brand.css` to pick your site's palette. No other modifications are necessary.


### Customise the logo

The theme uses two logos: by default the UN emblem, and on wider screens the OCHA lockup (emblem plus "OCHA"). To configure both follow these steps:

1. **Desktop:** Add your file to `img/logos` and set the **desktop logo** in the `common_design_subtheme.info.yml` file

```
logo: 'img/logos/your-desktop-logo.svg'
```

Adjust `--brand-logo-desktop-width` to match your logo's dimensions

2. **Mobile:** Check your mobile logo into version control and adjust `css/brand.css` to match the file's dimensions:

  - `--brand-logo-mobile-width`

You must also update the `url()` within `components/cd/cd-header/cd-logo.css`


### Customise the favicon and homescreen icons

Replace the favicon in the theme's root, and the homescreen icons in `img/` with branded versions


### Customise colours

Change the CSS Vars in `css/brand.css` and save the file. Sass is no longer available in CD v8.


### Customise icons

- Copy SVG icons from the [Humanitarian icon set][cd-icons] into the sub-theme `img/icons` directory and follow the instructions in the [common_design README][cd-icons-readme] to generate a sprite with those new icons.
- Edit the sub-theme's `templates/cd/cd-icons/cd-icons.html.twig` to include the generated sprite file.

  [cd-icons]: https://brand.unocha.org/d/xEPytAUjC3sH/icons
  [cd-icons-readme]: https://github.com/UN-OCHA/common_design/blob/main/README.md#icons


### Creating Drupal libraries

Add new components by [defining Drupal libraries][library-define] in `common_design_subtheme.libraries.yml` and attaching them to relevant templates. Or use existing components from `common_design.libraries.yml` base-theme by overriding Twig templates in the sub-theme and [attaching the libraries][library-attach] like so:

```c
{# Use a CD base-theme component #}
{{ attach_library('common_design/cd-teaser') }}

{# Attach a custom sub-theme library #}
{{ attach_library('common_design_subtheme/my-article-teaser') }}
```

  [library-define]: https://www.drupal.org/docs/theming-drupal/adding-stylesheets-css-and-javascript-js-to-a-drupal-theme#define
  [library-attach]: https://www.drupal.org/docs/theming-drupal/adding-stylesheets-css-and-javascript-js-to-a-drupal-theme#attach-library-specific-twig


### Overriding Drupal libraries

Occasionally you might want to [totally replace a given library][library-override] that is output by core or CD base-theme. In that case, use `libraries-override` to replace the library of your choice with the customized version. No additional work should be necessary to attach libraries inside Twig templates.

  [library-override]: https://www.drupal.org/docs/theming-drupal/adding-stylesheets-css-and-javascript-js-to-a-drupal-theme#override-extend


### Extending Drupal libraries

Core and CD base-theme libraries [can be extended with small customizations][library-extend] by using the `libraries-extend` directive in `common_design_subtheme.info.yml`. By extending a library, your customizations automatically apply when any core or base-theme library would normally be output. Use this feature to override colors inside components, for example.

  [library-extend]: https://www.drupal.org/docs/theming-drupal/adding-stylesheets-css-and-javascript-js-to-a-drupal-theme#s-libraries-extend


### Extending the theme

Override theme preprocess functions by copying from `common_design.theme` and editing as needed. hen copying, the **function name will always need to be modified** from `common_design_` to `common_design_subtheme_`.

Refer to [common_design README][cd-readme] for
general details about base-theme and instructions for compilation. There should be no need to use Sass in the sub-theme anymore.

  [cd-readme]: https://github.com/UN-OCHA/common_design/blob/main/README.md#ocha-common-design-for-drupal-9


### Tests

To run E2E tests in the sub theme, adjust the Base URLs in the
`common_design_subtheme/_tests/_env/index.js` file.

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

```

### PHP CS
If using PHPCS the following can be added to `phpcs.xml` to exclude the tests
and related configuration.
```
  <exclude-pattern>jest*.js</exclude-pattern>
  <exclude-pattern>_tests/*</exclude-pattern>
```
This will prevent the issue:
`TRUE, FALSE and NULL must be uppercase; expected "TRUE" but found "true"`
