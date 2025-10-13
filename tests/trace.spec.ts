import { test, expect } from "@playwright/test";

test('Record video demo', async ({ page, context }) => {
  
  // Start tracing
  await context.tracing.start({ screenshots: true, snapshots: true });

  // Navigate to the page
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  // Perform some actions (optional)
  await expect(page).toHaveTitle("Automation Testing Practice");

  // Stop tracing and save trace file
  await context.tracing.stop({ path: 'trace.zip' });
});
