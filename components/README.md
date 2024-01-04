# Single Directory Components

Each subdir in the `components` folder is a [Single Directory Component][sdc].

These can be **directly called** within your sub-theme out of the box, as long as your sub-theme uses the CD as its parent-theme.

Some general conventions are listed below. Be sure to read the individual README files for each component when you use them. Each one might have its own quirks so do read carefully when implementing.

  [sdc]: https://www.drupal.org/project/sdc

## General Guidelines

As a rule, make the SDC template as simple as possible. That means:

- Use simple, clearly named values as your template properties or blocks.
- Never translate strings inside the SDC template. Translation should always be done when invoking the SDC.
- Never expect specific field names to be used, e.g. `field_image` — instead, that data should be set as individual properties/blocks when invoking the SDC.
