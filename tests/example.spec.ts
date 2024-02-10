import { test, expect } from '@playwright/test'
import { loadMainPage, assertTitle } from '../helpers'

test.skip('first testing in 2024 @myTag1', async ({ page }) => {
  await page.goto('https://www.example.com')
  const pageTitle = await page.locator('h1')
  await expect(pageTitle).toContainText('Example Domain')
})

test('Clicking on elements', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/')
  await page.click('#signin_button')
  await page.click('text=Sign in')
  const loginError = await page.locator('.alert-error')
  await expect(loginError).toContainText('Login and/or password are wrong.')
})
test.describe('first test suite @myTag2', () => {
  test('Working with Inputs', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#signin_button')

    await page.fill('#user_login', 'ay value')
    await page.fill('#user_password', 'ay value brdo')
    await page.click('text=Sign in')
    const loginError = await page.locator('.alert-error')
    await expect(loginError).toContainText('Login and/or password are wrong.')
    //await page.pause()
  })

  test('Assertions @myTag1', async ({ page }) => {
    await page.goto('https://www.example.com')
    await expect(page).toHaveURL('https://www.example.com')
    await expect(page).toHaveTitle('Example Domain')

    const pageTitle = await page.locator('h1')
    const pageTitle1 = await page.locator('h5')

    await expect(pageTitle).toBeVisible()
    await expect(pageTitle).toHaveText('Example Domain')
    await expect(pageTitle1).not.toBeVisible()
  })
})

test('Screenshots', async ({ page }) => {
  await page.goto('https://www.example.com')
  await page.screenshot({ path: 'fullpage.png', fullPage: true })
  const element = await page.$('h1')
  await element?.screenshot({ path: 'exampleDomainScreenshot.png' })
})

test.only('helpers', async ({ page }) => {
  await loadMainPage(page)
  await assertTitle(page)
})
// Clicking only visible selector:
// await page.click('.submit-button:visible')
// combine 2 selectors with just a space ('#username .first')
//npx playwright test --grep-invert @myTag
//npx playwright test --grep "@myTag1|@myTag2"
// if above didn't work: npx playwright test --grep '(?=.*@web) | (?=.*@ui)' --workers 2
