const { Builder } = require("selenium-webdriver");
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
    it('Test page ', async function () {
        await Calculator.visit(fileUrl)
        await driver.manage().window().maximize();
        const title = await Calculator.getTitle();
        assert.equal(title, "Water Consumption Calculator");
        await driver.sleep(3000);
    });

    it('Test of  h1', async function () {

        await Calculator.visit(fileUrl);
        // await driver.manage().window().maximize();
        const title = await driver.findElement(By.css('h1'));
        const text = await title.getText();
        assert.ok(text.includes('Water Consumption Calculator'));
    });
    it('Test Inputs fields', async function () {
        await Calculator.visit(fileUrl);
        await driver.executeScript('window.scrollBy(0, 500);');

        let weightInput = await driver.findElement(By.id('weight'));
        let exerciseInput = await driver.findElement(By.id('exercise'));
        await weightInput.sendKeys('80');
        await exerciseInput.sendKeys('30');
        let calculateButton = await driver.findElement(By.id('calculate'));
        await calculateButton.click();

        let requiredWaterOutput = await driver.findElement(By.id('required_water'));
        let requiredWaterValue = await requiredWaterOutput.getAttribute('value');
        assert.equal(requiredWaterValue, '52', 'Required daily amount in ounces:');

        let waterBottlesOutput = await driver.findElement(By.id('water_bottles'));
        let waterBottlesValue = await waterBottlesOutput.getAttribute('value');
        assert.equal(waterBottlesValue, '3.08', 'Number of 16.9 ounce water bottles needed:');


        /* Better way
        await driver.executeScript("window.scrollBy(0,document.body.scrollHeight)")
        const weightInput = await driver.findElement(By.id('weight'));
        const exerciseInput = await driver.findElement(By.id('exercise'));
        await weightInput.sendKeys('80');
        await exerciseInput.sendKeys('30');
        const calculateButton = await driver.findElement(By.id('calculate'));
        await calculateButton.click();
        const reqWater = await driver.findElement(By.id('required_water'))
        const botles = await driver.findElement(By.id('water_bottles'))
        assert.equal(await reqWater.getAttribute('value'), '52')
        assert.equal(await botles.getAttribute('value'), '3.08')
       */

        let clearButton = await driver.findElement(By.id('clear'));
        await clearButton.click();

        requiredWaterValue = await requiredWaterOutput.getAttribute('value');
        assert.equal(requiredWaterValue, '');

        waterBottlesValue = await waterBottlesOutput.getAttribute('value');
        assert.equal(waterBottlesValue, '');
    });
    it('Test Clear Button', async function () {
        await Calculator.visit(fileUrl);
        await driver.executeScript('window.scrollBy(0, 500);');
        let clearButton = await driver.findElement(By.id('clear'));
        await clearButton.click();

        const reqWater = await driver.findElement(By.id('required_water'))
        const botles = await driver.findElement(By.id('water_bottles'))
        assert.equal(await reqWater.getAttribute('value'), '')
        assert.equal(await botles.getAttribute('value'), '')
    });

});



