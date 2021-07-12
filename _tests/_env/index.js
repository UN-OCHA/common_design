//
// Provide config for any environment here. It will be loaded dynamically based
// on the process.env.NODE_ENV when it runs. Defaults to `local`
//
const environments = {
  'local': {
    baseUrl: 'https://commondesign.test',
    testTimeout: 10000,
  },
  'travis': {
    baseUrl: 'http://127.0.0.1:8080',
    testTimeout: 120000,
  },
  'production': {
    baseUrl: 'https://web.brand.unocha.org',
    testTimeout: 10000,
  },
};

const environmentExists = typeof environments[process.env.NODE_ENV] !== 'undefined';
const env = environmentExists ? environments[process.env.NODE_ENV] : environments['local'];

module.exports = env;
