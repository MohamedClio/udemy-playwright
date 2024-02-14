import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  globalSetup: './global-setup',
  timeout: 60000,
  retries: 0,
  testDir: 'tests/e2e',
  use: {
    headless: true,
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'off',
    storageState: './loginAuth.json',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Safari',
      use: { browserName: 'webkit' },
    },
  ],
}

export default config
