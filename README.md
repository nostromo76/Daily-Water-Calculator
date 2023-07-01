# Daily Water Calculator

The Daily Water Calculator is a web application that helps users track their daily water intake and make sure they are drinking enough water every day. The application is built using HTML and JavaScript and is tested using Selenium.

## Prerequisites

Before you can run the application and the tests, please make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

To install the dependencies for this project, run the following command:

```
npm install
```

This will install the necessary packages such as Selenium, Selenium Webdriver, Mocha, and Mochawesome.

## Usage

To run the application, open the `Water_Consumption_ Calculator.html` file in your web browser.

To run the tests, use the following command:

```
npm test
```

This runs the Mocha tests with a 10-second timeout and generates a Mochawesome report. The `--reporter mochawesome` option in the `package.json` file enables this report.

To change the browser used for testing, update the `USE_BROWSER` variable in the `.env` file to your desired browser name (e.g. 'chrome', 'firefox', or 'safari'). By default, the application uses Chrome.
USE_BROWSER = 'YOUR BROWSER'
 driver = new Builder().forBrowser(process.env.USE_BROWSER).build()

## Contributing

If you find any issues or have suggestions for improvements, please submit them as issues on this project's Github repository. We welcome contributions to this project!