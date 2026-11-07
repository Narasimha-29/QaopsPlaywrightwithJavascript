const {test, expect} = require('@playwright/test')

test("Waits Test", async({browser}) =>
{
    const context = await browser.newContext(); // it will open new instance
    const page = await context.newPage();
    const password = page.locator('#password');
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body h4");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title())
    await page.locator('#username').fill("rahulshettyacademy")
    await password.fill("Learning@830$3mK2")
    await signIn.click();

    // console.log(await cardTitles.nth(0).textContent());
    // console.log(await cardTitles.nth(1).textContent());
    // await page.waitForLoadState('networkidle');
    await page.locator(".card-body h4").first().waitFor();
    const allTitles = (await cardTitles.allTextContents()).map(t=>t.trim());
    console.log(allTitles)

})
