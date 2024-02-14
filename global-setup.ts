import { Browser, chromium, Page, expect, webkit } from '@playwright/test'

async function globalSetup() {
  //load the browser and create new page
  const browser: Browser = await webkit.launch()
  const context = await browser.newContext()
  const page: Page = await context.newPage()
  //enter website, login, assert login, go to home page again
  await page.goto('http://zero.webappsecurity.com/')
  await page.click('#signin_button')
  await page.fill('#user_login', 'username')
  await page.fill('#user_password', 'password')
  await page.click('text=Sign in')
  await page.goto('http://zero.webappsecurity.com/index.html')
  const usernameDropdown = await page.locator('text =username')
  await expect(usernameDropdown).toBeVisible()
  //save the state of the login page
  await page.context().storageState({ path: './loginAuth.json' })
  await browser.close()
}

export default globalSetup
