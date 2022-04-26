# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [7.0.1](https://github.com/UN-OCHA/common_design/compare/v7.0.0...v7.0.1) (2022-04-26)


### Bug Fixes

* **a11y:** add focusable and aria-hidden attributes to search submit button svg to remove from accessibility tree ([cbc8782](https://github.com/UN-OCHA/common_design/commit/cbc87827f186879401e08b569f27627645419d9d))
* **a11y:** replace display none with max-width mixin for search button label to visually hide on mobile ([df79789](https://github.com/UN-OCHA/common_design/commit/df797896dc82d6db4a861ad1c81db9b8d39f2777))
* **a11y:** set text colour for visually hidden block headings to pass contrast ([94da5fa](https://github.com/UN-OCHA/common_design/commit/94da5faa7ad45a9d761e0404c12b0314636d0257))
* add accurate unocha social media links to replace placeholder hashes ([52cfb58](https://github.com/UN-OCHA/common_design/commit/52cfb58e535f7577c8d79990f5b2cabe2d058f85))
* add id to menu item anchors only if they have children to prevent duplicate ids on children ([cc1cc81](https://github.com/UN-OCHA/common_design/commit/cc1cc81d756c665c901f7ba60a9fbc698d79b5f4))
* ensure proper ID hierarchy in help menu template ([1565cdc](https://github.com/UN-OCHA/common_design/commit/1565cdccb32262c75a1b3ad600785b8a1391fabe))
* ensure proper ID hierarchy in main menu template ([6b33790](https://github.com/UN-OCHA/common_design/commit/6b33790fab5f9b43971abe6d4047f5fc0d7c7668))
* ensure proper ID hierarchy in user menu template ([e45b493](https://github.com/UN-OCHA/common_design/commit/e45b4935a59608a9231b4c1055bd914c358ebcfe))

## [7.0.0](https://github.com/UN-OCHA/common_design/compare/v6.0.0...v7.0.0) (2022-04-21)


### ⚠ BREAKING CHANGES

* **sass:** The sub-theme no longer uses Sass by default. All properties that were being overridden by sub-theme Sass are now folded into the base-theme, and instead you can use the `css/brand.css` file in the sub-theme to control your website branding.
* **icons:** The icon SVG sprite is included via a template rather than a hook. If you've customized your icon sprite, you'll need to reconfigure the sub-theme to take advantage of the template instead of `hook_preprocess_html()`.

### Features

* **branding:** Created a CSS file dedicated to site branding. You can control all site branding using five CSS Vars. ([2224bf8](https://github.com/UN-OCHA/common_design/commit/2224bf8d9de864f031d9242d903af2e8a4cc1e57))
* **icons:** include icon svg sprite via a template rather than a hook ([96cf1f7](https://github.com/UN-OCHA/common_design/commit/96cf1f7ca6cc8cbae72caae025b7a19158554d94))


## [6.0.0](https://github.com/UN-OCHA/common_design/compare/v5.1.0...v6.0.0) (2022-03-04)


### ⚠ BREAKING CHANGES

* **deps:** All implementations that receive updates after this commit will need to support **node.js 16.13.2 LTS** or higher.
* **deps:** stylelint@14 was adopted to keep up with Drupal 9 core, and the release had several major changes. It's possible that CD implementations which previously passed the linter will suddenly contain warnings or errors.

### Features

* **forms:** provide styling for common form elements ([#254](https://github.com/UN-OCHA/common_design/pull/254))
* **team:** CD-000 add conventional commits package ([#283](https://github.com/UN-OCHA/common_design/pull/283))


### Bug Fixes

* on largest breakpoint, make room for potentially long site names ([86d071c](https://github.com/UN-OCHA/common_design/commit/86d071c5e431755165f679aaad9c96b648f6ecc6))
* **security:** upgrade to node.js LTS 16.13.2 ([3925e3d](https://github.com/UN-OCHA/common_design/commit/3925e3d28d0e6d04dd0341319bedf26a205c50cd))


## [5.1.0](https://github.com/UN-OCHA/common_design/compare/v5.0.1...v5.1.0) (2021-11-18)

### Features

* Add conventional commits package to automate CHANGELOG #283
* Add theme functions and template overrides for Node, Taxonomy term and user edit forms
* Add template overrides for the date field, dataset table, media library item, radio element, and the generic form element, to add classes and attach CD libraries
* Expand form and field visual styles in `cd-form` component and add some basic layout rules for some elements like the Image and File fields.
* Add `cd-dropbutton` component that extends core library, for Drupal actions like reverting and deleting revisions


### Bug Fixes

* Expand README section about testing
* Expand `form alter` function to add CD button variant classes for Cancel and Delete buttons
* Expand `cd-form` README to explain the use of CubeCSS and `cd-flow` component to adjust vertical rhythm for forms
* **security:** Dependency updates for json-schema
* **security:** Update xmldom package published to npm instead of github
* **security:** Upgrade core-js


## [5.0.2](https://github.com/UN-OCHA/common_design/releases/tag/v5.0.2) (2021-12-06)

### Added
- Add `ch` unit to `unit-allowed-list` stylelint configuration

### Changed
- Mention D9 in README
- Fix some links in `CONTRIBUTING.md`

### Removed
- Remove `unit-whitelist` from stylelint configuration as it is deprecated
- Remove `plugin/no-browser-hacks` from sub theme stylelint configuration. See [issues #265](https://github.com/UN-OCHA/common_design/issues/265).
The base theme and sub theme are now tailored for >= Drupal 9.2

### Security
- Dependency updates for nth-check


## [5.0.1](https://github.com/UN-OCHA/common_design/releases/tag/v5.0.1) (2021-09-16)

### Security
- Dependency update for set-value


## [5.0.0](https://github.com/UN-OCHA/common_design/releases/tag/v5.0.0) (2021-09-13)

### Added
- Add admin and external link SVG icons to SVG icon sprite
- Add and develop Pull Request template
- Add Release Notes template to CONTRIBUTING.md
- Add Arabic, French, and Spanish translation files for CD Header and Footer user interface strings
- Add `corejs` version to babel config to prevent warnings during `npm run e2e`

### Changed
- Replace external js file with local file for CSS custom property ponyfill
- Add missing accessibility-related attributes on SVG icons in the sub theme social media partial
- node package `dependencies` and `devDependencies` reshuffle to speed up builds and ensure `sass:build` works when `NODE_ENV=production`

### Removed
- `stylelint-no-browser-hacks` plugin, also removed from D9. See [#265](https://github.com/UN-OCHA/common_design/issues/265)

### Fixed
- Fix page title logic to limit the use of the page title to node canonical and preview pages
- Use `form_id` in theme_suggestions_form_alter hook to provide proper theme suggestions
### Security
- Dependency updates for xmldom
- Dependency updates for axios


## [4.1.1](https://github.com/UN-OCHA/common_design/releases/tag/v4.1.1) (2021-07-23)

### Fixed
- Fix cd-filter component display for IE11 by reinstating previously removed rule to force display when CSS custom
properties are not supported.

## [4.1.0](https://github.com/UN-OCHA/common_design/releases/tag/v4.1.0) (2021-07-22)

### Changed
- Adjust image path in manifest file
- Add details about Manifest and PWA to README
- Add libraries for advanced and multilanguage fonts and README updates to describe usage.
- Add CSS custom property to set the grid size for `cd-image-grid` component
- Move `browserconfig.xml` into sub theme, and adjust image path.

### Fixed
- Fix Views `views-view-grid.html.twig` template override so it adds the `cd-grid` component only when the alignment
setting from Views UI is set to "horizontal".

### Removed
- Remove Roboto Condensed and Slab fonts and Noto Sans for multilingual from being included by default in `styles.css`.
- Remove grid partial previously included in `styles.scss` as it is not in use.

## [4.0.6](https://github.com/UN-OCHA/common_design/releases/tag/v4.0.6) (2021-06-16)

### Added
- Theme hook suggestions for Views Display

### Changed
- Improve e2e tests to run in TravisCI
- Move sample.sql for e2e tests in TravisCI outside of theme repo
- Update URL for HID Services in OCHA Services menu and in tests
- Component's Review continued, see `components/README.md` for status

### Fixed
- Focus link colour in cd-tags component
- Cursor for cd-button component

### Security
- Dependabot Bump `ws` from 7.4.4 to 7.4.6
- `css-what` as dev dependency for svg-sprite
- `trim-newlines` for stylelint-no-browser-hacks
