# Contributing to the base-theme or the Component library

| Audience |
| :------- |
| Everyone |

There are various audiences marked in this document. Mind the table at the top of each section to see if the docs are meant for your situation.


# Contributing code

| Audience           |
| :----------------- |
| Contributors to CD |


## Contributing CSS

All CSS is now managed by Drupal Library components. The best documentation to follow are the [official CSS guidelines on drupal.org][drupal-css]

- `npm run css:lint` — linting report only.
- `npm run css:lint-fix` — linting report, plus [automatically fix][lint-fix] any errors that the tool can safely adjust.

For twig debug and local development see [Disable Drupal 8+ caching during development][drupal-caching].

  [lint-fix]: https://stylelint.io/user-guide/usage/options#fix
  [drupal-css]: https://www.drupal.org/docs/develop/standards/css
  [drupal-caching]: https://www.drupal.org/node/2598914


## Accessibility of contributions

We strive to adhere to [Web Content Accessibility Guidelines (WCAG) 2.1, Level AA][a11y-standards] and will work to achieve that level of adherence when accepting any contribution to the theme. These guidelines are sourced from the [Official UN Web Accessibility Guidelines][a11y-un]

For example, Drupal provides utility classes to [hide content accessibly][a11y-hide]. Any solution that doesn't use our existing tools, or in general doesn't attempt to follow the guidelines has to be adjusted before the contribution can be accepted.

  [a11y-standards]: https://www.w3.org/TR/WCAG21/
  [a11y-un]: https://www.un.org/en/webaccessibility/index.shtml
  [a11y-hide]: https://www.drupal.org/docs/accessibility/hide-content-properly


# Creating a PR

| Audience           |
| :----------------- |
| Contributors to CD |

Clone the `common_design` base theme repo and make a [Pull Request][pr] (PR)
against `develop` branch for peer review. The PR should follow the [pull request template][pr-template] as appropriate.

Commits in your branch (or at the very least the PR merge commit) should follow the [Conventional Commits guidelines][cc-guidelines], so that our CHANGELOG can be automatically generated with appropriate notes during each release. A few examples:

  [pr]: https://github.com/UN-OCHA/common_design/pulls
  [pr-template]: https://github.com/UN-OCHA/common_design/blob/develop/pull_request_template.md
  [cc-guidelines]: https://www.conventionalcommits.org/en/v1.0.0

```sh
#
# All examples assume you're on version 4.0.0 when creating the example commit.
#

# a normal bugfix
# Outcome: new patch version (4.0.1)
git cm -m "fix: change the padding of the OCHA Services menu"

# a new feature that relates to "cd-form"
# Outcome: new minor version (4.1.0)
git cm -m "feat(cd-form): new component: CD Form"

# a bugfix that creates a breaking change
# Outcome: new major version (5.0.0)
git cm -m "fix!: new JS library for handling CD Dropdowns

Refs: CD-XXX
BREAKING CHANGE: The JS library that controls the dropdowns in the CD Header
has been swapped out. While the JS should be migrated automatically, any
libraries that were overridden in subthemes, plus any templates using the old
data-cd-toggable HTML attribute need to be re-inspected and verified to work
properly."
```


# Releases

| Audience |
| :------- |
| Everyone |

We use [standard-version][standard-version] which reads the commit history to choose the appropriate tag based on [semantic versioning][semver] rules and generates the [CHANGELOG][changelog]. We aim to facilitate an annual release accompanied by department-wide comms. Each annual release might contain zero or many breaking changes, which must be clearly documented.

We regularly release patches or minor releases to include bug fixes, dependency/security updates, and improvements to the Component Library. Refer to the [CHANGELOG][changelog] and/or [Github Releases][releases] for the latest tagged releases.

There may be several breaking changes during the year which result in increments to the major release number. Teams using the base theme might be “behind” by a few numbers when they update annually. We hope these numbers will help to highlight the major changes and we will offer support during these times so the updates are as clear as possible.

  [semver]: https://semver.org/
  [changelog]: https://github.com/UN-OCHA/common_design/blob/main/CHANGELOG.md
  [releases]: https://github.com/UN-OCHA/common_design/releases
  [standard-version]: https://github.com/conventional-changelog/standard-version


## Creating a Release

| Audience    |
| :---------- |
| Maintainers |

Create a new branch from `develop` and run the release command to generate the new CHANGELOG and increment the version number in our `package.json` and other related files. There's a dry-run flag to preview what will happen:

```sh
# Example with the dry-run flag.
$ npm run release -- --dry-run

> common-design@6.0.0 release
> standard-version "--dry-run"

✔ bumping version in package.json from 6.0.0 to 7.0.0
✔ bumping version in package-lock.json from 6.0.0 to 7.0.0
✔ outputting changes to CHANGELOG.md
```

The command to make a release contains no flags:

```sh
$ npm run release
```

Review the commit and make any necessary adjustments to the CHANGELOG, using `git commit --amend` to add your changes to the existing commit that `standard-version` just created. Push your branch and open a PR to `develop`, which you can merge without review.

[Create the new Release][new-release] using the GitHub UI with the following properties:

- **Tag:** new tag with format `v0.0.0` — numbers should match [`package.json` in the `develop` branch][develop-package]
- **Target branch:** `develop`
- **Title:** `v0.0.0 — YYYY-MM-DD` using the today's date
- **Release notes:** See next section for a Release Notes template. If dependabot made any updates during this cycle, you can include "regular security updates" in the issue list without being more specific.

Once the tagged Release has been created, [create a PR from `develop` to `main`][pr-dev-main] which will include all work within the tagged release. You can merge that without review as well. This step allows hotfixes to be created from `main` should the need arise.

  [pr-dev-main]: https://github.com/UN-OCHA/common_design/compare/main...develop
  [new-release]: https://github.com/UN-OCHA/common_design/releases/new?target=develop
  [develop-package]: https://github.com/UN-OCHA/common_design/blob/develop/package.json#L3


## Release Notes Template

| Audience    |
| :---------- |
| Maintainers |

Below is a template to use for each Github Release, e.g. [v7.0.1 — 2022-04-26](https://github.com/UN-OCHA/common_design/releases/tag/v7.0.1)

```
### Overview
A brief description of what the release notes include. This is a good place to highlight any breaking changes, or major modifications that must be tended to.

### Issue Summary
For each issue addressed, a short description of the bug or enhancement, and/or the item as it appears in the CHANGELOG. If there's an associated pull request, or Github issue, include it. If a JIRA issue exists and includes important supporting information, link to it.

- CD-210: site manifest in sub theme #247
- CD-301: Details about Annual Release schedule in README #248

### Steps to Upgrade
Detailed, step-by-step instructions for anything that users or administrators need to do in order to implement or upgrade to this release. These could include configuration changes, prerequisites, hardware, or more. If no action is needed, say so.
```

## Updating stylelint config

| Audience    |
| :---------- |
| Maintainers |

Every once in a while we should refresh our stylelint config to match the current version of Drupal core. Grab the file from Drupal's git repo and replace the contents of `.stylelintrc.core.json` in **both base/sub-themes**. Note the core version (or branch name) by adding one line to the top of the JSON file:

```js
{
  "drupal-core": "10.1.x",
  // ... rest of core stylelintrc ...
```
