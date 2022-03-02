# Form

## Purpose and Usage
CSS-only component for basic form element styles.
The current approach is defaulting to browser styles with some CD styles added over
time as we work on consistency with other properties (RW, HID).
This means we don't expect it to look the same across every browser.

Also endeavour to keep this devoid of rules that have implication to layout,
where possible.

This can expand as needed. Currently, there are generic and Drupal-specific
selectors.

@TODO spinner as component.
@TODO reinstate webkit search cancel button (currently disabled in normalise.css line 366)

## Caveats
This component uses the `cd-flow` component for vertical rhythm.
The base theme provides some template overrides to add classes to Drupal forms
There is special styling and spacing for the Drupal user pages.
The `--cd-flow-space` variable value should be adjusted as needed.
e.g.

```css
/* Form styles for Drupal User forms */
.cd-form--user {
  --cd-flow-space: 3rem;
}

```

### Variants

```
none

```
