# Filter

## Purpose and Usage
Displays multiple and varied form elements like inputs and selects and submit button.

By default, the elements flow in a single column on mobile, 2 columns on tablet, and back to a single column on desktop.
The intend default layout is a sidebar.
There is a variant for horizontal filters that will span 100% of the available space, with a column layout up to 5
elements.
There are BEM selectors `.cd-filter__group` and Drupal-friendly selectors `.cd-filter__form > .block` for the flex
children.
The `.cd-export` last div will align right.

## Caveats

Use with the cd-dropdown component to create a collapsed filter area on mobile.
The `.cd-filter[data-cd-toggable]` rule is to enable the `cd-filter` component collapse using `cd-dropdown` component. Set the breakpoint at which the filter should stop acting like a dropdown by adding `--dropdown: false` CSS custom property to the rule.

Adding `.cd-dropdown` class on `.cd-filter` means `--dropdown` defaults to `true`.

### Variants

```
cd-filter--horizontal

```
