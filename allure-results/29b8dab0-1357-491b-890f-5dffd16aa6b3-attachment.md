# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\AutomationTestcases.spec.js >> @Web Test Case 2: Login User with correct email and password
- Location: Practice\AutomationTestcases.spec.js:81:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('li:nth-child(10) a:nth-child(1)')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('li:nth-child(10) a:nth-child(1)')

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address": sergiomarquine@gmail.com
- textbox "Password": Sergio Marquine
- paragraph: Your email or password is incorrect!
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name"
- textbox "Email Address"
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Login security software"
  - link "Account management tools"
  - link "Automation practice website"
```

# Test source

```ts
  2   | const path = require('path');
  3   | const fs = require('fs')
  4   | 
  5   | test.describe.configure({mode:"parallel"})
  6   | test("@Web Test Case1: Register User", async ({ browser }) => {
  7   |     //1. Launch browser
  8   |     const context = await browser.newContext();
  9   |     const page = await context.newPage();
  10  | 
  11  |     //to block adds
  12  |     await page.route(/(googleads|doubleclick|adservice|googlesyndication)/, route => route.abort());
  13  | 
  14  |     //2. Navigate to url 'http://automationexercise.com'
  15  |     await page.goto("http://automationexercise.com");
  16  | 
  17  |     //3. Verify that home page is visible successfully
  18  |     expect(await page.title()).toContain("Automation Exercise");
  19  | 
  20  |     //4. Click on 'Signup / Login' button
  21  |     await page.getByText(" Signup / Login").click();
  22  | 
  23  |     //5. Verify 'New User Signup!' is visible
  24  |     await expect(page.locator(".signup-form h2")).toContainText("New User Signup!");
  25  | 
  26  |     //6. Enter name and email address
  27  |     await page.getByPlaceholder("Name").fill("Sergio Marquine");
  28  |     await page.locator(".signup-form input:nth-child(3)").fill("sergiomarquine@gmail.com");
  29  | 
  30  |     //7. Click 'Signup' button
  31  |     await page.getByRole('button', { name: 'Signup' }).click();
  32  | 
  33  |     //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  34  |     expect(await page.locator(".login-form h2").first().textContent()).toContain("Enter Account Information");
  35  | 
  36  |     //9. Fill details: Title, Name, Email, Password, Date of birth
  37  |     await page.locator("#uniform-id_gender1").click();
  38  |     await page.locator("#password").fill("Sergio Marquine");
  39  |     await page.locator("#days").selectOption("29");
  40  |     await page.locator("#months").selectOption("October");
  41  |     await page.locator("#years").selectOption("2000");
  42  | 
  43  |     //10. Select checkbox 'Sign up for our newsletter!'
  44  |     await page.locator("#newsletter").click();
  45  | 
  46  |     //11. Select checkbox 'Receive special offers from our partners!'
  47  |     await page.locator("#optin").click();
  48  | 
  49  |     //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  50  |     await page.locator("#first_name").fill("Sergio");
  51  |     await page.locator("#last_name").fill("Marquine");
  52  |     await page.locator("#company").fill("Sonic Solutions");
  53  |     await page.locator("#address1").fill("Sergio Colony");
  54  |     await page.locator("#address2").fill("Marquine Area");
  55  |     await page.locator("#country").selectOption("India");
  56  |     await page.getByLabel("state").fill("Andhra Pradesh");
  57  |     await page.getByLabel("city").fill("Tenali");
  58  |     await page.locator("#zipcode").fill("522330");
  59  |     await page.getByLabel("Mobile Number ").fill("1234567890");
  60  | 
  61  |     //13. Click 'Create Account button'
  62  |     await page.getByRole('button', { name: 'Create Account' }).click();
  63  | 
  64  |     //14. Verify that 'ACCOUNT CREATED!' is visible
  65  |     expect(await page.locator(".col-sm-9 h2").textContent()).toContain("Account Created!");
  66  | 
  67  |     //15. Click 'Continue' button
  68  |     await page.locator(".btn-primary").click();
  69  | 
  70  |     //16. Verify that 'Logged in as username' is visible
  71  |     await expect(page.locator("li:nth-child(10) a:nth-child(1)")).toBeVisible();
  72  | 
  73  |     //17. Click 'Delete Account' button
  74  |     // await page.locator("a[href='/delete_account']").click();
  75  | 
  76  |     //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  77  |     // expect(await page.locator(".col-sm-9 h2").textContent()).toContain("Account Deleted!");
  78  |     // await page.locator(".btn-primary").click();
  79  | })
  80  | 
  81  | test("@Web Test Case 2: Login User with correct email and password", async ({ page }) => {
  82  |     //1. Navigate to url 'http://automationexercise.com'
  83  |     await page.goto("http://automationexercise.com");
  84  | 
  85  |     //2. Verify that home page is visible successfully
  86  |     expect(await page.title()).toContain("Automation Exercise");
  87  | 
  88  |     //3.Click on 'Signup / Login' button
  89  |     await page.getByText(" Signup / Login").click();
  90  | 
  91  |     //4.Verify 'Login to your account' is visible
  92  |     await expect(page.locator(".login-form h2")).toContainText("Login to your account");
  93  | 
  94  |     //5.Enter correct email address and password
  95  |     await page.locator(".login-form input:nth-child(2)").fill("sergiomarquine@gmail.com");
  96  |     await page.getByPlaceholder("Password").fill("Sergio Marquine");
  97  | 
  98  |     //6. Click 'login' button
  99  |     await page.getByRole('button', { name: 'Login' }).click();
  100 | 
  101 |     //7. Verify that 'Logged in as username' is visible
> 102 |     await expect(page.locator("li:nth-child(10) a:nth-child(1)")).toBeVisible();
      |                                                                   ^ Error: expect(locator).toBeVisible() failed
  103 | 
  104 |     //8. Click 'Delete Account' button
  105 |     await page.locator("a[href='/delete_account']").click();
  106 | 
  107 |     //9. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  108 |     expect(await page.locator(".col-sm-9 h2").textContent()).toContain("Account Deleted!");
  109 |     await page.locator(".btn-primary").click();
  110 | 
  111 | })
  112 | 
  113 | test("@Web Test Case 3: Login User with incorrect email and password", async ({ page }) => {
  114 |     //1. Navigate to url 'http://automationexercise.com'
  115 |     await page.goto("http://automationexercise.com");
  116 | 
  117 |     //2. Verify that home page is visible successfully
  118 |     expect(await page.title()).toContain("Automation Exercise");
  119 | 
  120 |     //3. Click on 'Signup / Login' button
  121 |     await page.getByText(" Signup / Login").click();
  122 | 
  123 |     //4. Verify 'Login to your account' is visible
  124 |     await expect(page.locator(".login-form h2")).toContainText("Login to your account");
  125 | 
  126 |     //5. Enter incorrect email address and password
  127 |     await page.locator(".login-form input:nth-child(2)").fill("sergiomarquine@gmail.com");
  128 |     await page.getByPlaceholder("Password").fill("Sergio");
  129 | 
  130 |     //6. Click 'login' button
  131 |     await page.getByRole('button', { name: 'Login' }).click();
  132 | 
  133 |     // 7. Verify error 'Your email or password is incorrect!' is visible
  134 |     await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
  135 | })
  136 | 
  137 | test("Test Case 4: Logout User", async ({ page }) => {
  138 |     //1. Navigate to url 'http://automationexercise.com'
  139 |     await page.goto("http://automationexercise.com");
  140 | 
  141 |     //2. Verify that home page is visible successfully
  142 |     expect(await page.title()).toContain("Automation Exercise");
  143 | 
  144 |     //3. Click on 'Signup / Login' button
  145 |     await page.getByText(" Signup / Login").click();
  146 | 
  147 |     //4. Verify 'Login to your account' is visible
  148 |     await expect(page.locator(".login-form h2")).toContainText("Login to your account");
  149 | 
  150 |     //5. Enter incorrect email address and password
  151 |     await page.locator(".login-form input:nth-child(2)").fill("sergiomarquine@gmail.com");
  152 |     await page.getByPlaceholder("Password").fill("Sergio Marquine");
  153 | 
  154 |     //6. Click 'login' button
  155 |     await page.getByRole('button', { name: 'Login' }).click();
  156 | 
  157 |     //7. Verify that 'Logged in as username' is visible
  158 |     await expect(page.locator("li:nth-child(10) a:nth-child(1)")).toBeVisible();
  159 | 
  160 |     //8.Click 'Logout' button
  161 |     await page.locator("a[href='/logout']").click();
  162 | 
  163 |     //9.Verify that user is navigated to login page
  164 |     await expect(page).toHaveURL(/.*\/login$/);
  165 | 
  166 | })
  167 | 
  168 | test("Test Case 5: Register User with existing email", async ({ page }) => {
  169 |     //1. Navigate to url 'http://automationexercise.com'
  170 |     await page.goto("http://automationexercise.com");
  171 | 
  172 |     //2. Verify that home page is visible successfully
  173 |     expect(await page.title()).toContain("Automation Exercise");
  174 | 
  175 |     //3. Click on 'Signup / Login' button
  176 |     await page.getByText(" Signup / Login").click();
  177 | 
  178 |     //4. Verify 'New User Signup!' is visible
  179 |     await expect(page.locator(".signup-form h2")).toContainText("New User Signup!");
  180 | 
  181 |     //5. Enter name and email address
  182 |     await page.getByPlaceholder("Name").fill("Sergio Marquine");
  183 |     await page.locator(".signup-form input:nth-child(3)").fill("sergiomarquine@gmail.com");
  184 | 
  185 |     //6. Click 'Signup' button
  186 |     await page.getByRole('button', { name: 'Signup' }).click();
  187 | 
  188 |     //7. Verify error 'Email Address already exist!' is visible
  189 |     await expect(page.getByText('Email Address already exist!')).toBeVisible();
  190 | })
  191 | 
  192 | test("Test Case 6: Contact Us Form", async ({ page }) => {
  193 |     // 1. Create a dummy test file dynamically (avoids file lock or path issues)
  194 |   const testFilePath = path.join(__dirname, 'test_upload.txt');
  195 |   fs.writeFileSync(testFilePath, 'This is a sample automation test file.');
  196 | 
  197 |   // 2. Block only intrusive ad domains
  198 |   await page.route(/(pagead2|doubleclick|googlesyndication)/, route => route.abort());
  199 | 
  200 |   // 3. Navigate
  201 |   await page.goto('https://automationexercise.com/contact_us');
  202 |   await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
```