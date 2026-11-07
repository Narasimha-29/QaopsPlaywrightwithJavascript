const {test} = require("@playwright/test");

test("Alert Popups",async({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.getByPlaceholder("Enter Your Name").fill("Sergio");
    await page.pause();
    page.on('dialog',dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
    const frame = page.frameLocator("#courses-iframe");
    await frame.locator("li a[href*='lifetime-access']:visible").click();
    const checkText = await frame.locator(".text h2").textContent();
    console.log(checkText.split(" ")[1]);
})