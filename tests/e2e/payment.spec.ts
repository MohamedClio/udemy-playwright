import { test, expect } from '@playwright/test'

test.describe('payment test suite', () => {
  test('Should be able to complete payment successfully', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#account_activity_link')
    await page.click('#pay_bills_tab')
    await page.selectOption('#sp_payee', 'apple')
    await page.click('#sp_get_payee_details')
    await page.waitForSelector('#sp_payee_details')
    await page.fill('#sp_amount', '500')
    await page.fill('#sp_date', '2024-02-14')
    await page.fill('#sp_description', 'this is a test')
    await page.click('#pay_saved_payees')

    const success = await page.locator('#alert_content > span')
    await expect(success).toBeVisible()
    await expect(success).toHaveText('The payment was successfully submitted.')
  })
})
