// import { test, Page } from "@playwright/test";

// test("Download", async ({ page }) => {
//   await page.goto("https://practice.expandtesting.com/download");
//   const [download] = await Promise.all([
//     page.waitForEvent("download"),
//     page.click("//a[@href='download/1760228334243_Cincinatti Elevate-Aug 29.pdf']"),
//   ]);
//   console.log(await download.path());
//   await download.saveAs("downloads/file.pdf");
// });
