const {test, expect} = require("@playwright/test");

test("Custom Search",async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    //1. Direct navigate to below URL
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    //2. Search for "Wheat" in the table search field.
    await page.locator("#search-field").fill("Wheat");
    //3. Read the price cell adjacent to "Wheat" and assert its value.
    const wheatPrice = await page.locator("td:nth-child(2)").textContent();
    expect(wheatPrice).toEqual("67");
    //4. Clear the search and use the Next pagination button (aria-label="Next") in a loop until 
    // you find a target item (e.g., "Rice"), then assert its discount price.
    await page.locator("#search-field").clear();
    let found = false;
    while(!found)
    {
        const List = page.locator("tbody tr");
        for(let i=0;i<await List.count();i++)
        {
            const productList = await List.nth(i).locator("td:nth-child(1)").textContent();
            if(productList.trim().includes("Rice"))
            {
                const discountPrice = await List.nth(i).locator("td:nth-child(3)").textContent();
                console.log(discountPrice.trim());
                found = true;
                break;
            }
        }
        if (found) break;

        // Check if the Next button is disabled
        const nextBtn = page.locator("a[aria-label='Next']");
        const isDisabled = await nextBtn.getAttribute("aria-disabled") === "true";

        if (isDisabled) {
        console.log("Product 'Rice' not found across all pages.");
        break;
        }

        // Capture first row text to detect when new page loads
        const currentFirstItem = (await page.locator("tbody tr td:nth-child(1)").first().textContent())?.trim();

        await nextBtn.click();

        // Wait until the first row text changes to confirm the new page loaded
        await page.waitForFunction(
        (prev) => {
            const el = document.querySelector("tbody tr td:nth-child(1)");
            return el && el.textContent?.trim() !== prev;
        },
        currentFirstItem
    ); }
    
});