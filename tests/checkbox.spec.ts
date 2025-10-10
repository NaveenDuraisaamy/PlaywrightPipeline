import { test, expect } from '@playwright/test';

test('CheckBox', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

  // Locate all day checkboxes under the 'days' label
  const dayCheckboxes = page.locator("//label[@for='days']/following-sibling::div//input[@type='checkbox']");

  // Check all checkboxes
  const count = await dayCheckboxes.count();
  for (let i = 0; i < count; i++) {
    const checkbox = dayCheckboxes.nth(i);
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

  // Optional: uncheck all to reset state
  for (let i = 0; i < count; i++) {
    const checkbox = dayCheckboxes.nth(i);
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }
});
