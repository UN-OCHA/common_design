# CD Dropdown

There are two elements: the button (referred to in JS code as “toggler”) and the
dropdown (referred to as “element”). The dropdown element needs to be included in the markup and requires the attribute of `data-cd-toggable`. The markup is designed to be declarative: you can specify the data attributes listed below and the JS does the rest.

**Progressive enhancement:** This component expects all content to exist in the HTML response which it will convert to a dropdown. There's no mode where data gets fetched from the client-side. We use JavaScript to create and remove the toggle button as needed. We use the attribute `data-cd-hidden` to apply the display rules.

## Purpose and Usage

**Minimum requirements**

The following attributes should be added to the dropdown element’s markup in order to construct a widget that meets our accessibility requirements:

- `id`: used to set the `aria-controls` attribute on the toggler
- `data-cd-toggable`: the value of this attribute is used as the Button label
- `data-cd-component`: the component name, for BEM selectors (eg. cd-filters)
- `aria-labelledby`: component-toggle (eg. cd-filters-toggle)

**Optional**

- `data-cd-logo` and/or `data-cd-icon` if either are desired for the button
- `data-cd-logo-only` adds a class `visually-hidden` to the button label
- `data-cd-label-switch` for different labels depending on open/closed state
- `data-cd-focus-target` for adding focus to a specific element when dropdown is toggled (this works well with the Search component. Add the ID of the search input field and it will have focus when the dropdown is expanded)
- `data-cd-replace=”ID”` will replace the element with the given ID with a toggler. The element (ex:  a link) serves as a fallback element for progressive enhancement when the cd-dropdown script cannot run.

## Caveats

- The dropdown element must be wrapped in a container element, so that the button can be generated as a sibling to the content.
- This script works best when JS is detected in the `<head>` of your document and injects a `js` class onto the `<html>` element. In Drupal this happens too late to prevent a Flash of Unstyled Content (FOUC) which manifests in dropdowns quickly appearing then disappearing on page load. [See our theme file][drupal-js-head] for how this works, or to copy code to another platform if implementing outside Drupal.
- If you have multiple dropdowns on a page, they are "aware" of each other in a sense: expanding a dropdown will simultaneously close any others that are open. Additionally, if using keyboard navigation, the dropdown will automatically close once it loses focus (e.g. when you tab away from the final link in the dropdown).
- The layout of a dropdown can be configured to expand automatically at a certain breakpoint. There is a CSS Custom Prop `--dropdown` which can be set to `false` at any media query you wish. [More info on this technique][dropdown-custom-prop].

  [drupal-js-head]: https://github.com/UN-OCHA/common_design/blob/1ff0a03bf5df76071ece76e82105b952c4cf32e1/common_design.theme#L487-L496
  [dropdown-custom-prop]: https://justmarkup.com/articles/2017-01-24-handling-states-on-resize-using-css-custom-properties/


### Variants

```
none

```
