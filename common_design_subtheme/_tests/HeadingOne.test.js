import env from './_env';

describe('HeadingOne', () => {
  beforeAll(async() => {
    await page.goto(env.baseUrl);
  });

  it('should have a single heading one', async () => {
    const headingOne = await page.$$('h1')
    expect(headingOne.length).toBe(1)
  })
});
