# OCHA Common Design sub theme for Drupal 8

A sub theme, extending [common_design](https://github.com/UN-OCHA/common_design) base theme.

This can be used as a starting point for implementations. Add components, override and extend base theme as needed. Refer to [Drupal 8 Theming documentation](https://www.drupal.org/docs/8/theming) for more.

Copy this directory to /themes/custom/ and rename the subtheme folder and associated theme files from
`subtheme_common_design` to your theme name.

*!Note:* `subtheme_common_design.info` needs the `.yml` extension added. We omit it to prevent Drupal registering the subtheme as a theme, until we want to use it. Rename `subtheme_common_design.info` to `subtheme_common_design.info.yml`, clear the cache and the subtheme will be available in the list of Themes to install at `/admin/appearance`.

### Customise the logo
- Set the logo `logo: 'img/logos/logo.svg'` in the `subtheme_common_design.info.yml` file, and in the `sass/cd-header/_cd-logo.scss` partial override file.
- Adjust the grid column width in `sass/cd-header/_cd-header.scss` partial override file to accommodate the logo.

### Change the path of the libraries
In the `subtheme_common_design.info.yml` change the path of the global style sheet to reflect the new sub theme name.
```
libraries:
- subtheme_common_design/global-styling
```

### Customise the favicon and homescreen icons
Replace the favicon in the theme's root, and the homescreen icons in `img/` with branded versions

### Customise colours
- Change colour-related variable names and values in `sass/cd/_cd_variables.scss` and replace in all references to in partial overrides in `subtheme_common_design/sass/cd/`

### Other customisations
Override sass partials and extend twig templates from the base theme as needed, copying them into the sub theme and linking them using `@import` for sass and `extend` or `embed` for twig templates.

Add new components by defining new libraries in `subtheme_common_design.libraries.yml` and attaching them to relevant templates. Or use existing components from `common_design.libraries.yml` base theme by attaching the libraries to twig template overrides in the sub theme.

Override theme preprocess functions by copying from common_design.theme and editing as needed. For example, if new icons are added, a new icon sprite will need to be generated and the `common_design_preprocess_html` hook used to attach the icon sprite to the page will need a new path to reflect the sub theme's icon sprite location.

Refer to [common_design README](https://github.com/UN-OCHA/common_design/#ocha-common-design-base-theme-for-drupal-8) for general details about base theme and instructions for compilation. There should be no need to compile the base theme, only the sub theme.
