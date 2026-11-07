const {test, expect} = require("@playwright/test");

test("Dynamic Search", async({page}) =>
{
    //1.Open the home page and verify all product cards load (default count: 30 items).
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
    const productsCount = await page.locator(".product .product-name").count();
    expect(30).toStrictEqual(productsCount);

    //2.Type "Tomato" into the search box.
    await page.locator(".search-keyword").fill("Tomato");
    //3.Assert that the product list immediately narrows down to 1 visible card.
    await expect(page.locator(".product .product-name")).toHaveCount(1);
    //4.Assert the visible product title contains "Tomato - 1 Kg"
    await expect(page.locator(".product .product-name")).toContainText("Tomato");
    //5.Clear the search input and verify that the count restores to 30 items.
    await page.locator(".search-keyword").clear();
    const resotedProductsCount = await page.locator(".product .product-name").count();
    expect(30).toStrictEqual(resotedProductsCount);

});