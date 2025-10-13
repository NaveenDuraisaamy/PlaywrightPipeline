import { test } from "@playwright/test";

test("Mouse actions demo", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Right-click (context click)
  await page.click("//button[text()='Copy Text']", { button: 'right' });

  // Double-click
  await page.dblclick("//button[text()='Copy Text']");
});
