import { test, expect } from '@playwright/test';
const acc1 = 'ngadin01';
const pass1 = '@Summer2024';
const acc2 = 'ngadin02';
const pass2 = '@Summer2024';


test('Testcase 1: Verify Shoping cart is empty', async ({page}) => {
  // Step 2: Navigate to URL
  await page.goto('https://bookcart.azurewebsites.net/login');

  await page.fill('input[placeholder="Username"]', acc1);
  await page.fill('input[placeholder="Password"]', pass1);
  await page.click('//span[text()="Login"]');

  await page.click('//button[@class="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"]//mat-icon[text()="shopping_cart"]');
  await expect(page.locator('//mat-card-title[text()="Your shopping cart is empty."]')).toBeVisible();
  
})

test('Testcase 2: Verify clicking to Continue shoping ', async ({page})=>{
  await page.goto('https://bookcart.azurewebsites.net/login');

  await page.fill('input[placeholder="Username"]', acc2);
  await page.fill('input[placeholder="Password"]', pass2);
  await page.click('//span[text()="Login"]');

  await page.click('//button[@class="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"]//mat-icon[text()="shopping_cart"]');
  await page.click('//span[contains(text(), "Continue shopping")]');
  await expect(page.locator('//mat-card-title[contains(text(),"Price Filter")]')).toBeVisible();


})

test('Testcase 3: Add product to cart', async({page})=> {
  await page.goto('https://bookcart.azurewebsites.net/login');

  await page.fill('input[placeholder="Username"]', acc2);
  await page.fill('input[placeholder="Password"]', pass2);
  await page.click('//span[text()="Login"]');

  await page.locator('//strong[text()="Harry Potter and the Chamber of Secrets"]//ancestor::app-book-card//span[contains(text(), "Add to Cart")]').click();
  await page.locator('//strong[text()="Curuk ve Harabe"]//ancestor::app-book-card//span[contains(text(), "Add to Cart")]').click();

  await page.click('//button[@class="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"]//mat-icon[text()="shopping_cart"]');

  await expect(page.locator('//a[text()="Harry Potter and the Chamber of Secrets"]')).toBeVisible();
  await expect(page.locator('//a[text()="Curuk ve Harabe"]')).toBeVisible();

})

test('Testcase 4: Delete product to cart', async({page})=> {
  await page.goto('https://bookcart.azurewebsites.net/login');

  await page.fill('input[placeholder="Username"]', acc2);
  await page.fill('input[placeholder="Password"]', pass2);
  await page.click('//span[text()="Login"]');

  await page.click('//button[@class="mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"]//mat-icon[text()="shopping_cart"]');

  await page.click('//a[text()="Harry Potter and the Chamber of Secrets"]//ancestor::tr//button//mat-icon[text()="delete"]');
  await page.click('//a[text()="Curuk ve Harabe"]//ancestor::tr//button//mat-icon[text()="delete"]');
  await expect(page.locator('//mat-card-title[text()="Your shopping cart is empty."]')).toBeVisible();


})



