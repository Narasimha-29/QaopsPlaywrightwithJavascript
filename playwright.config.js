// @ts-check
const { devices } = require('@playwright/test');
const { trace } = require('node:console');



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const Config =({
  retries : 1,
  projects : [
    {
      name : 'tests',
      testDir: './tests', 
    },
    {
      name : 'Practice',
      testDir: './Practice',
    },
    {
      name : 'TypeScript',
      testDir : './TypeScript',
    }
  ],
  // timeout:40*1000, // This is the place to override for default timeout
  // expect :{ // this is for assertion time we are expcitily
  //   timeout:40*1000, 
  // },
  reporter: 'html',
  use: {

    browserName : 'chromium',
    headless: true,
    screenshot : 'on',
    trace : 'retain-on-failure',
    // viewport : {width:720,height:720},
    // ...devices['BlackBerry Z30'],
    // ignoreHttpsErrors:true, to ignore SSL certificates
  },
});
module.exports = Config
