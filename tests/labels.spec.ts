import { test,expect } from '@playwright/test';

test('Label', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const text=await page.locator("label#samsung").textContent();
    console.log("Label :",text);
    
});

