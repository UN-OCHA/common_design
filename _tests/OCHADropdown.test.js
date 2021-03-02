import env from './env';

jest.setTimeout(env.timeout);

describe('Homepage', () => {
  beforeAll(async () => {
    await page.goto('https://reports.unocha.org');
  });

  it('should display the EN homepage at /', async () => {
    await expect(page).toMatch(en['Situation Reports']);
  });
});
