import { test, expect, request } from '@playwright/test';

test('Check for broken links', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Create a new request context
  const apiContext = await request.newContext();

  // Get all <a> elements
   const links = await page.$$eval('#broken-links a', (anchors) =>
    (anchors as HTMLAnchorElement[]).map((a) => a.href)
  );

  console.log(`Total links found: ${links.length}`);

  for (const link of links) {
    if (!link || link.startsWith('javascript:') || link.startsWith('#')) continue; // skip non-links

    try {
      const response = await apiContext.get(link);
      const status = response.status();

      if (status >= 400) {
        console.log(`Broken link found: ${link} (Status: ${status})`);
      } else {
        console.log(`Working link: ${link} (Status: ${status})`);
      }
    } catch (error) {
      console.log(`Error accessing: ${link}`);
    }
  }

  await apiContext.dispose();
});
