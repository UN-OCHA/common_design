# SDC: Snap

A component to display the Snap PDF icon. The URL and screen-reader text are configurable per website.

## Usage

Add this to a Twig template:

```twig
{{ include('common_design:snap', {
  snap_url: '/node/' ~ node.id() ~ '/pdf',
  label: 'Create PDF'|t,
}) }}
```

**Caveats:**

- The example here is from a `node--full.html.twig` template, so the `node.id()` is available.
- The example also assumes you have a route set up to automatically capture a Snap at the route `/node/XXX/pdf`. See the DSR Drupal project for an example (inside the `dsr_custom` module).

## TODOs

- Implement a "type" so that either PDF/PNG icons can be output.
- Output SVG directly so it can inherit brand colors, e.g. `--brand-primary`
