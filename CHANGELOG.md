# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

`Added` for new features.\
`Changed` for changes in existing functionality.\
`Deprecated` for soon-to-be removed features.\
`Removed` for now removed features.\
`Fixed` for any bug fixes.\
`Security` in case of vulnerabilities.
---


## [Unreleased]
### Changed
- Adjust image path in manifest file
- Add details about Manifest and PWA to README
- Add libraries for advanced and multilanguage fonts and README updates to describe usage.
### Removed
- Remove Roboto Condensed and Slab fonts and Noto Sans for multilingual from being included by default in `styles.css`.


---

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


