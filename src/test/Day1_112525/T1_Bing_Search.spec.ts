import { Page, test } from '@playwright/test';


//initialize page variable for browser
let page: Page
let value: string // just an example
let integer: number // just an example

test.beforeAll(async({ browser }) => {
//create a new page instance
page = await browser.newPage()
})//end of before all

//test.describe.configure ({ mode: 'serial' });//to run tests in serial mode
test( 'Search for a keyword on bing @smoke', async () => {
    //navigate to bing
    await page.goto( 'https://www.bing.com/')
    //type a keyword in the search box
    await page.locator('[name="q"]').fill('Playwright Testing')
    await page.waitForTimeout(2000)//wait for few seconds for the next step
    //click on the search icon
    await page.keyboard.press('Enter')
    //click on the search icon
   // await page. locator('[id="search_icon"]').click();


})//end of 1st test

test('Capture search', async () => {
    //capture search result text
    let searchresults = await page. locator('[class="sb_count"]').textContent()//you can also use .innerText()
    console.log('Search Results: ',searchresults)
    //extract number from the text
    let resultsArray = searchresults.split(' ')
    console.log('Results Array: ',resultsArray[1])

})//end of 2nd test