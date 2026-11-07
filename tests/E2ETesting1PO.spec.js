const { test, expect } = require('@playwright/test');
const { customtest } = require("../Utils/testData")
const { POManager } = require("../PageObjectsFolder/POManager");
const dataSet = JSON.parse(JSON.stringify(require("../Utils/placeOrderDataSet.json")));

//// Array is required when you have 2 or more login credentions
for (const data of dataSet) {
    test(`E2ETesting for ${data.productName}`, async ({ browser }) => {

        const context = await browser.newContext(); // Opening new instances like incognite
        const page = await context.newPage(); // opening new page
        const products = page.locator(".card-body");
        const pomanager = new POManager(page);
        const loginpage = pomanager.getLogin();
        await loginpage.goTo();
        await loginpage.validLogin(data.userName, data.password);
        const dashboard = pomanager.getDashboard();
        await dashboard.searchProductAddCart(data.productName);
        await dashboard.navigateToCart();


        await page.locator("div li").first().waitFor();
        const bool = await page.locator(`h3:has-text("${data.productName}")`).isVisible();
        expect(bool).toBeTruthy();
        await page.locator("text=Checkout").click();
        await page.locator("[placeholder='Select Country']").pressSequentially("ind", { delay: 150 });
        const dropdown = page.locator(".ta-results");
        await dropdown.waitFor();
        const optionsCount = await dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; i++) {
            const text = await dropdown.locator("button").nth(i).textContent();
            if (text === " India") {
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }
        await expect(page.locator(".user__name [type='text']").first()).toHaveText(data.userName);
        await page.locator(".action__submit").click();
        await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
        const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
        console.log(orderID);
        await page.locator("button[routerlink*='myorders']").click();
        await page.locator("tbody").waitFor();
        const rows = page.locator("tbody tr");
        for (let i = 0; i < await rows.count(); i++) {
            const rowOrderId = await rows.nth(i).locator("th").textContent();
            if (orderID.includes(rowOrderId)) {
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }
        const orderDetailsPage = await page.locator(".col-text").textContent();
        expect(orderID.includes(orderDetailsPage)).toBeTruthy();



    });
}

customtest(`E2ETesting for Fixture`, async ({ browser,testDataforOrder }) => {

    const context = await browser.newContext(); // Opening new instances like incognite
    const page = await context.newPage(); // opening new page
    const products = page.locator(".card-body");
    const pomanager = new POManager(page);
    const loginpage = pomanager.getLogin();
    await loginpage.goTo();
    await loginpage.validLogin(testDataforOrder.userName, testDataforOrder.password);
    const dashboard = pomanager.getDashboard();
    await dashboard.searchProductAddCart(testDataforOrder.productName);
    await dashboard.navigateToCart();


    await page.locator("div li").first().waitFor();
    const bool = await page.locator(`h3:has-text("${testDataforOrder.productName}")`).isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
});