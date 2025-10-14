
// import { test, expect } from '@playwright/test';

// test('FileUpload', async ({ page }) => {

//     await page.goto("https://testautomationpractice.blogspot.com/");

//     //Single File
//     await page.locator('#singleFileInput').setInputFiles("C:\\Users\\navee\\Downloads\\New Text Document.txt");
//     await page.locator("//button[text()='Upload Single File']").click();
//     const msgOne= await page.locator("//p[@id='singleFileStatus']").textContent();
//     console.log("Single Fakw Path :",msgOne);
    
//     //Multiple File
//       await page.locator('#multipleFilesInput').setInputFiles(["C:\\Users\\navee\\Downloads\\New Text Document.txt","C:\\Users\\navee\\Downloads\\Naveen.txt"]);
//     await page.locator("//button[text()='Upload Multiple Files']").click();
//     const msgTwo= await page.locator("//p[@id='multipleFilesStatus']").textContent();
//     console.log("Multiple Fakw Path :",msgTwo);
// });