import { test, expect } from '@playwright/test'

test.describe.parallel('Login test cases @login', () => {
  //negative scenario
  test('Wrong credentials', async ({ page, context }) => {
    await context.clearCookies()
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.fill('#user_login', 'blablabla')
    await page.fill('#user_password', 'invalidPassword')
    await page.click('text=Sign in')
    const loginError = await page.locator('.alert-error')
    await expect(loginError).toHaveText('Login and/or password are wrong.')
  })
  //positive scenario
  test.skip('happy login scenario + logout', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/logout.html')
    //await page.pause()
    await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  })
})
