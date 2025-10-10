import { test,Page, expect } from "@playwright/test";

test('Multiple Window Handling',async({browser})=>{

const context=await browser.newContext();
const page= await context.newPage();

await page.goto("https://leafground.com/window.xhtml",{waitUntil:"load"});

//Open Multiple
const [naveen]= await Promise.all([
    context.waitForEvent("page"),
    page.click("//button[@id='j_idt88:j_idt91']")
]);
await naveen.waitForLoadState();
console.log("New Tab Title :",await naveen.title());

//Delay window
const [kamali]= await Promise.all([
    context.waitForEvent("page"),
    page.click("//button[@id='j_idt88:j_idt95']")
]);
await kamali.waitForLoadState();
console.log("Delay Tab Title :",await kamali.title());

//Total Windows
const Allpages=await context.pages();
console.log("Pages length :",Allpages.length);

for(const p of Allpages){
    console.log("Tab Title :",await p.title());
}
await page.bringToFront();
console.log("Parent Page :",await page.title());

});