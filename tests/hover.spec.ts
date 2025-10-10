import { test, expect } from "@playwright/test";

test('Mouse Hover', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Locate the menu item you want to hover
  const menuItem = page.locator("//div[@class='dropdown']");

  // Perform mouse hover
  await menuItem.hover();
  console.log("Hovered to Point Me!");

  // Optional: Interact with a submenu that appears after hover
  const subMenuItem =await page.locator("//div[@class='dropdown-content']//a[text()='Mobiles']");
  const text=await subMenuItem.textContent();
  console.log("Sub Menus :",await text);

  await subMenuItem.click();
});
