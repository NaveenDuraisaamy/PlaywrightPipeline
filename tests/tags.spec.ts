import { test, expect } from "@playwright/test";

test.describe('Demo Application @api',()=>{

  test("Login functionality @login", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const name = await page.title();
    await expect(name).toBe("Automation Testing Practice");
  });

  test("Login functionality @smoke", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const name = await page.title();
    await expect(name).toBe("Automation Testing Practice");
  });

  test("Regression functionality @regression", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const name = await page.title();
    await expect(name).toBe("Automation Testing Practice");
  });

  test("Sanity functionality @sanity", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const name = await page.title();
    await expect(name).toBe("Automation Testing Practice");
  });

});
