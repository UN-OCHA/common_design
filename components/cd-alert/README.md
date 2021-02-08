# Alert

## Purpose and Usage
Provides feedback messages for user actions and site-wide notifications.

- title
- message
- SVG icon

All elements are optional.

Title and message are width-restricted using `cd-max-width` on said elements.

Message can contain `<p>` and `<ul>` elements.

## Caveats
Uses SVG icon as an element in the markup, not a background image.

### Variants

```
.cd-alert // default
.cd-alert--error
.cd-alert--warning
.cd-alert--status

```
