// import { test, expect } from "@playwright/test";

// // 1️⃣ describe — group of related tests
// test.describe("Test Functions", () => {

//   // 2️⃣ beforeAll — runs once before all tests
//   test.beforeAll(async ({ browser }) => {
//     console.log("🟢 Launching browser before all tests...");
//   });

//   // 3️⃣ afterAll — runs once after all tests
//   test.afterAll(async () => {
//     console.log("🔴 Closing all browser sessions after all tests...");
//   });

//   // 4️⃣ beforeEach — runs before every test
//   test.beforeEach(async ({ page }) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     console.log("➡️ Navigated to login page");
//   });

//   // 5️⃣ afterEach — runs after every test
//   test.afterEach(async () => {
//     console.log("✅ One test completed");
//   });

//   // 6️⃣ Basic test
//   test("should display login form", async ({ page }) => {
//     const form = await page.locator("#name");
//     await expect(form).toBeVisible();
//   });

//   // 7️⃣ skip — to skip temporarily
//   test.skip("This feature is not ready yet", async () => {
//     console.log("This Test case is skip");
    
//   });

//   // 8️⃣ only — to run only this test
//   test.only("login with valid credentials", async ({ page }) => {
//     console.log("This test case only run among tests.");
    
//   });

//   // 9️⃣ fixme — mark as broken (known issue)
//   test.fixme("forgot password link not working", async ({ page }) => {
//     console.log("This test has a some problem");
    
//   });

//   // 🔟 slow — increases timeout for slow test
//   test("verify login redirection is slow", async ({ page }) => {
//   test.slow();
//   await page.goto("https://testautomationpractice.blogspot.com/");
//   await expect(page).toHaveTitle("Automation Testing Practice");
// });


//   // 11️⃣ fail — mark intentionally as failing
//   test.fail("this test should fail", async () => {
//     expect(1).toBe(2);
//   });

//   // 12️⃣ step — define smaller steps inside test
//   test("verify UI with steps", async ({ page }) => {
//     await test.step("Fill username", async () => {
//       await page.fill("#username", "admin");
//     });
//     await test.step("Fill password", async () => {
//       await page.fill("#password", "wrong");
//     });
//     await test.step("Click login", async () => {
//       await page.click("button[type='submit']");
//     });
//   });

//   // 13️⃣ info() — get test metadata
//   test("print test info", async () => {
//     console.log(test.info().title);
//     console.log(test.info().project.name);
//   });

//   // 14️⃣ expect.soft — non-blocking assertion
//   test("soft assertion example", async ({ page }) => {
//     await page.goto("https://example.com/");
//     await expect.soft(page.locator("h1")).toHaveText("Wrong Heading"); // continues even if fails
//     console.log("✅ Test continues even after soft failure");
//   });

//   // 15️⃣ use — set config at test-level
//   test.use({ viewport: { width: 800, height: 600 } });
//   test("viewport test", async ({ page }) => {
//     const size = await page.viewportSize();
//     console.log(`📏 Viewport: ${size?.width}x${size?.height}`);
//   });
// });
