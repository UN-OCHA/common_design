# Table

## Purpose and Usage
HTML tables for displaying a variety of tabular data. 

`cd-table.css` includes some basic rules that will apply to all `<table>` elements (no class needed).

When the basic `.cd-table` class is added to the table element, styles for colour, borders, padding, alignment, and
caption are applied. The table spans 100% of the available width and will shrink to fit the cell's contents as the
viewport narrows, down to `min-width: 6rem;`. **Depending on the table's content, this may or may not result in horizontal
scrollbar or layouts breaking at narrow widths.**

Where possible, adding `.cd-table` class to the table element ensures a uniform visual design. Additionally there are
some rules using `data-` attribute selectors for styling specific column data like `data-sort-type="numeric"`, as an
example of how specific data can be targeted.

There are also variants for numbering the table rows `.cd-table--row-numbers` and adding striping `.cd-table--striped`.

`cd-table--card.css` includes CSS rules to display the tables cells as cards on mobile. There is a javascript file
`cd-table--card.js` necessary to change the column headers `th` to the value of `data-content` attribute, which are
displayed as a pseudo element on each `<td>`. This has accessibility implications [CD-219](https://humanitarian.atlassian.net/browse/CD-219)
and this display is not very effective for data that needs to be compared or sorted, or when there is a table footer
with sums from the table data.

`.cd-table--responsive.css` and provides rules for parent containers and the wrapper div necessary for the horizontal
scrolling when the table's data exceeds the available space. There is a javascript file needed `cd-table--responsive.js`
that detect the width of the table and the available space. On narrow viewports, when the table width exceeds the
available space, a horizontal scroll on the wrapper div appears. When the wrapper div includes the `data-cd-scrollable`
attribute, the `tabindex` attribute is added and set to 0, and the role of "group" is added.
A message to prompt scrolling displays in the table caption element, which means **a caption element is required**.
The table caption has an ID that matches the `aria-labelledby` attribute added to the table's wrapping div.
To customise the text for the message, add it as a value to the `data-cd-scrollable` attribute on the table's wrapper
div.

See https://inclusive-components.design/data-tables for background.

@TODO expand this component to include a variant for when the data is too dense to display well on narrow viewports
even with the horizontal scroll. In that case, we could output the table data as a definition list instead. See [CD-219](https://humanitarian.atlassian.net/browse/CD-219) for more.

## Caveats
For `cd-table--responsive` the table element must have a wrapping div `cd-table-container` for the horizontal scrolling,
and for the javascript needed to add the tabindex and role. For the scroll prompt to appear, the table must have a
caption element.
Sometimes the wrapper div with the `overflow-x: auto` and the table at 100% within it creates a horizontal scroll on the
body or main page element, depending on the surrounding layout and existing CSS rules. The `.cd-table--responsive.css`
contains a rule to apply an `overflow: hidden` to many parent divs and body (based on the common_design layout markup).
This may cause issues with certain elements like a sticky header or `cd-bleed` component. It it likely specific
adjustments will need to be made to the table-related rules per implementation.

The styles require attributes and additional markup so if this component is used with a WYSIWYG, the allowed HTML tags
need to reflect this eg.
```html
<table class=""><caption id class=""><div aria-labelledby data-cd-scrollable class="">
```
And editors may need to manually add a wrapping div and attributes to the output after inserting a table via the
WYSIWYG, depending on the variant.

### Variants
```
cd-table--responsive
cd-table--card
cd-table--row-numbers
cd-table--striped
```
