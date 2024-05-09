# Site-specific Drupal Libraries

Place all of your site-specific libraries in this directory. You might want to override existing CD behavior, extend a particular core/module/theme/CD component, or create custom components for the site you're building.

These components can be attached to Twig templates once you define a [Drupal library][drupal-libraries] that references your component. See example config:

- `common_design_subtheme.info.yml.example` (the real theme file must be created during setup but the example file in the repo contains the docs plus commented-out examples)
- `common_design_subtheme.libraries.yml`

If you want to use [Single Directory Components][sdc], place them in the `components` directory.

  [drupal-libraries]: https://www.drupal.org/docs/theming-drupal/adding-assets-css-js-to-a-drupal-theme-via-librariesyml
  [sdc]: https://www.drupal.org/project/sdc
