const {test,expect} = require('@playwright/test');

test('Sceenshot & Visual Comparision',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#displayed-text').screenshot({path: 'PartialScreenshot.png'})
    await page.locator('#hide-textbox').click();
    await page.screenshot({path:'Screenshot.png'});
    await expect(page.locator('#displayed-text')).toBeHidden();

})

test.only('Visual Check',async({page})=>
{
    await page.goto("https://google.com");
    expect (await page.screenshot()).toMatchSnapshot('Practicepage.png');
})