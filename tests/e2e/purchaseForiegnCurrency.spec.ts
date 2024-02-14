import { test, expect } from '@playwright/test'

test.describe('purchase foriegn currency test suite', () => {
  test.only('should be able to purchase foriegn currency', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#account_activity_link')
    await page.click('#pay_bills_tab')
    await page.click('text=Purchase Foreign Currency')
    await page.selectOption('#pc_currency', 'NZD')
    await page.waitForSelector('#sp_sell_rate')
    await page.fill('#pc_amount', '500')
    await page.click('#pc_inDollars_true')
    await page.click('#pc_calculate_costs')
    await page.waitForSelector('#pc_conversion_amount')
    await page.click('#purchase_cash')

    const success = await page.locator('#alert_content')
    await expect(success).toHaveText(
      'Foreign currency cash was successfully purchased.',
    )
  })
})
