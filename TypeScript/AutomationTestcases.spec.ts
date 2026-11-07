import { BrowserContext, Page, test, expect } from '@playwright/test';

test("Test Case 1: Register User", async ({ browser }) => {
    //1.Launch the browser
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    //to block adds
    await page.route(/(googleads|doubleclick|adservice|googlesyndication)/, route => route.abort());

    //2. Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com/");

    //3. Verify that home page is visible successfully
    expect(await page.title()).toContain("Automation Exercise");

    //4. Click on 'Signup / Login' button
    await page.getByText(" Signup / Login").click();

    //5. Verify 'New User Signup!' is visible
    await expect(page.locator(".signup-form h2")).toContainText("New User Signup!");

    //6. Enter name and email address
    await page.getByPlaceholder("Name").fill("Sergio Marquine");
    await page.locator(".signup-form input:nth-child(3)").fill("sergiomarquine123@gmail.com");

    //7. Click 'Signup' button
    await page.getByRole('button', { name: 'Signup' }).click();

    //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    expect(await page.locator(".login-form h2").first().textContent()).toContain("Enter Account Information");

    //9. Fill details: Title, Name, Email, Password, Date of birth
    await page.locator("#uniform-id_gender1").click();
    await page.locator("#password").fill("Sergio Marquine");
    await page.locator("#days").selectOption("29");
    await page.locator("#months").selectOption("October");
    await page.locator("#years").selectOption("2000");

    //10. Select checkbox 'Sign up for our newsletter!'
    await page.locator("#newsletter").click();

    //11. Select checkbox 'Receive special offers from our partners!'
    await page.locator("#optin").click();

    //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await page.locator("#first_name").fill("Sergio");
    await page.locator("#last_name").fill("Marquine");
    await page.locator("#company").fill("Sonic Solutions");
    await page.locator("#address1").fill("Sergio Colony");
    await page.locator("#address2").fill("Marquine Area");
    await page.locator("#country").selectOption("India");
    await page.getByLabel("state").fill("Andhra Pradesh");
    await page.getByLabel("city").fill("Tenali");
    await page.locator("#zipcode").fill("522330");
    await page.getByLabel("Mobile Number ").fill("1234567890");

    //13. Click 'Create Account button'
    await page.getByRole('button', { name: 'Create Account' }).click();

    //14. Verify that 'ACCOUNT CREATED!' is visible
    expect(await page.locator(".col-sm-9 h2").textContent()).toContain("Account Created!");

    //15. Click 'Continue' button
    await page.locator(".btn-primary").click();

    //16. Verify that 'Logged in as username' is visible
    await expect(page.locator("li:nth-child(10) a:nth-child(1)")).toBeVisible();

    //17. Click 'Delete Account' button
    await page.locator("a[href='/delete_account']").click();

    //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    expect(await page.locator(".col-sm-9 h2").textContent()).toContain("Account Deleted!");
    await page.locator(".btn-primary").click();
})