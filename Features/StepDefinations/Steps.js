const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require("../../PageObjectsFolder/POManager");
const { expect, chromium } = require('@playwright/test');

Given('a Login to Ecommerce application with {string} and {string}', async function (userName, password) {
    this.userName = userName; // Saved to 'this' so subsequent steps can verify username
    const loginpage = this.pomanager.getLogin();
    await loginpage.goTo();
    await loginpage.validLogin(userName, password);
});

Given('Add {string} to cart', async function (productName) {
    this.productName = productName;
    const dashboard = this.pomanager.getDashboard();
    await dashboard.searchProductAddCart(productName);
    await dashboard.navigateToCart();
});

Then('Verify {string} is displayed in the cart', async function (productName) {
    await this.page.locator("div li").first().waitFor();
    const bool = await this.page.locator(`h3:has-text("${productName}")`).isVisible();
    expect(bool).toBeTruthy();
    await this.page.locator("text=Checkout").click();
});

When('Enter valid details and place the order', async function () {
    await this.page.locator("[placeholder='Select Country']").pressSequentially("ind", { delay: 150 });
    const dropdown = this.page.locator(".ta-results");
    await dropdown.waitFor();
    
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; i++) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text.trim() === "India") {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    
    await expect(this.page.locator(".user__name [type='text']").first()).toHaveText(this.userName);
    await this.page.locator(".action__submit").click();
    await expect(this.page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    
    this.orderID = await this.page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("Generated Order ID:", this.orderID);
});

Then('Verify order in present in the OrderHistory', async function () {
    await this.page.locator("button[routerlink*='myorders']").click();
    await this.page.locator("tbody").waitFor();
    
    const rows = this.page.locator("tbody tr");
    const count = await rows.count();
    for (let i = 0; i < count; i++) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (this.orderID.includes(rowOrderId.trim())) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    
    const orderDetailsPage = await this.page.locator(".col-text").textContent();
    expect(this.orderID.includes(orderDetailsPage)).toBeTruthy();

    // Clean up browser instance
    await this.browser.close();
});