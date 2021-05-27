const E2E_MODE = process.env.npm_lifecycle_event === 'e2e';

const config = {
  verbose: true,
  preset: 'babel-jest',
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};

// E2E requires a special preset
config.preset = (E2E_MODE) ? 'jest-puppeteer' : '';

// We output coverage on unit-tests, not E2E
config.collectCoverage = !E2E_MODE;

module.exports = config;
