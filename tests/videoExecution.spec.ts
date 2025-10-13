import { test, expect, chromium } from "@playwright/test";

test('Record video demo', async () => {
  // 1️⃣ Launch browser
  const browser = await chromium.launch({ headless: false });

  // 2️⃣ Create context with video recording enabled
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',      // folder where videos are saved
      size: { width: 1280, height: 720 }  // optional
    }
  });

  // 3️⃣ Create new page
  const page = await context.newPage();

  // 4️⃣ Perform actions
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.fill("#name", "Naveen");
  await page.waitForTimeout(2000);

  // 5️⃣ Close context (important)
  await context.close();  // this saves the video

  await browser.close();
});
