const {test, expect} = require('@playwright/test')

test("E2E Purchase Flow",async({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    //1. Navigate to URL
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
    //2. Search for "ber"
    await page.locator(".search-keyword").pressSequentially("ber",{delay:150});
    const waitForItems =  page.locator(".products h4");
    await expect(waitForItems).toHaveCount(3);
    const cartitems = await waitForItems.allTextContents();
    console.log(cartitems);
    //3.Locate the "Cucumber - 1 Kg" card, increase quantity to 3, and click Add to Cart. 
    for(let i=0;i<cartitems.length;i++)
    {
        const filteredCart = await page.locator(".products h4").nth(i).textContent();
        if(filteredCart.includes("Cucumber"))
        {
            for(let j=0;j<2;j++)
            {
                await page.locator(".products .increment").first().click();
            }
            await page.locator(".product-action button").first().click();
        }
    }
    //4.Find the "Raspberry - 1/4 Kg" card and click Add to Cart directly.
    const RaspberryCard = cartitems.filter(item=>item.includes("Raspberry"))
    if(RaspberryCard)
    {
        await page.locator(".product-action button").nth(1).click();
    }
    const itemCount = await page.locator("tbody tr:nth-child(1) td:nth-child(3)").textContent();
    const totalAmount = await page.locator("tbody tr:nth-child(2) td:nth-child(3)").textContent();
    //Click the Cart icon in the header and verify:
    // Item count equals 2.
    // Total calculated amount matches the sum of selected item
    await page.locator(".cart-icon").click();
    //body > div:nth-child(2) > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > p:nth-child(1)      
    expect(await page.locator(".cart-preview .cart-item .product-name").first().textContent()).toContain("Cucumber");
    expect(await page.locator(".cart-preview .cart-item .product-name").last().textContent()).toContain("Raspberry");
    
    const amountoffirst = await page.locator(".cart-preview .cart-item .product-total .amount").first().textContent();
    const totalamountoffirst = parseInt(amountoffirst);
    const amountofsecond = await page.locator(".cart-preview .cart-item .product-total .amount").last().textContent();
    const totalamountofsecond = parseInt(amountofsecond);
    const totalCalculatedAmount = totalamountoffirst + totalamountofsecond;
    expect(totalAmount.includes(totalCalculatedAmount)).toBeTruthy();

    //Click Proceed to Checkout.
    await page.locator("text = PROCEED TO CHECKOUT").click();
    //Apply a promo code (e.g., "rahulshettyacademy"), click Apply, 
    // and assert the green confirmation message ("Code applied ..!") appears.
    await page.locator(".promoCode").fill("rahulshettyacademy");
    await page.locator(".promoBtn").click();
    expect(await page.locator(".promoInfo").textContent()).toContain("Code applied ..!");
    //Click Place Order, select a country from the dropdown (e.g., "India"),
    //  check the terms & conditions checkbox, and click Proceed.
    await page.locator("text=Place Order").click();
    await page.locator("div select").selectOption("India");
    await page.locator(".chkAgree").click();
    await page.locator("text=Proceed").click();

    //Assert the success message contains
    // "Thank you, your order has been placed successfully".
    const ThankyouText = await page.locator(".wrapperTwo span").first().textContent();
    expect(ThankyouText.trim()).toContain("Thank you, your order has been placed successfully");

    
});