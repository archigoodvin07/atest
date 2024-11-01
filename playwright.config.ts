import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Папка, де зберігаються ваші тести
  timeout: 30000,     // Максимальний час виконання тесту
  retries: 2,         // Кількість повторів у разі невдачі
  reporter: 'html',   // Вихідний формат звітування
  use: {
    headless: true,   // Запуск браузера в headless-режимі
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
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
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
});