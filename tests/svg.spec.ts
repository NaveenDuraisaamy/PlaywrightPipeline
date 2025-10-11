import { test,expect } from '@playwright/test';

test('SVG Handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

const circle = page.locator(".svg-container circle");
const rectangle = page.locator(".svg-container rect");
const polygon = page.locator(".svg-container polygon");


// Hover
await circle.hover();

// Check visibility
await expect(circle).toBeVisible();
await expect(rectangle).toBeVisible();
await expect(polygon).toBeVisible();

// Get an attribute
const fillRed = await circle.getAttribute("fill");
const fillGreen = await rectangle.getAttribute("fill");
const fillBlue = await polygon        .getAttribute("fill");
console.log("Circle color:", fillRed,fillGreen,fillBlue);

});