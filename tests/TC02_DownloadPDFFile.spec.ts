import { test, expect } from '@playwright/test';

test('Download PDF file', async({page, headless})=>{

  //Step 1: redirect to URL
  await page.goto('https://ericsson.com/en');

  await page.locator('a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();

  //Step 2: scroll to the bottom
  await page.locator('a[title="Link to pdf document"]').scrollIntoViewIfNeeded();

  if(headless==true){

  //STep 3: Click to Modern Slavery Statement 
  //cach 1
  // const downloadPromise = page.waitForEvent('download');
  // await page.locator('a[title="Link to pdf document"]').click();
  // const download = await downloadPromise;

  // console.log(download.suggestedFilename());

  // expect(download.suggestedFilename()).toEqual('modern-slavery-and-human-trafficking-statement.pdf');

  // cach 2
  const[download, click] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('a[title="Link to pdf document"]').click()
  ]);
  expect(download.suggestedFilename()).toEqual('modern-slavery-and-human-trafficking-statement.pdf');
  
  }
  else {
    const [newPage] = await Promise.all([
      page.waitForEvent('load'),
      page.locator('a[title="Link to pdf document"]').click()
    ])

    newPage.on('response', async (response)=>{
      expect (response.headers()['content-type']).toBe('application/pdf');
    })
await newPage.reload();
  }

})

