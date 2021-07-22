# OCHA Common Design sub theme for Drupal 8

A sub theme, extending [common_design](https://github.com/UN-OCHA/common_design) base theme.

This can be used as a starting point for implementations. Add components, override and extend base theme as needed.
Refer to [Drupal 8 Theming documentation](https://www.drupal.org/docs/8/theming) for more.

Copy this directory to `/themes/custom/`, then rename the `common_design_subtheme.info.yml.example` to
`common_design_subtheme.info.yml`.

### Customise the logo
- Set the logo `logo: 'img/logos/logo.svg'` in the `common_design_subtheme.info.yml` file, and in the
`sass/cd/cd-header/_cd-logo.scss` partial override file.
- Adjust the grid column width in `sass/cd/cd-header/_cd-header.scss` partial override file to accommodate the logo.

### Customise the favicon and homescreen icons
Replace the favicon in the theme's root, and the homescreen icons in `img/` with branded versions

### Customise colours
- Change colour-related variable names and values in `sass/cd/_cd_variables.scss` and replace in all references to in
partial overrides in `common_design_subtheme/sass/cd/`

### Other customisations
Override sass partials and extend twig templates from the base theme as needed, copying them into the sub theme and
linking them using `@import` for sass and `extend` or `embed` for twig templates.

Add new components by defining new libraries in `common_design_subtheme.libraries.yml` and attaching them to relevant
templates. Or use existing components from `common_design.libraries.yml` base theme by attaching the libraries to twig
template overrides in the sub theme.
`{{ attach_library('common_design/cd-teaser') }}`

Override theme preprocess functions by copying from `common_design.theme` and editing as needed. For example, if new
icons are added, a new icon sprite will need to be generated and the `common_design_preprocess_html` hook used to attach
the icon sprite to the page will need a new path to reflect the sub theme's icon sprite location.

Refer to [common_design README](https://github.com/UN-OCHA/common_design/#common-design-base-theme-for-drupal-8) for
general details about base theme and instructions for compilation. There should be no need to compile the base theme,
only the sub theme.

Refer to [common_design README E2E testing](https://github.com/UN-OCHA/common_design/#e2e-testing) for information about
running tests.
