import env from './_env'

describe('MainMenuDropdown', () => {
  beforeAll(async() => {
    await page.goto(env.baseUrl);
  });

  it('should expand when clicked', async() => {
    const toggle = await page.$('.menu-item--expanded');
    await page.setViewport({ width: 1280, height: 800 });
    await toggle.click();
    const hidden = await page.$eval('.cd-nav-level-2__dropdown', el => el.dataset.cdHidden);
    await expect(hidden).toMatch('false');
  });
});
