import { test, expect } from '@playwright/test';

test.use({storageState: './auth/loginAdvance.json'})
test('Testcase 1: Verify Shoping cart is empty', async ({page}) => {
  // Step 2: Navigate to URL
  await page.goto('https://bookcart.azurewebsites.net/shopping-cart');

  await expect(page.locator('//mat-card-title[text()="Your shopping cart is empty."]')).toBeVisible();
  
})

test('Testcase 2: Verify clicking to Continue shoping with acc 1', async ({ page }) => {
  await page.goto('https://bookcart.azurewebsites.net/shopping-cart');
  await page.click('//span[contains(text(), "Continue shopping")]');
  await expect(page.locator('//mat-card-title[contains(text(),"Price Filter")]')).toBeVisible();

})





