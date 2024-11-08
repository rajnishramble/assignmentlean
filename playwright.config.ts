import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: false, // Set to false to see the browser in action
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true, // useful for non-secure sites
    screenshot: 'only-on-failure', // Take screenshots on test failure
    video: 'retain-on-failure' // Record video on test failure
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report' }]
  ],
});
