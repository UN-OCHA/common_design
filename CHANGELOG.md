# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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


## [v5.0.2](https://github.com/UN-OCHA/common_design/releases/tag/v5.0.2) - 2021-12-06
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


## [v5.0.1](https://github.com/UN-OCHA/common_design/releases/tag/v5.0.1) - 2021-09-16
### Security
- Dependency update for set-value
---

## [v5.0.0](https://github.com/UN-OCHA/common_design/releases/tag/v5.0.0) - 2021-09-13
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
---

## [v4.1.1](https://github.com/UN-OCHA/common_design/releases/tag/v4.1.1) - 2021-07-23
### Fixed
- Fix cd-filter component display for IE11 by reinstating previously removed rule to force display when CSS custom
properties are not supported.

## [v4.1.0](https://github.com/UN-OCHA/common_design/releases/tag/v4.1.0) - 2021-07-22
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

## [v4.0.6](https://github.com/UN-OCHA/common_design/releases/tag/v4.0.6) - 2021-06-16
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
