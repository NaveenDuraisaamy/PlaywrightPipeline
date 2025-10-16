
import { test, expect } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('#draggable').dragTo(page.locator('#droppable'));
    const msg= await page.locator("//div[@id='droppable']//p").textContent();
    console.log("Successfully Dragged :",await msg);
    
});