const base = require('@playwright/test');


const customtest = base.test.extend (
    {
        testDataforOrder : {
            userName : "y19ec1367@gmail.com",
            password : "Narasimha@123",
            productName : "iphone 13 pro"
        }
    }
);
module.exports = {customtest}