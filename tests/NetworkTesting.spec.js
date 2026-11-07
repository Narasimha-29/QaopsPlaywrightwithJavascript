const { test, expect, request } = require('@playwright/test')
const { APIUtils } = require('../Utils/APIUtils')
const loginCredPlaylod = { userEmail: "y19ec1367@gmail.com", userPassword: "Narasimha@123" };
const orderPlaylod = { orders: [{ country: "India", productOrderedId: "6960ea76c941646b7a8b3dd5" }] };
const fakePlayLoadOrder = { data: [], message: "No Orders" };

let response;
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const ApiUtils = new APIUtils(apiContext, loginCredPlaylod);
    response = await ApiUtils.createOrder(orderPlaylod)

})

test("Api Testing -1", async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token)

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login"); //Navigating actual page
    await page.waitForLoadState('networkidle');

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            const response1 = await page.request.fetch(route.request());
            let body = JSON.stringify(fakePlayLoadOrder);
            route.fulfill(
                {
                    response1,
                    body,
                })
            //intercepting response - API response ->(Playwright fake the response)-> browser - render data on front end
        })

    await page.locator("button[routerlink*='myorders']").click()
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    console.log(await page.locator(".mt-4").textContent());
})