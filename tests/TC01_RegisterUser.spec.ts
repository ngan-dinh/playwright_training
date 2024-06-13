import { test, expect } from '@playwright/test';

const title = 'Automation Exercise';
const name = 'Ngan';
const email = 'ngan.dinh@op.com'

const accountTitle = "Mr";
const dob = {
  'day' : '5',
  'month' : 'April',
  'year' : '1992'}


test('Testcase 1: Register user', async ({page}) => {
  // Step 2: Navigate to URL
  await page.goto('https://automationexercise.com/');

  // Step 3: Verify that home page is visible successfully
  await expect(page).toHaveTitle(title);

  // Step 4: Click on 'Signup / Login' button
  await page.locator('//a[contains(text(), "Login")]').click();

  // Step 5: Verify 'New User Signup!' is visible
  await expect(page.locator('div.signup-form h2')).toBeVisible();

  // Step 6: Enter name and email address
  await page.locator('input[data-qa="signup-name"]').fill(name);

  await page.locator('input[data-qa="signup-email"]').fill(email);

  // Step 7: Click 'Signup' button
  await page.locator('button[data-qa="signup-button"]').click();

  // Step 8: Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(page.locator('//div[@class="login-form"]//b[text()="Enter Account Information"]')).toHaveText("Enter Account Information");

  // Select gender
  await page.locator(`input[value="${accountTitle}"]`).check();

  //Fill name
  await page.locator('input#name').clear();
  await page.locator('input#name').fill('ngan dinh');

  //Input password
  await page.locator('input#password').fill('ryghbv123');

  //Input date of birth
  await page.locator('select#days').selectOption({label: dob.day});
  await page.locator('select#months').selectOption({label: dob.month});
  await page.locator('select#years').selectOption({label: dob.year});

  //Select checkbox Sign up for our newsletter!
  await page.locator('label[for ="newsletter"]').check();
  //select checkbox Receive special offers from our partners!
  await page.locator('label[for ="optin"]').check();

  //Fill detail information
  await page.locator('input#first_name').fill('ngan');
  await page.locator('input#last_name').fill('dinh');
  await page.locator('input#company').fill('google');
  await page.locator('input#address1').fill('address1');
  await page.locator('input#address2').fill('address2');
  await page.selectOption('select#country', 'New Zealand');
  await page.locator('input#state').fill('state');
  await page.locator('input#city').fill('new york');
  await page.locator('input#zipcode').fill('0124');
  await page.locator('input#mobile_number').fill('24154521');

  //Click to create account button
  await page.locator('button[data-qa="create-account"]').click();

  //Verify that 'ACCOUNT CREATED!' is visible

  await expect(page.locator('.text-center b')).toBeVisible();

  //Click to Continue button
  await page.locator('a[data-qa="continue-button"]').click();

  //Verify that 'Logged in as username' is visible
  await expect(page.locator('//a[contains(text(), "Logged in as")]')).toBeVisible();

  //Click to Delete account button
  await page.locator('//ul[@class="nav navbar-nav"]//a[text()=" Delete Account"]').click();

  //Verify Account Deleted is visible
  await expect(page.locator('//b[text()="Account Deleted!"]')).toBeVisible();
  await page.locator('a[data-qa="continue-button"]').click();

})

test('Testcase 2: Login User with correct email and password', async({page}) => {
  //Step 2: Navigate to url 'http://automationexercise.com'
  await page.goto('http://automationexercise.com');

  //Step 3: Verify that home page is visible successfully
  await expect(page).toHaveTitle(title);

  //Step 4: Click on 'Signup / Login' button
  await page.locator('//a[contains(text(), "Signup / Login")]').click();

  //STep 5: Verify 'New User Signup!' is visible
  await expect(page.locator('div.login-form h2')).toBeVisible();

  //Step 6: Enter correct email address and password
  await page.locator('input[data-qa="login-email"]').fill('ngan.dinh@opti.com');
  await page.locator('input[data-qa="login-password"]').fill('ryghbv123');

  //Step 7: Click 'login' button
  await page.locator('button[data-qa="login-button"]').click();

  //Step 8: Verify that 'Logged in as username' is visible
  await expect(page.locator('//a[contains(text(), "Logged in as")]')).toBeVisible();

  //Click to Delete account button
  await page.locator('//ul[@class="nav navbar-nav"]//a[text()=" Delete Account"]').click();

  //Verify Account Deleted is visible
  await expect(page.locator('//b[text()="Account Deleted!"]')).toBeVisible();

})

test('Test Case 3: Login User with incorrect email and password', async({page})=>{
//Step 2: Navigate to url 'http://automationexercise.com'
await page.goto('http://automationexercise.com');

//Step 3: Verify that home page is visible successfully
await expect(page).toHaveTitle(title);

//Step 4: Click on 'Signup / Login' button
await page.locator('//a[contains(text(), "Signup / Login")]').click();

//STep 5: Verify 'New User Signup!' is visible
await expect(page.locator('div.login-form h2')).toBeVisible();

//Step 6: Enter correct email address and password
await page.locator('input[data-qa="login-email"]').fill('ngan.dinh@opti.com');
await page.locator('input[data-qa="login-password"]').fill('ryghbv12300');

//Step 7: Click 'login' button
await page.locator('button[data-qa="login-button"]').click();

//Step 8: Verify error 'Your email or password is incorrect!' is visible
await expect(page.locator('div.login-form p')).toBeVisible();

})

test('Test Case 4: Logout User', async({page})=>{
   //Step 2: Navigate to url 'http://automationexercise.com'
   await page.goto('http://automationexercise.com');

   //Step 3: Verify that home page is visible successfully
   await expect(page).toHaveTitle(title);
 
   //Step 4: Click on 'Signup / Login' button
   await page.locator('//a[contains(text(), "Signup / Login")]').click();
 
   //STep 5: Verify 'New User Signup!' is visible
   await expect(page.locator('div.login-form h2')).toBeVisible();
 
   //Step 6: Enter correct email address and password
   await page.locator('input[data-qa="login-email"]').fill('ngan.dinh@opt.com');
   await page.locator('input[data-qa="login-password"]').fill('ryghbv123');
 
   //Step 7: Click 'login' button
   await page.locator('button[data-qa="login-button"]').click();
 
   //Step 8: Verify that 'Logged in as username' is visible
   await expect(page.locator('//a[contains(text(), "Logged in as")]')).toBeVisible();

   //Step 9:



})

