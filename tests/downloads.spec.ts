import { test, Page } from "@playwright/test";

test.skip("Download", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/download");
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.click("//a[@href='download/1760349261083_sample-text-file.txt']"),
  ]);
  console.log(await download.path());
  await download.saveAs("downloads/file.pdf");
});
