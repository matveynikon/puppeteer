const puppeteer = require('puppeteer');
var k = 1;
var z = 0;
var v = 2000;
var x = Math.floor(Math.random() * 6000 + 105000);
var j = 86400000 / (v) - x;
var l = x / 14000;
var k = 1;
console.log('dude');
async function start() {
  const url = 'https://matveynikon.wixsite.com/dailyhero/post/4-ocean';
  console.log(url);  
  const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      headless: false
    }); 
  for(var g = 1; g > 0; g--){
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto(url);
    await page.setViewport({ width: 1100, height: 700});
    await page.keyboard.type(' ');
    await page.waitFor(5000);
    //console.log(k);
    k += 1;
    await page.close();
  }
    browser.close();
}
start();
