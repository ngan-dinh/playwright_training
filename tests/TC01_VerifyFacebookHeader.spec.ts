import { test, expect } from '@playwright/test';


test('Testcase 1: Verify facebook header', async ({page}) => {
  // Step 2: Navigate to URL
  await page.goto('https://facebook.com/');

  await expect(page.locator('div#content h2')).toHaveText('Facebook ช่วยคุณเชื่อมต่อและแชร์กับผู้คนมากมายรอบตัวคุณ');
  
})


