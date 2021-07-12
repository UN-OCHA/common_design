import env from './_env'

describe('DebugEnv', () => {
  it('should output the environment that Jest is testing', () => {
    console.log('E2E baseUrl: ', env.baseUrl);
    expect(true).toBe(true);
  })
});
