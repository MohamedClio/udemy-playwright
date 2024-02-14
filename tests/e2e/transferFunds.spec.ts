import { test, expect } from '@playwright/test'

test.describe('transfer funds test suite', () => {
  test('Should be able to transfer funds successfully!', async ({ page }) => {
    await page.pause()
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#transfer_funds_link')
    await page.selectOption('#tf_fromAccountId', '3')
    await page.selectOption('#tf_toAccountId', '5')
    await page.fill('#tf_amount', '500')
    await page.fill(
      '#tf_description',
      'Got my heart stuck on desire, cos I want to keep you close!',
    )
    await page.click('#btn_submit')

    const verifyPage = await page.locator('h2.board-header')
    await expect(verifyPage).toContainText('Verify')
    await page.click('#btn_submit')

    const successfullMessage = await page.locator('.alert-success')
    await expect(successfullMessage).toHaveText(
      'You successfully submitted your transaction.',
    )
  })
})
