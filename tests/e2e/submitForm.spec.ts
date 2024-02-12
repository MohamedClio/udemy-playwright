import { test, expect } from '@playwright/test'

test.describe.parallel('submit form test cases', () => {
  test.beforeEach('navigate To form and fill it', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#feedback')
    await page.fill('#name', 'mohamed')
    await page.fill('#email', 'ayhabal@gmail.com')
    await page.fill('#subject', 'any subject')
    await page.fill(
      '#comment',
      'here are some comments about the feedback I want to submit',
    )
  })

  test('clear the form', async ({ page }) => {
    await page.click('input[name="clear"]')
    const comment = await page.locator('#comment')
    await expect(comment).toBeEmpty()
    await expect(await page.locator('#email')).toBeEmpty()
  })

  test('submit the form', async ({ page }) => {
    await page.click('input[type="submit"]')
    await page.waitForSelector('#feedback-title')
  })
})
