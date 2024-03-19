// Initially the import statement was a require, like this,
// const { test, expect } = require('@playwright/test')
// I've change it to a normal import because i was getting a reference error
// when running 'npx playwright test'.
import { test, expect } from '@playwright/test'

// Also to solve the mentioned error i had to change the extension of the file
// 'playwright.config.js' --> 'playwright.config.cjs'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const img = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await img.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc).toBeTruthy()
})
