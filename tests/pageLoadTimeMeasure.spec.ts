import { test, expect, chromium } from "@playwright/test";

test('Page Load Time', async ({page}) => {

const start = Date.now();
await page.goto('https://testautomationpractice.blogspot.com/');
console.log('Load time:', Date.now() - start);

});
