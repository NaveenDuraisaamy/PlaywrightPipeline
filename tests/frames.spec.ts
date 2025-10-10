import { test, expect } from "@playwright/test";

test('Frame Handling', async ({ page }) => {
  await page.goto("https://www.hyrtutorials.com/p/frames-practice.html", { waitUntil: "load" });

  //All Frames
  const AllFrames= await page.frames();
  console.log("All Frames :",AllFrames.length);
  
  for(const A of AllFrames){
    console.log("Frame URL",await A.url());
    
  }
});