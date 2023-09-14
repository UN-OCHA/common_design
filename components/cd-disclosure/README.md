# CD Disclosure

A mechanism to show or hide content with a button. Useful for displaying a portion of the content (like a Teaser) while allowing those interested to expand and read the full details.

**Minimum requirements**

- `.cd-disclosure` classname. JS will consider any element with this classname to be collapsible content.

**Optional attributes**

- `id`: Set your own custom HTML ID in Twig if you wish. The JS will find it and automatically configure the button to control that ID. If you omit the ID, JS will generate a random one in the form `cd-disclosure--XXXXXXXX`
- `[data-cd-disclosure-show-by-default]`: set this attribute to `true` if you want the content to show by default, but still create a button that can toggle its visibility. If the attribute is omitted or set to anything except `true` then JS will default to `false`
- `[data-cd-disclosure-label]`: provide a label for the button. You can combine this with Twig's translation filter to generate multilingual buttons based on page context and available UI String Translations inside Drupal.
- `[data-cd-disclosure-insert]`: set this attribute to `after` to have the button inserted after your content. If you omit this attribute or supply any value besides `after` it will default to "before".
