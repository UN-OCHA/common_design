# Filter

## Purpose and Usage
Displays multiple and varied form elements like inputs and selects and submit button.

By default, the elements flow in a single column. The intend default layout is a sidebar.
There is a variant for horizontal filters that will span 100% of the available space, with a column layout up to 5 
elements.
There are BEM selectors `.cd-filter__group` and Drupal-friendly selectors `.cd-filter__form > .block` for the flex 
children.

Use with the cd-dropdown component to create a collapsed filter area on mobile.
Due to issues documented on CD-241 the CSS custom property to set the dropdown control needs to be added to the
styles.css and doesn't work when added as part of this component's CSS.
There is a .scss partial provided in this component for ease.

@TODO fix this issue.

## Caveats

See above.

### Variants

```
cd-filter--horizontal

```
