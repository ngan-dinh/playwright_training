//setup for 1 user login

/*import { test, expect } from '@playwright/test';
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
  
})*/


//setup for 2 user login

/*import { test as setup, expect } from '@playwright/test';

const adminFile = './auth/admin.json'; //dẫn đến thư mục auth/admin.json

setup('Authenticate as admin', async ({ page }) => {
    // Perform authentication steps. Replace these actions with your own.
    await page.goto('https://bookcart.azurewebsites.net/login');
    await page.locator('input[formcontrolname="username"]').fill('Rachel');
    await page.locator('input[formcontrolname="password"]').fill('@Optimizely2024');
    await page.locator('//span[text()="Login"]').click();

    await expect(page.locator(`//span[contains(text(), "Rachel")]`)).toBeVisible();

    await page.context().storageState({ path: adminFile });
});

const userFile = './auth/user.json'; //dẫn đến thư mục auth/user.json

setup('authenticate as user', async ({ page }) => {
    // Perform authentication steps. Replace these actions with your own.
    await page.goto('https://bookcart.azurewebsites.net/login');
    await page.locator('input[formcontrolname="username"]').fill('Phoebe');
    await page.locator('input[formcontrolname="password"]').fill('@Optimizely2024');
    await page.locator('//span[text()="Login"]').click();

    await expect(page.locator(`//span[contains(text(), "Phoebe")]`)).toBeVisible();

    await page.context().storageState({ path: userFile });
}); */

//Advance authen using API
import { test as setup, expect } from '@playwright/test';

const loginFile = './auth/loginAdvance.json'; //dẫn đến thư mục auth/admin.json

setup('login acc with API', async ({ request, browser }) => {
  const {token, userDetails}  = await request.post('https://bookcart.azurewebsites.net/api/login', {
    data: {
      "password": "@Summer2024",
      "username": "ngadin03"
    }
   
  }).then(r => r.json());
  console.log(userDetails);
  console.log(token);

  const storageState = await request.storageState();

  const context = await browser.newContext({
    storageState: {
      cookies: storageState.cookies,
      origins: [
        {
            origin: 'https://bookcart.azurewebsites.net',
            localStorage: [
                {
                    "name": "userId",
                    "value": userDetails.userId.toString()
                },
                {
                    "name": 'authToken',
                    "value": token
                }]
        }]

    }
  });
  await context.storageState({path: loginFile});
});



