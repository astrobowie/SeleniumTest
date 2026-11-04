
const {By, Builder} = require('selenium-webdriver');
const {locateWith} = require('selenium-webdriver')
const assert = require("assert");

describe('First script', function() {
    var driver;

    before(async function() {
        driver = await new Builder().forBrowser('firefox').build();
        
    });

    it('first script w/ mocha', async function () {
        await driver.get("file:///home/astro/Documents/SeleniumTest/login.html");
       
        var pageTitle = await driver.getTitle();
        assert.equal("User Login", pageTitle);

        await driver.manage().setTimeouts({implicit: 500});

        var usernameBox = await driver.findElement(By.id("username"));
        var passwordBox = await driver.findElement(By.id("password"));
        var button = await driver.findElement(locateWith(By.tagName("button")).below(passwordBox));



        await usernameBox.sendKeys('afdads');
        await passwordBox.sendKeys('afdads');
        try {
            await button.click();
        } catch {

        }
        await driver.get("file:///home/astro/Documents/SeleniumTest/fullpage.html")

        pageTitle = await driver.getTitle();
        assert.equal("win big yay", pageTitle);

    });


    after(async () => await driver.quit());
});