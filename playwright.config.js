// @ts-check
const { devices } = require("@playwright/test");

// This is a sample config for what users might be running locally
const config = {
  testDir: './tests',
  testMatch: '**/test*.js',

    // Use globalSetup & globalTearedown only if browserstack.local = true
    globalSetup: require.resolve("./global-setup"),
    globalTeardown: require.resolve("./global-teardown"),

  /* Maximum time one test can run for. */
  timeout: 90 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* tests in parallel */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'line',
/* Configure projects for major browsers */
projects: [
  {
    name: "chrome@latest:Windows 11@browserstack",
    use: {
      browserName: "chromium",
      channel: "chrome",
    },
  },
  {
    name: "playwright-webkit@latest:OSX Ventura@browserstack",
    use: {
      browserName: "chromium",
      channel: "chrome",
    },
  },
  {
    name: "chrome@Samsung Galaxy S22:13@browserstack-mobile",
    use: {
      baseURL: "https://www.bstackdemo.com/",
      browserName: "chromium",
      channel: "chrome",
    },
  },
],
};

module.exports = config;
