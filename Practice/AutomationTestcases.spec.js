const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs')

// test.describe.configure({mode:"parallel"})
test("@Web Test Case1: Register User", async ({ browser }) => {
    //1. Launch browser
    const context = await browser.newContext();
    const page = await context.newPage();

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

test("@Web Test Case 2: Login User with correct email and password", async ({ page }) => {
    //1. Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com/");

    //2. Verify that home page is visible successfully
    expect(await page.title()).toContain("Automation Exercise");

    //3.Click on 'Signup / Login' button
    await page.getByText(" Signup / Login").click();

    //4.Verify 'Login to your account' is visible
    await expect(page.locator(".login-form h2")).toContainText("Login to your account");

    //5.Enter correct email address and password
    await page.locator(".login-form input:nth-child(2)").fill("sergiomarquine@gmail.com");
    await page.getByPlaceholder("Password").fill("Sergio Marquine");

    //6. Click 'login' button
    await page.getByRole('button', { name: 'Login' }).click();

    //7. Verify that 'Logged in as username' is visible
    await expect(page.locator("li:nth-child(10) a:nth-child(1)")).toBeVisible();

    // //8. Click 'Delete Account' button
    // await page.locator("a[href='/delete_account']").click();

    // //9. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    // expect(await page.locator(".col-sm-9 h2").textContent()).toContain("Account Deleted!");
    // await page.locator(".btn-primary").click();

})

test("@Web Test Case 3: Login User with incorrect email and password", async ({ page }) => {
    //1. Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com/");

    //2. Verify that home page is visible successfully
    expect(await page.title()).toContain("Automation Exercise");

    //3. Click on 'Signup / Login' button
    await page.getByText(" Signup / Login").click();

    //4. Verify 'Login to your account' is visible
    await expect(page.locator(".login-form h2")).toContainText("Login to your account");

    //5. Enter incorrect email address and password
    await page.locator(".login-form input:nth-child(2)").fill("sergiomarquine@gmail.com");
    await page.getByPlaceholder("Password").fill("Sergio");

    //6. Click 'login' button
    await page.getByRole('button', { name: 'Login' }).click();

    // 7. Verify error 'Your email or password is incorrect!' is visible
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
})

test("Test Case 4: Logout User", async ({ page }) => {
    //1. Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com/");

    //2. Verify that home page is visible successfully
    expect(await page.title()).toContain("Automation Exercise");

    //3. Click on 'Signup / Login' button
    await page.getByText(" Signup / Login").click();

    //4. Verify 'Login to your account' is visible
    await expect(page.locator(".login-form h2")).toContainText("Login to your account");

    //5. Enter incorrect email address and password
    await page.locator(".login-form input:nth-child(2)").fill("sergiomarquine@gmail.com");
    await page.getByPlaceholder("Password").fill("Sergio Marquine");

    //6. Click 'login' button
    await page.getByRole('button', { name: 'Login' }).click();

    //7. Verify that 'Logged in as username' is visible
    await expect(page.locator("li:nth-child(10) a:nth-child(1)")).toBeVisible();

    //8.Click 'Logout' button
    await page.locator("a[href='/logout']").click();

    //9.Verify that user is navigated to login page
    await expect(page).toHaveURL(/.*\/login$/);

})

test("Test Case 5: Register User with existing email", async ({ page }) => {
    //1. Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com/");

    //2. Verify that home page is visible successfully
    expect(await page.title()).toContain("Automation Exercise");

    //3. Click on 'Signup / Login' button
    await page.getByText(" Signup / Login").click();

    //4. Verify 'New User Signup!' is visible
    await expect(page.locator(".signup-form h2")).toContainText("New User Signup!");

    //5. Enter name and email address
    await page.getByPlaceholder("Name").fill("Sergio Marquine");
    await page.locator(".signup-form input:nth-child(3)").fill("sergiomarquine@gmail.com");

    //6. Click 'Signup' button
    await page.getByRole('button', { name: 'Signup' }).click();

    //7. Verify error 'Email Address already exist!' is visible
    await expect(page.getByText('Email Address already exist!')).toBeVisible();
})

test("Test Case 6: Contact Us Form", async ({ page }) => {
    // 1. Create a dummy test file dynamically (avoids file lock or path issues)
  const testFilePath = path.join(__dirname, 'test_upload.txt');
  fs.writeFileSync(testFilePath, 'This is a sample automation test file.');

  // 2. Block only intrusive ad domains
  await page.route(/(pagead2|doubleclick|googlesyndication)/, route => route.abort());

  // 3. Navigate
  await page.goto('https://automationexercise.com/contact_us');
  await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();

  // 4. Fill all text inputs
  await page.getByPlaceholder('Name').fill('Sergio');
  await page.locator('input[data-qa="email"]').fill('sergiomarquine@gmail.com');
  await page.getByPlaceholder('Subject').fill('Testing');
  await page.getByPlaceholder('Your Message Here').fill('Automation testing contact form submission.');

  // 5. Upload the txt file
  await page.locator('input[name="upload_file"]').setInputFiles(testFilePath);

  // 6. Listen for and accept the dialog before clicking submit
  page.once('dialog', async dialog => {
    await dialog.accept();
  });

  // 7. Click the submit button
  await page.locator('input[data-qa="submit-button"]').click();

  // 8. Assert success alert
  const successAlert = page.locator('div.status.alert-success');
  await expect(successAlert).toBeVisible({ timeout: 15000 });
  await expect(successAlert).toContainText('Success! Your details have been submitted successfully.');

  // 9. Click Home button and verify landing
  await page.locator('.btn-success').click();
  await expect(page).toHaveURL(/.*automationexercise\.com\/?$/);

  // Clean up the created test file
  if (fs.existsSync(testFilePath)) {
    fs.unlinkSync(testFilePath);
  }
});

test("Test Case 7: Verify Test Cases Page",async({page})=>
{
    //1. Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com/");

    //2. Verify that home page is visible successfully
    expect(await page.title()).toContain("Automation Exercise");

    //3.Click on 'Test Cases' button
    await page.locator("//a[contains(text(),'Test Cases')]").click();
    
    //4.Verify user is navigated to test cases page successfully
    await expect(page).toHaveURL(/.\/test_cases/);
})

test("Test Case 8: Verify All Products and product detail page",async({page})=>
{
    //to block adds
    await page.route(/(googleads|doubleclick|adservice|googlesyndication|google_vignette)/, route => route.abort());

    //1. Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com/");

    //2. Verify that home page is visible successfully
    expect(await page.title()).toContain("Automation Exercise");

    //3.Click on 'Products' button
    await page.locator("//a[contains(text(),'Products')]").click();

    //4. Verify user is navigated to ALL PRODUCTS page successfully
    expect(await page.locator(".title.text-center").textContent()).toContain("All Products");

    //5. The products list is visible
    await expect(page.locator(".product-image-wrapper").first()).toBeVisible();

    //6. Click on 'View Product' of first product
    await page.locator(".choose").first().click();

    //7. User is landed to product detail page
    await expect(page).toHaveURL(/.*\/product_details\/1/);

    //8. Verify that detail detail is visible: product name, category, price, availability, condition, brand
    await expect(page.locator(".product-information h2")).toBeVisible();
    await expect(page.locator(".product-information p").first()).toBeVisible();
    await expect(page.locator(".product-information span span")).toBeVisible();
    await expect(page.getByText("Availability:")).toBeVisible();
    await expect(page.getByText("Condition:")).toBeVisible();
    await expect(page.getByText("Brand:")).toBeVisible();
})

test("Test Case 9: Search Product",async({page})=>
{
    //1. Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com/");

    //2. Verify that home page is visible successfully
    expect(await page.title()).toContain("Automation Exercise");

    //3.Click on 'Products' button
    await page.locator("//a[contains(text(),'Products')]").click();

    //4. Verify user is navigated to ALL PRODUCTS page successfully
    expect(await page.locator(".title.text-center").textContent()).toContain("All Products");

    //5. Enter product name in search input and click search button
    let ProductName = "Colour Blocked Shirt";
    await page.locator("#search_product").fill(ProductName);
    await page.locator("#submit_search").click();

    //6. Verify 'SEARCHED PRODUCTS' is visible
    await expect(page.locator(".title.text-center")).toBeVisible();

    //7. Verify all the products related to search are visible
    expect(await page.locator(".productinfo.text-center p").textContent()).toContain(ProductName);
})

test("Test Case 10: Verify Subscription in home page",async({page})=>
{
    //1. Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com/");

    //2. Verify that home page is visible successfully
    expect(await page.title()).toContain("Automation Exercise");

    //3. Scroll down to footer
    await page.locator("#footer").scrollIntoViewIfNeeded();

    //4. Verify text 'SUBSCRIPTION'
    expect(await page.locator("div[class='single-widget'] h2").textContent()).toContain("Subscription");

    //5. Enter email address in input and click arrow button
    await page.locator("#susbscribe_email").fill("sergiomarquine@gmail.com");
    await page.locator("#subscribe").click();

    //6. Verify success message 'You have been successfully subscribed!' is visible
    expect(await page.locator(".alert-success.alert").textContent()).toContain("You have been successfully subscribed!");
})

test("Test Case 11: Verify Subscription in Cart page",async({page})=>
{
    //1. Navigate to url 'http://automationexercise.com'
    await page.goto("https://automationexercise.com/");

    //2. Verify that home page is visible successfully
    expect(await page.title()).toContain("Automation Exercise");

    //3. Click 'Cart' button
    await page.locator("//a[contains(text(),'Cart')]").click();

    //4. Scroll down to footer
    await page.locator("#footer").scrollIntoViewIfNeeded();

    //5. Verify text 'SUBSCRIPTION'
    expect(await page.locator("div[class='single-widget'] h2").textContent()).toContain("Subscription");

    //6. Enter email address in input and click arrow button
    await page.locator("#susbscribe_email").fill("sergiomarquine@gmail.com");
    await page.locator("#subscribe").click();

    //7. Verify success message 'You have been successfully subscribed!' is visible
    expect(await page.locator(".alert-success.alert").textContent()).toContain("You have been successfully subscribed!");
})