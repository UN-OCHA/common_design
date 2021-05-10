# Table

## Purpose and Usage
HTML table for displaying simple tabular data. 

On narrow viewports, when the table width exceeds the available space, a horizontal scroll on the wrapping div appears, the tabindex attribute is added and set to 0, and the role of "group" is added.
See https://inclusive-components.design/data-tables

The component styles use `data-` attribute selectors for styling specific column data, as an example of how specific data can be targeted.

@TODO add a message to prompt scrolling.

@TODO expand this component to include a variant for when the data is too dense to display well on narrow viewports
even with the horizontal scroll. In that case, we could output the table data as a definition list instead. See CD-219 for more.

## Caveats
The table element must have a wrapping div `cd-table-container` for the horizontal scrolling and javascript is needed to
add the tabindex and role.
Sometimes this creates a horizontal scroll on the body, depending on the surrounding layout and existing CSS rules. 
We want to avoid using overflow rules on the body if possible.

### Variants

```
cd-table--row-numbers
cd-table--striped

```
