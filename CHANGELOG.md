# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
<pre>
`Added` for new features.
`Changed` for changes in existing functionality.
`Deprecated` for soon-to-be removed features.
`Removed` for now removed features.
`Fixed` for any bug fixes.
`Security` in case of vulnerabilities.
</pre>
---


## [Unreleased]
### Added
- Add admin and external link SVG icons to SVG icon sprite
### Changed
- Replace external js file with local file for CSS custom property ponyfill
- Add missing accessibility-related attributes on SVG icons in the sub theme social media partial
### Fixed
- Dependency updates for xmldom
- Fix page title logic to limit the use of the page title to node canonical and preview pages
- Use `form_id` in theme_suggestions_form_alter hook to provide proper theme suggestions

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


