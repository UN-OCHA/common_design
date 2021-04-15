import env from './_env';

jest.setTimeout(env.timeout);

describe('MobileMenu', () => {
  beforeAll(async () => {
    await page.goto(`${env.baseUrl}`);
  });

  it('should expand when clicked', async () => {
    const toggle = await page.$('.cd-nav__btn');
    await toggle.click();
    const hidden = await page.$eval('.cd-site-header__nav', el => el.dataset.cdHidden);
    await expect(hidden).toMatch('false');
  });
});
