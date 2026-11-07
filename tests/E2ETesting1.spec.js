const {test, expect} = require('@playwright/test')

test('E2ETesting',async({browser}) => 
{
    const context = await browser.newContext(); // Opening new instances like incognite
    const page = await context.newPage(); // opening new page
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login"); //Navigating actual page
    const email = "y19ec1367@gmail.com";
    const productName = "iphone 13 pro";
    const products = page.locator(".card-body");
    //Log in
    const UserEmail = page.locator("#userEmail");
    await UserEmail.fill(email);
    await page.locator("#userPassword").fill("Narasimha@123");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle'); // waiting to load all network calls
    const titles = await page.locator(".card-body h5").allTextContents();
    console.log(titles);
    const count = await products.count();
    for(let i=0;i<count;i++)
    {
        if(await products.nth(i).locator("b").textContent() === productName)
        {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('iphone 13 pro')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder='Select Country']").pressSequentially("ind",{delay:150});
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for(let i=0;i<optionsCount;i++)
    {
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text === " India")
        {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderID);
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = page.locator("tbody tr");
    for(let i=0;i<await rows.count();i++)
    {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if(orderID.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderDetailsPage = await page.locator(".col-text").textContent();
    expect(orderID.includes(orderDetailsPage)).toBeTruthy();



});