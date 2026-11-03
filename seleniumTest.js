const {By, Builder} = require('selenium-webdriver');
const path = require('node:path');
const assert = require("assert");

describe('First script', function() {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('firefox').build();
    });

    it('first script w/ mocha', async function () {
        await driver.get("file:///home/astro/Documents/SeleniumTest/login.html");

        let pageTitle = await driver.getTitle();
        assert.equal("User Login", pageTitle);
    });


    after(async () => await driver.quit());
});