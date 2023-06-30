const { Builder} = require("selenium-webdriver");
const { By } = require('selenium-webdriver');
const CalculatorPage = require('../pages/BasePage')
const utils = require('../data/utils');
require('dotenv').config();
const assert = require('assert');
const { Driver } = require('selenium-webdriver/chrome');

const path = require('path')
const relativePath = "../Water_Consumption_ Calculator.html";
const absoluteFilePath = path.resolve(__dirname, relativePath);
const fileUrl = `file://${absoluteFilePath}`;

describe('Test Water Calculator', async function () {
    let driver;
    let Calculator;
    beforeEach('Open Water Calculator', async function () {
        driver = new Builder().forBrowser(process.env.USE_BROWSER).build()
        Calculator = new CalculatorPage(driver)
        
    })
    afterEach('Close browser', function () {
        Calculator.closeBrowser()
    })
    it('Test stranice ', async function () {
        await Calculator.visit(fileUrl)
        await driver.manage().window().maximize();
        const title = await Calculator.getTitle();
        assert.equal(title, "Water Consumption Calculator");
        await driver.sleep(3000);
    });

    it('Testiranje naslova h1', async function () {
       
        await Calculator.visit(fileUrl);
        await driver.manage().window().maximize();
        const title = await driver.findElement(By.css('h1'));
        const text = await title.getText();
        assert.ok(text.includes('Water Consumption Calculator'));
    });
    it('Test Water Calculator', async function() {
       
        const weightInput = await driver.findElement(By.id('weight'));
        const exerciseInput = await driver.findElement(By.id('exercise'));
        await weightInput.sendKeys('80');
        await exerciseInput.sendKeys('30');
        const calculateButton = await driver.findElement(By.id('calculate'));
        await calculateButton.click();
        
     });
 
})


