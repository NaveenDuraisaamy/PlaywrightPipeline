import { test } from '@playwright/test';

test('Slider', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const first = page.locator('//div[@id="slider-range"]//descendant::span[1]');
    const second= page.locator('//div[@id="slider-range"]//descendant::span[2]');
    await page.pause();
    // Get slider bounding box
    const boxOne = await first.boundingBox();
    if (boxOne) {
        // Drag handle to 80% position
        await page.mouse.move(boxOne.x + boxOne.width / 2, boxOne.y + boxOne.height / 2);
        await page.mouse.down();
        await page.mouse.move(boxOne.x + boxOne.width + 50, boxOne.y + boxOne.height / 2); // adjust distance
        await page.mouse.up();
    }
const boxTwo = await second.boundingBox();
    if (boxTwo) {
        // Drag handle to 80% position
        await page.mouse.move(boxTwo.x + boxTwo.width / 2, boxTwo.y + boxTwo.height / 2);
        await page.mouse.down();
        await page.mouse.move(boxTwo.x + boxTwo.width + 30, boxTwo.y + boxTwo.height / 2); // adjust distance
        await page.mouse.up();
    }
});
