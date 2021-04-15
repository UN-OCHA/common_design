import env from './_env';

jest.setTimeout(env.timeout);


describe('FooterLinks', () => {
  beforeAll(async () => {
    await page.goto(`${env.baseUrl}`);
  });

  it('should contain specific links in the Footer menu', async () => {
    const footerMenuItems = [
      'Privacy',
      'Terms of use'
    ];
    const footerMenuItemsHref = [
      'https://www.un.org/en/about-us/privacy-notice',
      'https://www.un.org/en/about-us/terms-of-use'
    ];
    const footerLinks = await page.$$eval('.cd-footer ul a', text => { return text.map(text => text.textContent) });
    const footerLinksHref = await page.$$eval('.cd-footer ul a', anchors => { return anchors.map(anchor => anchor.href) });
    await expect(footerLinks).toEqual(expect.arrayContaining(footerMenuItems));
    await expect(footerLinksHref).toEqual(expect.arrayContaining(footerMenuItemsHref));
  });
});
