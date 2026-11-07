const{LoginPage} = require("./LoginPage");
const{Dashboard} = require("./Dashboard");

class POManager
{
    constructor(page)
    {
        this.page = page;
        this.loginpage = new LoginPage(this.page);
        this.dashborad = new Dashboard(this.page);
    }
    getLogin()
    {
        return this.loginpage;
    }
    getDashboard()
    {
        return this.dashborad;
    }
}
module.exports = {POManager};