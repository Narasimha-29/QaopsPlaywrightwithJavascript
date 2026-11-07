const {test,expect} = require('@playwright/test');
const { url } = require('node:inspector');

test("Security Test", async({browser}) =>
{
    const context = await browser.newContext(); // Opening new instances like incognite
    const page = await context.newPage(); // opening new page
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login"); //Navigating actual page
    const email = "y19ec1367@gmail.com";
    //Log in
    const UserEmail = page.locator("#userEmail");
    await UserEmail.fill(email);
    await page.locator("#userPassword").fill("Narasimha@123");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle'); // waiting to load all network calls
    await page.locator(".card-body h5").first().waitFor();
    await page.locator("button[routerlink*='myorders']").click()
    
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({url:"https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6ac6fcf52be7a4bc2b931abc"})
    )
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");


})