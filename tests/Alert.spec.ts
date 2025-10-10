
import{Page,test} from '@playwright/test';


test('Alarm',async({page})=>{

    
    await page.goto('https://testautomationpractice.blogspot.com/');
   
   await page.waitForTimeout(2000);

   //Accept
   page.once('dialog',dialog=>{
    console.log("Accept the Alert: ",dialog.message());
    dialog.accept();
   });
    await page.locator("#alertBtn").click();

    //Dismiss
    page.once('dialog',dialog=>{
    console.log("Dismiss the Alert: ",dialog.message());
    dialog.dismiss();
   });
    await page.locator("#confirmBtn").click();

    //Prompt
    page.once('dialog',dialog=>{
    console.log("Prompt the Alert: ",dialog.message());
    console.log("Default Value:", dialog.defaultValue());
    dialog.accept("Hi Naveen D");
   });
   await page.locator("#promptBtn").click();
   const msg= await page.locator("//p[@id='demo']").textContent();
   console.log(msg);
   
});