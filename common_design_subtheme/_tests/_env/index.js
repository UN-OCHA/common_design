//
// Provide config for any environment here. It will be loaded dynamically based
// on the process.env.NODE_ENV when it runs. Defaults to `local`
//
const environments = {
  'local': {
    baseUrl: 'https://commondesign.test',
  },
  'travis': {
    baseUrl: 'http://127.0.0.1:8080',
  },
  'production': {
    baseUrl: 'https://web.brand.unocha.org',
  },
};

const environmentExists = typeof environments[process.env.NODE_ENV] !== 'undefined';
const env = environmentExists ? environments[process.env.NODE_ENV] : environments['local'];

console.log('⚠️  E2E baseUrl: ', env.baseUrl);

module.exports = env;
