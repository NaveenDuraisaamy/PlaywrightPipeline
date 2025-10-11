import { test,expect } from '@playwright/test';

test('Shadow Elements', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

      await page.pause();
      await page.locator('#shadow_host >> input[type="text"]').fill('Naveen');
      //CheckBox
      await page.locator('#shadow_host >> input[type="checkbox"]').check();

      //Link
      await page.locator('#shadow_host >> a').click();

      console.log("Navigated Page Title :",await page.title);
      
});

