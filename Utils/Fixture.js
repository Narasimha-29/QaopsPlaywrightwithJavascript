const base = require('@playwright/test')
const {APIUtils} = require('./APIUtils.js');
const {request} = require('@playwright/test');

const loginCredPlaylod = {userEmail: "y19ec1367@gmail.com", userPassword: "Narasimha@123"};
const orderPlaylod = {orders: [{country: "India", productOrderedId: "6960ea76c941646b7a8b3dd5"}]};

const customtest = base.test.extend({
    authenticatedPage: async ({ browser }, use) => {
        const context = await browser.newContext(); // Opening new instances like incognite
        const page = await context.newPage(); // opening new page
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login"); //Navigating actual page
        const email = "y19ec1367@gmail.com";
        //Log in
        const UserEmail = page.locator("#userEmail");
        await UserEmail.fill(email);
        await page.locator("#userPassword").fill("Narasimha@123");
        await page.locator("#login").click();
        await page.waitForLoadState('networkidle');
        await use(page);
    },

    createOrder: async({},use) => {
        const apiContext = await request.newContext();
        const ApiUtils = new APIUtils(apiContext,loginCredPlaylod);
        const response = await ApiUtils.createOrder(orderPlaylod);
        await use(response);
    },

    testdatafororder : {
        productName : 'ADIDAS ORIGINAL'
    }
})
module.exports = {customtest};