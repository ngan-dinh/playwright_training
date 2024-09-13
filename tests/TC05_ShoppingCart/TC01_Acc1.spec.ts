import { test, expect } from '@playwright/test';
const acc1 = 'ngadin01';
const pass1 = '@Summer2024';


test('Testcase 1: Verify Shoping cart is empty', async ({page}) => {
  // Step 2: Navigate to URL
  await page.goto('https://bookcart.azurewebsites.net/login');

  await page.fill('input[placeholder="Username"]', acc1);
  await page.fill('input[placeholder="Password"]', pass1);
  await page.click('//span[text()="Login"]');

  await page.click('//button[@class="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"]//mat-icon[text()="shopping_cart"]');
  await expect(page.locator('//mat-card-title[text()="Your shopping cart is empty."]')).toBeVisible();
  
})





