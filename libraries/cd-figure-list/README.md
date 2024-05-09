# Figure list

## Purpose and Usage

This component is to be used to display list of figures composed of a label and
a value. Example: Needs and Requirements figures on the GHO site.

By default, the list is vertical with minimal styling.

## Caveats

We evaluated accessibility for the existing markup and found both explicitly forcing `<ul role="list">` and/or using `<dl>`/`<dt>`/`<dd>` markup resulted in lower-quality, more confusing screen reader announcements that denoted list items at an awkward (ul) or misleading (dl) cadence.

The large version currently expects 3 figures. @TODO: use a quantity media query to adjust the styling based on the number of
elements or something like https://codepen.io/heydon/pen/RvZQXR

## Variants

This component comes with 2 variants:

- `cd-figure-list--large`:
  - displays the list horizontally on large screens
  - larger font for labels
  - larger font and different color (OCHA blue) for values

- `cd-figure-list--small`:
  - displays the list horizontally, with figures wrapping to the next row.
