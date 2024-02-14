import { test, expect } from '@playwright/test'
import { bankingHomePage } from '../../helpers'

test.describe('searchbox test suite', () => {
  test('should display search results', async ({ page }) => {
    await bankingHomePage(page)
    await page.fill('#searchTerm', 'bank')
    await page.keyboard.press('Enter')

    const numberOfLinks = await page.locator('li > a')
    await expect(numberOfLinks).toHaveCount(9)
  })

  test('should display no results when searching for random character entry', async ({
    page,
  }) => {
    await bankingHomePage(page)

    let randomCharacters = Math.random().toString(36).slice(2, 7)

    await page.fill('#searchTerm', randomCharacters)
    await page.keyboard.press('Enter')

    const textSelector = await page.locator(
      `text=No results were found for the query: ${randomCharacters}`,
    )
    await expect(textSelector).toContainText(
      `No results were found for the query: ${randomCharacters}`,
    )
  })
})
