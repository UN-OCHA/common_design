const E2E_MODE = ['e2e', 'ci'].includes(process.env.npm_lifecycle_event);

const config = {
  verbose: true,
  preset: 'babel-jest',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['expect-puppeteer', './jest.setup.js'],
};

// E2E requires a special preset
config.preset = (E2E_MODE) ? 'jest-puppeteer' : '';

// We output coverage on unit-tests, not E2E
config.collectCoverage = !E2E_MODE;

module.exports = config;
