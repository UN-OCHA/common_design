module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    layers: ['components', 'utilities'],
    content: ['./templates/**/*.html.twig', './components/**/*.html,', './components/**/*.html.twig']
  },
  theme: {
    extend: {
      outline: {
        ocha: ['2px solid var(--cd-bright-blue)', '2px']
      }
    }
  },
  variants: {},
  plugins: [],
}
