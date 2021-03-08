// run `HEADLESS="false" SLOWMO=1000 npm run e2e`

module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
    slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
    devtools: false
  }
}
