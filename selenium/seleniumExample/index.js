const { Builder, By, Key, util } = require('selenium-webdriver');
async function example() {
  let driver = await new Builder().forBrowser('chrome').build(); // definisanje pretrazivaca
  await driver.get('http://www.google.com'); // koju adresu da otvori kada pokrene pretrazivac
  await driver.findElement(By.name('q')).sendKeys("Guns N' Roses", Key.RETURN); // ukucavanje zeljenog termina u search polje Google-a
}
example();
