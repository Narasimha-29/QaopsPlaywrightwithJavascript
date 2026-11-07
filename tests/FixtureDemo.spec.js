const{test, expect, request} = require('@playwright/test');
const{customtest} = require('../Utils/Fixture.js');

customtest("Fixture Demo", async({authenticatedPage,createOrder,testdatafororder}) =>
{
    //Login to Application/ Create order and verify if the order is created from history page
    authenticatedPage.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await authenticatedPage.locator("button[routerlink*='myorders']").click()
    await authenticatedPage.locator("tbody").waitFor();
    await expect(authenticatedPage.getByText(createOrder.orderId)).toBeVisible();
    console.log(testdatafororder.productName);
})