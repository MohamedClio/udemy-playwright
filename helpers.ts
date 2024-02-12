export async function loadMainPage(page) {
  await page.goto('https://www.example.com')
}

export async function bankingHomePage(page) {
  await page.goto('http://zero.webappsecurity.com/index.html')
}

export async function assertTitle(page) {
  await page.waitForSelector('h1')
}
