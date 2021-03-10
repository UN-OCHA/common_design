import env from './env';

jest.setTimeout(env.timeout);


describe('FooterLinks', () => {
  beforeAll(async () => {
    await page.goto(`${env.baseUrl}`);
  });

  it('should contain specific links in the Footer menu', async () => {
    const footerMenuItems = [
      'Privacy',
      'Terms of Use'
    ];
    const footerMenuItemsHref = [
      'http://www.un.org/en/sections/about-website/privacy-notice/',
      'http://www.un.org/en/sections/about-website/terms-use/'
    ];
    const footerLinks = await page.$$eval('.cd-footer ul a', text => { return text.map(text => text.textContent).slice(0, 2) });
    const footerLinksHref = await page.$$eval('.cd-footer ul a', anchors => { return anchors.map(anchor => anchor.href).slice(0, 2) });
    // console.log(footerLinks);
    // console.log(footerLinksHref);
    await expect(footerLinks).toEqual(footerMenuItems);
    await expect(footerLinksHref).toEqual(footerMenuItemsHref);
  });
});
