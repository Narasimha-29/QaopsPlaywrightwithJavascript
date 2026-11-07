const {test,expect} = require("@playwright/test");

test("Special Locators",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("Sergio@123");
    await page.getByRole("button",{name: "Submit"}).click();
    expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
    await page.getByRole("link",{name: "Shop"}).click();
    await page.locator(".card").filter({hasText :"Nokia Edge"}).getByRole("button").click();
})