import { test,Page, expect } from "@playwright/test";

test('Radio Handle',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const radios= await page.locator("//input[@type='radio']");
    const count= await radios.count();

    for(let i=0;i<count;i++){
        const value=await radios.nth(i).getAttribute('value');

        if(value=="male"){
            await radios.nth(i).click();
            console.log(`Clicked on Radio : ${value}`);
            break;
        }
    }
   
});