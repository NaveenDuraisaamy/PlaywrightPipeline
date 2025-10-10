import { test, expect } from "@playwright/test";

test('Frame Handling', async ({ page }) => {
  await page.goto("https://www.hyrtutorials.com/p/frames-practice.html", { waitUntil: "load" });

  // Wait for the frame to load
  const frame = page.frame({ url: "https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html"});
  if (!frame) {throw new Error("Frame not found");}

  // Locate the button inside the frame
  const buttonLocator = frame.locator("//select[@id='course']");
  
  // Get the text content
  const text = await buttonLocator.textContent();
  console.log("Frame Text :", text);

  //All Frames
  const AllFrames= await page.frames();
  console.log("All Frames :",AllFrames.length);
  
  for(const A of AllFrames){
    console.log("Frame URL",await A.url());
    
  }
});