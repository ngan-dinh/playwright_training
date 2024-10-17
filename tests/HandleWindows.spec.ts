import { test, expect, chromium, firefox } from '@playwright/test';

test('Testcase 1: Verify footer link', async({page, context})=>{
    await page.goto('https://www.ericsson.com/en');

    await page.click('span#cmpbntyestxt');

    await page.locator('a[data-menu-click="Ericsson Federal Technologies Group"]').scrollIntoViewIfNeeded();

    const newPagePromise = context.waitForEvent('page');

    await page.click('a[data-menu-click="Ericsson Federal Technologies Group"]');

    const newPage = await newPagePromise;

    await newPage.locator('button#pause-element-button').click();

    await page.locator('button#pause-element-button').click();
})

test('Testcase 2: Open new page manualy', async({page, context})=>{
    await page.goto('https://www.ericsson.com/en');

    const newPage = await context.newPage();
    const newPage2 = await context.newPage();

    await newPage.goto('https://ericssonfederaltechnologiesgroup.com/en');
    await newPage2.goto('https://google.com');

    const chromeBrowser = chromium.launch();
    const chromeBrowserContext = await (await chromeBrowser).newContext();
    const chromeNewPage = await chromeBrowserContext.newPage();
    await chromeNewPage.goto('https://ericsson.com');

    const firefoxBrowser = firefox.launch();
    const firefoxBrowserContext = await (await firefoxBrowser).newContext();
    const firefoxNewPage = await firefoxBrowserContext.newPage();
    await firefoxNewPage.goto('https://ericsson.com');

})

test('Testcase 3: Handle arlert dialog', async({page, context})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

    await page.click('//p[text()="JavaScript Alerts"]//button');

    
})