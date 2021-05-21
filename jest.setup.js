/**
 * This file is run every __FREQUENCY__ in order to provide setup/defaults to
 * each test automatically.
 *
 * The following globals are available:
 * - jest
 * - page
 */
import env from './_tests/_env';

jest.setTimeout(env.testTimeout);
page.setDefaultNavigationTimeout(0);
