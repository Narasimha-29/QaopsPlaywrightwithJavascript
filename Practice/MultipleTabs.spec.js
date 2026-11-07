const{test, expect} = require("@playwright/test");

test("Window Handling",async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage()
    //Click the "Top Deals" link, switch to the newly opened tab, and interact with the data table.
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
    //1.On the home page, set up a listener for a new page event
    const [newPage] = await Promise.all(
    [
        context.waitForEvent('page'), 
        await page.locator("text=Top Deals").click(), 
    ]);
    //2.On dealsPage, verify the URL contains /offers.
    await expect(newPage).toHaveURL("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    //3. Locate the page size dropdown and select "20" records per page.
    await newPage.locator("#page-menu").selectOption("20");
    //4. Iterate through the table rows and verify all 20 rows are rendered.
    const tableRows = newPage.locator("tr");
    let countOfRows = 0;
    for(let i=0;i<=await tableRows.count();i++)
    {
        countOfRows=i;
    }
    expect(await tableRows.count()).toEqual(countOfRows);
    //5. Click the column header Veg/fruit name to sort, 
    // extract column texts with .allInnerTexts(), and verify alphabetical order.
    const nonSortedColumn = await newPage.locator("td:nth-child(1)").allInnerTexts()
    await newPage.locator("tr th:nth-child(1)").click();
    const sortedColumn = await newPage.locator("td:nth-child(1)").allInnerTexts();
    expect(nonSortedColumn.toSorted()).toEqual(sortedColumn);
});