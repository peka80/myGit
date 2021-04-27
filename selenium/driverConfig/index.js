const { Builder } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build(); // Setovanje pretrazivaca

driver.get('http://facebook.com'); // web adresa koju da otvori
