const { POManager } = require("../../PageObjectsFolder/POManager");
const { chromium } = require('@playwright/test');
const { Before,After } = require('@cucumber/cucumber');


Before(async function ()
{
    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    this.pomanager = new POManager(this.page);
});

After(async function() 
{
    console.log("It passed successfully");
})