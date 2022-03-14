const puppeteer = require('puppeteer');

console.log('BitBot v1 🤖📈💲');



async function bitSearch() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const url = 'https://www.google.com/search?q=valor+bitcoin&oq=valor+bitcoin&aqs=chrome.0.0i67i433j0i433i512j0i512l8.2652j0j4&sourceid=chrome&ie=UTF-8';
  await page.goto(url);
  

  const bitValue = await page.evaluate(() => {
    return document.querySelector('.pclqee').textContent;
  });

  console.log('🤖 Checando...')
  console.log(`O valor atual do bitCoin em reais é de 💵${bitValue}`);
  await browser.close();
}

const runBot = () => {
    setInterval(bitSearch, 2000)
};

runBot();