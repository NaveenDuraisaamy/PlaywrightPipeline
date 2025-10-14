import { test, expect } from '@playwright/test';

test.skip('Elements Actions', async ({ page }) => {

await page.click("selector");
await page.dblclick("selector");
await page.fill("selector", "text value");
await page.type("selector", "typing text");
await page.press("selector", "Enter");
await page.check("selector");
await page.uncheck("selector");
await page.selectOption("selector", "value"); // dropdown
await page.hover("selector");
await page.focus("selector");

});