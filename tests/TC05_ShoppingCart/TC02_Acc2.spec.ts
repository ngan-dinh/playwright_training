import { test, expect } from '@playwright/test';

//test.use({storageState:'./auth/user.json'})
test('Testcase 2: Add product to cart', async ({ page }) => {
  await page.goto('https://bookcart.azurewebsites.net/');


  await page.locator('//strong[text()="Harry Potter and the Chamber of Secrets"]//ancestor::app-book-card//span[contains(text(), "Add to Cart")]').click();
  await page.locator('//strong[text()="Curuk ve Harabe"]//ancestor::app-book-card//span[contains(text(), "Add to Cart")]').click();

  await page.click('//button[@class="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"]//mat-icon[text()="shopping_cart"]');

  await expect(page.locator('//a[text()="Harry Potter and the Chamber of Secrets"]')).toBeVisible();
  await expect(page.locator('//a[text()="Curuk ve Harabe"]')).toBeVisible();

})

test('Testcase 3: Delete product to cart', async ({ page }) => {
  await page.goto('https://bookcart.azurewebsites.net/');


  await page.click('//button[@class="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"]//mat-icon[text()="shopping_cart"]');

  await page.click('//a[text()="Harry Potter and the Chamber of Secrets"]//ancestor::tr//button//mat-icon[text()="delete"]');
  await page.click('//a[text()="Curuk ve Harabe"]//ancestor::tr//button//mat-icon[text()="delete"]');
  await expect(page.locator('//mat-card-title[text()="Your shopping cart is empty."]')).toBeVisible();


})

test.describe('Use admin user', async () => {

  test.use({storageState:'./auth/user.json'})
  test('Testcase 1: Verify Shoping cart is empty', async ({page}) => {
    // Step 2: Navigate to URL
    await page.goto('https://bookcart.azurewebsites.net/shopping-cart');
  
    await expect(page.locator('//mat-card-title[text()="Your shopping cart is empty."]')).toBeVisible();
    
  })
})



