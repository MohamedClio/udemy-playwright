import { test, expect } from '@playwright/test'

test.describe.parallel('Login test cases @login', () => {
  //before hook
  test.beforeEach('initiate main login page', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#signin_button')
  })
  //negative scenario
  test('Wrong credentials', async ({ page }) => {
    await page.fill('#user_login', 'blablabla')
    await page.fill('#user_password', 'invalidPassword')
    await page.click('text=Sign in')
    const loginError = await page.locator('.alert-error')
    await expect(loginError).toHaveText('Login and/or password are wrong.')
  })
  //positive scenario
  test('happy login scenario + logout', async ({ page }) => {
    await page.fill('#user_login', 'username')
    await page.fill('#user_password', 'password')
    await page.click('text=Sign in')
    const accountSamaryTab = await page.locator('#account_summary_tab')
    await expect(accountSamaryTab).toBeVisible()

    await page.goto('http://zero.webappsecurity.com/logout.html')
    await page.pause()
    await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  })
})
