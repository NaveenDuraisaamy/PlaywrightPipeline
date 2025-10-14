import { test, expect } from '@playwright/test';

test('Navigations', async ({ page }) => {

await page.goto("https://playwright.dev/");
await page.reload();
await page.goBack();
await page.goForward();
await page.waitForLoadState("networkidle"); // load completed

});