# Bleed

## Purpose and Usage
Enables an element to exceed its containing bounds and expand to fit the width of the viewport.

Tested with cd-hero and cd-banner components. In theory, any container can be made full width, 
regardless of its content.

## Caveats
To prevent the scroll on IE11 `overflow-x: hidden` is set on the body element.

### Variants

```
.cd-bleed
.cd-bleed--background-only

```
