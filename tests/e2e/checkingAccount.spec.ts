import { test, expect } from '@playwright/test'

test.describe('checking account test suite', () => {
  test('verifying account tables', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#account_activity_link')
    await page.selectOption('#aa_accountId', '3')

    const savingTable = await page.locator(
      '#all_transactions_for_account tbody tr',
    )
    await expect(savingTable).toHaveCount(3)

    await page.selectOption('#aa_accountId', '4')

    const loanTable = await page.locator(
      '#all_transactions_for_account tbody tr',
    )
    await expect(loanTable).toHaveCount(2)
  })
})
