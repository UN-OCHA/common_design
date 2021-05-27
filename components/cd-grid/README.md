# Grid

## Purpose and Usage
Basic grid layout with CSS grid and CSS flexbox layout based on @supports queries.

Default grid is 4 columns.

The grid items are not width-restricted so with a 2 column grid, the items will span 50% of the available width.

@TODO Should cd-grid--grow should not be replaced by a class added to the grid element that should use the full width 
rather than , if that should not be a class that could be applies to any element of the grid rather than just the last
one. That would allow a header and footer span the full width inside a grid layout.
```
      .cd-grid .cd-grid-item--grow {
        flex: 1 0 100%;
        grid-column: -1/1;
        max-width: 100%;
        max-width: unset;
      }
      
```

@TODO This might be dropped in favour of more robust grid system.

## Caveats
The selectors must be added to the parent div

### Variants

```
.cd-grid--2-col
.cd-grid--3-col
.cd-grid--4-col
// Background colour on grid items.
.cd-grid--background
// Last item to span full width
.cd-grid--grow
```
