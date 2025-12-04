import { Page, test } from '@playwright/test'; 

test('Mouse Hover to quick tools module and select track a pakage on USPS @smoke', async ({ page}) => {
    //navigate to USPS
    await page.goto('https://www.usps.com/');
    //hover to quick tools module
    await page.locator('[class="nav-first-element menuitem"]').hover();
    //click on track a pakage link
    await page.locator('text=Track a Package').click();     
    //enter a tracking number
    await page.locator('[id="tracking-input"]').fill('11111111111111');
    await page.waitForTimeout(5000);//wait for few seconds for to see it enterd because of fast execution

    await page.waitForTimeout(5000);//wait for few seconds for the next step


//example of using text and non text

//click on the truck button using text
    //await page.locator('option : contains ("Track")').click();
//click on the truck button using non text
    //await page.locator('[id="tracking-submit"]').click();
 

})//end of test