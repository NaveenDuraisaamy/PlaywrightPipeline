import { test,Page, expect, chromium } from "@playwright/test";

test('Window Handling',async({})=>{

    const browser= await chromium.launch({});
    const context= await browser.newContext();
    const page=await context.newPage(); 

    await page.goto("https://testautomationpractice.blogspot.com/",{waitUntil:"load"});

    const [newPage]= await Promise.all([
        context.waitForEvent("page"),
        page.click("//button[text()='New Tab']")
    ]);

    await newPage.waitForLoadState();

    console.log("New title :",await newPage.title());
    await newPage.close();
    console.log("New title :",await page.title());

    
});