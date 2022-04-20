# OCHA Common Design sub-theme for Drupal 8/9

A boilerplate for implementing the [OCHA Common Design](https://github.com/UN-OCHA/common_design) base-theme in a way that allows for "upstream" changes such as security updates, new features, and so forth. The sub-theme is ready to help you implement the following types of customizations:

- modifying the Common Design to customise its colors
- modifying the icon sprite to add your own icons
- override/extend base-theme templates
- adding/overriding/extending frontend components

Refer to [Drupal 8+ Theming documentation](https://www.drupal.org/docs/theming-drupal) for more information.


## Getting started

1. Copy this directory to `/themes/custom/`
2. Rename the `common_design_subtheme.info.yml.example` to
`common_design_subtheme.info.yml`
3. Customize the `name`/`description` fields of the info file.
4. Select the sub-theme in `/admin/appearance` and rebuild the cache.


### Customise the logo

- Set the logo `logo: 'img/logos/your-logo.svg'` in the `common_design_subtheme.info.yml` file.
- Adjust `--brand-logo-width` inside `css/brand.css`


### Customise the favicon and homescreen icons

Replace the favicon in the theme's root, and the homescreen icons in `img/` with branded versions


### Customise colours

Change the CSS Vars in `css/brand.css` and save the file. Sass is no longer needed in CD v7.


### Customise icons

- Copy SVG icons from the [Humanitarian icon set](https://brand.unocha.org/d/xEPytAUjC3sH/icons) into the subtheme `img/icons` directory and follow the instructions in the [common_design README](https://github.com/UN-OCHA/common_design/#icons) to generate a sprite with those new icons.
- Edit the subtheme's `templates/cd/cd-icons/cd-icons.html.twig` to include the generated sprite file.


### Creating Drupal libraries

Add new components by [defining new libraries](https://www.drupal.org/docs/theming-drupal/adding-stylesheets-css-and-javascript-js-to-a-drupal-theme#define) in `common_design_subtheme.libraries.yml` and attaching them to relevant templates. Or use existing components from `common_design.libraries.yml` base-theme by overriding Twig templates in the sub-theme and [attaching the libraries](https://www.drupal.org/docs/theming-drupal/adding-stylesheets-css-and-javascript-js-to-a-drupal-theme#attach-library-specific-twig) like so:

```c
{# Use a CD base-theme component #}
{{ attach_library('common_design/cd-teaser') }}

{# Attach a custom sub-theme library #}
{{ attach_library('common_design_subtheme/my-article-teaser') }}
```


### Overriding Drupal libraries

Occasionally you might want to [totally replace a given library](https://www.drupal.org/docs/theming-drupal/adding-stylesheets-css-and-javascript-js-to-a-drupal-theme#override-extend) that is output by core or CD base-theme. In that case, use `libraries-override` to replace the library of your choice with the customized version. No additional work should be necessary to attach libraries inside Twig templates.


### Extending Drupal libraries

Core and CD base-theme libraries [can be extended with small customizations](https://www.drupal.org/docs/theming-drupal/adding-stylesheets-css-and-javascript-js-to-a-drupal-theme#s-libraries-extend) by using the `libraries-extend` directive in `common_design_subtheme.info.yml`. By extending a library, your customizations automatically apply when any core or base-theme library would normally be output. Use this feature to override colors inside components, for example.


### Extending the theme

Override theme preprocess functions by copying from `common_design.theme` and editing as needed. For example, if new icons are added, a new icon sprite will need to be generated and the `common_design_preprocess_html` hook used to attach
the icon sprite to the page will need a new path to reflect the sub theme's icon sprite location.

Refer to [common_design README](https://github.com/UN-OCHA/common_design/#common-design-base-theme-for-drupal-89) for
general details about base-theme and instructions for compilation. There should be no need to use Sass in the sub-theme anymore.


## Tests

Refer to [common_design README E2E testing](https://github.com/UN-OCHA/common_design/#e2e-testing) for information about running tests.
