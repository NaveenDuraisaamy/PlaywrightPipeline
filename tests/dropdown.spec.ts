import { test,Page, expect } from "@playwright/test";

test.skip('DropDown',async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");

await page.locator("#country").click();

//By Value
await page.locator("#country").selectOption({value:'india'});
await page.waitForTimeout(2000);

//By Label
await page.locator("#country").selectOption({label:'France'});
await page.waitForTimeout(2000);

// By Index
await page.locator("#country").selectOption({index:1});
    
//Multiple Drop-down
const colors=await page.locator("#colors");
await colors.waitFor({state:"visible"});
await colors.selectOption(["red","blue","yellow"]);
});