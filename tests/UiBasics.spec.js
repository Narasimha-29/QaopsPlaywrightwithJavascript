const {test, expect} = require('@playwright/test');
const { request } = require('node:http');

test("Child Window Handling",async({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='document']");
   
    const [newPage] = await Promise.all(
    [
    context.waitForEvent('page'), //Listen for any new page pending, rejected, fulfilled
    documentLink.click(),
    ]);
    const text = await newPage.locator(".red").textContent();
    const arrayList = text.split("@");
    const domain = arrayList[1].split(" ")[0];
    console.log(domain);
    await page.locator('#username').fill(domain);
    console.log(await page.locator('#username').inputValue());

});

test("Static Dropdown", async({page}) => 
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const dropDown = page.locator("select.form-control");
    const documentLink = page.locator("[href*='document']");
    await dropDown.selectOption("consult");
    await page.locator("span.radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator("span.radiotextsty").last().isChecked());
    await expect(page.locator("span.radiotextsty").last()).toBeChecked(); // Assertion
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText");

    // await page.pause();
});

test.only("Browser Test", async({browser}) =>
{
    const context = await browser.newContext(); // it will open new instance
    const page = await context.newPage();
    const password = page.locator('#password');
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body h4");
    // page.route('**/*.{jpg,png,jpeg}',route => route.abort());
    page.on('request',request => console.log(request.url()));
    page.on('response',response => console.log(response.url(),response.status()));
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title())
    await page.locator('#username').fill("rahulshettyacademy")
    await password.fill("Learning@830$3mK")
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    //Entering correct password
    await password.fill("")
    await password.fill("Learning@830$3mK2")
    await signIn.click();
    console.log(await cardTitles.nth(0).textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = (await cardTitles.allTextContents()).map(t=>t.trim());
    console.log(allTitles)

})

test("Page Test", async({page}) =>
{
    // const context = await browser.newContext(); // it will open new instance
    // const page = await context.newPage();
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
})// only will helps us to execute only this test case