import { test as base } from '@playwright/test';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await page.goto('https://example.com/login');
    await page.fill('#username', 'Admin');
    await page.fill('#password', 'admin123');
    await page.click('#login');
    await use(page);
  }
});
