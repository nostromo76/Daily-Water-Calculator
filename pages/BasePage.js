const assert = require('assert')

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async visit(url) {
        await this.driver.get(url);
    }
    async getTitle() {
        return this.driver.getTitle();
    }
    async closeBrowser() {
        await this.driver.close()
    }
    async find(cssSelector) {
        return this.driver.findElement(By.css(cssSelector));
    }
    async findByCss(cssSelector) {
        return this.driver.findElement(By.css(cssSelector));
    }
    async find(locator) {
        return this.driver.findElement(By.css(locator));

    }
    async getText(element) {
        return await (await this.find(element)).getText()
    }
}
module.exports = BasePage