# Figure list

## Purpose and Usage

This component is to be used to display list of figures composed of a label and
a value.

Example: needs and requirements figures on the GHO site.

By default, the list is vertical with minimal styling.

## Caveats

The large version currently expects 3 figures.

@todo: use a quantity media query to adjust the styling based on the number of
elements or something like https://codepen.io/heydon/pen/RvZQXR

## Variants

This component comes with 2 variants:

- `cd-figure-list--large`:
  - displays the list horizontally on large screens
  - larger font for labels
  - larger font and different color (OCHA blue) for values

- `cd-figure-list--small`:
  - displays the list horizontally, with figures wrapping to the next row.
