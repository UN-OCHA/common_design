import env from './_env'

describe('SearchDropdown', () => {
  beforeAll(async() => {
    await page.goto(env.baseUrl);
  });

  it('should expand when clicked', async() => {
    const toggle = await page.$('.cd-search__btn');
    await toggle.click();
    const hidden = await page.$eval('.cd-search__form', el => el.dataset.cdHidden);
    await expect(hidden).toMatch('false');
  });
});
