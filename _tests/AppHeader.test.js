import env from './env';

jest.setTimeout(env.timeout);

describe('AppBar', () => {
  beforeAll(async () => {
    await page.goto(`https://reports.unocha.org`);
  });

  it('should expand when clicked', async () => {
    const toggle = await page.$('label[for="app-bar__toggle"]');
    await toggle.click();
    const className = await page.$eval('.app-bar', el => el.className);
    await expect(className).toMatch('is--expanded');
  });

  it('should contain up to five offices in the Latest Updates section', async () => {
    const appBarListLimit = 5;
    const appBarListLength = await page.$$eval('.app-bar .sitrep-group', nodeList => nodeList.length);
    await page.waitForSelector('.app-bar .sitrep-group', {timeout: 10000}).then(async () => {
      const appBarListLength = await page.$$eval('.app-bar .sitrep-group', nodeList => nodeList.length);
      await expect(appBarListLength).toBeLessThanOrEqual(appBarListLimit);
    });
  });

  it('should allow navigation to a SitRep', async () => {
    const firstSitrepSelector = '.app-bar .sitrep-group:first-child .sitrep a[href]';
    const expectedUrl = await page.$eval(firstSitrepSelector, el => el.href);
    await Promise.all([
      // Wait until `networkidle0` to be sure AppBar got populated.
      page.waitForNavigation({waitUntil: 'networkidle0'}),
      page.click(firstSitrepSelector),
    ]).then(async () => {
      const currentUrl = await page.url();
      await expect(currentUrl).toBe(expectedUrl);
    });
  });
});
