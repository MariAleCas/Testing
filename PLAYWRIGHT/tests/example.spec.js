// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('get started youtube', async ({page}) =>{
  await page.goto('https://www.youtube.com/');
  await page.locator('input[id=\'search\']').pressSequentially('perritos');
  await page.keyboard.press('Enter');
  await expect (page.locator('ytd-two-column-search-results-renderer[class =\'style-scope ytd-search\']')).toBeVisible();
  //await page.click('img[class= \'yt-core-image\']').toBeVisible();
  //await page.close();
} );
