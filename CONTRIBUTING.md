# Contributing to the base theme or the Component library

**Audience:** anyone using the Common Design

Clone the `common_design` base theme repo and make a [Pull Request][pr] (PR)
against `develop` branch for peer review. The PR should follow the [pull request template][pr-template]
as appropriate.

Commits in your branch (or at the very least the PR merge commit) should follow the Conventional Commits guidelines, so that our CHANGELOG can be automatically generated with appropriate notes during each release. A few examples:

  [pr]: https://github.com/UN-OCHA/common_design/pulls
  [pr-template]: https://github.com/UN-OCHA/common_design/blob/develop/pull_request_template.md

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

## Releases

**Audience:** anyone using the Common Design

We use [standard-version][standard-version] which reads the commit history to choose the appropriate tag based on [semantic versioning][semver] rules and generates the [CHANGELOG][changelog]. We aim to facilitate an annual release accompanied by department-wide comms. Each annual release might contain zero or many breaking changes, which must be clearly documented.

We regularly release patches or minor releases to include bug fixes, dependency/security updates, and improvements to the Component Library. Refer to the [CHANGELOG][changelog] and/or [Github Releases][releases] for the latest tagged releases.

There may be several breaking changes during the year which result in increments to the major release number. Teams using the base theme might be “behind” by a few numbers when they update annually. We hope these numbers will help to highlight the major changes and we will offer support during these times so the updates are as clear as possible.

  [semver]: https://semver.org/
  [changelog]: https://github.com/UN-OCHA/common_design/blob/main/CHANGELOG.md
  [releases]: https://github.com/UN-OCHA/common_design/releases
  [standard-version]: https://github.com/conventional-changelog/standard-version


### Creating a Release

**Audience:** CD maintainers

Create a new branch from `develop` and run the release command to generate the new CHANGELOG and increment the version number in our `package.json` and other related files.

```sh
$ npm run release

# it will report the new version number and provide some additional instructions
# about pushing the tag. Note the tag, but IGNORE the other instructions!
```

The tool will create a tag which **you should DELETE** using the following command, substituting our example tag `v0.0.0` for the tag that actually got created:

```sh
$ git tag -d v0.0.0
```

With the tag deleted, push your branch and open a PR to `develop`, which you can merge without review. Once the changes are merged to `develop`, [create a PR from `develop` to `main`][pr-dev-main] which will include all work since the previous tagged release. You can merge that without review as well.

Finally, [create the new Release][new-release] using the GitHub UI. The tag should be the **exact same as the one you deleted before**. If you forgot it, look at the first tag listed in [CHANGELOG in `main`][main-changelog] to see what your tag should be. It will be in the format `v0.0.0`. The next section covers the contents of your Release Notes.

  [pr-dev-main]: https://github.com/UN-OCHA/common_design/compare/main...develop
  [new-release]: https://github.com/UN-OCHA/common_design/releases/new
  [main-changelog]: https://github.com/UN-OCHA/common_design/blob/main/CHANGELOG.md#changelog


### Release Notes Template

**Audience:** CD maintainers

Below is a template to use for each Github Release, e.g. [v4.1.0 Release 2021-07-22](https://github.com/UN-OCHA/common_design/releases/tag/v4.1.0)

```
### 1. Title with release number, and date of release
e.g. v4.1.0 Release 2021-07-22

### 2. Overview
A brief description of what the release notes include. This is a good place to highlight any breaking changes, or major modifications that must be tended to.

### 3. Issue Summary
For each issue addressed, a short description of the bug or enhancement, and/or the item as it appears in the CHANGELOG. If there's an associated pull request, or Github issue, include it. If a JIRA issue exists and includes important supporting information, link to it.

- CD-210: site manifest in sub theme #247
- CD-301: Details about Annual Release schedule in README #248

### 4. Resolution
The modifications made to address the enhancement or bug, and/or the item as it appears in the CHANGELOG.

### 5. Impacts
Note any actions that users or administrators need to take to implement or upgrade to use this release. These could include configuration changes, prerequisites, hardware, or more. If no action is needed, say so.
```
