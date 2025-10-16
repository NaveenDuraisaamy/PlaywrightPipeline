import { test,Page,devices, chromium, firefox, webkit } from '@playwright/test';

test('Cross Browser',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    // Chromium
await chromium.launch();
// Firefox
await firefox.launch();
// WebKit
await webkit.launch();
})

