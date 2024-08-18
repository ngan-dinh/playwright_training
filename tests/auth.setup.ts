import { test, expect } from '@playwright/test';
const username = 'ngan.dinh@optimizely.com';
const password ='@Summer2024';
const pathFile = "./auth/login.json";



test('Testcase 1: Sign in Ericsson.com', async ({page}) => {
  // Step 2: Navigate to URL
  await page.goto('https://www.ericsson.com/en');

  //await page.locator('cmpbntyestxt').click();

  await page.locator('a.log-in').click();

  await page.locator('input[type="email"]').fill(username);
  await page.click('input[type="submit"]');

  await page.fill('input#passwordInput', password);
  await page.click('span#submitButton');

  await expect(page.locator('div.main-page h1')).toHaveText('Welcome Ngan');

  //store authen info to auth file
  await page.context().storageState({path: pathFile});
  
})


