import {Page, test} from '@playwright/test';
import {getText, type } from '../Resuable_Actions';

let page: Page;// initialize page variable for browser since we are calling matiple tests
test.beforeAll( async ({browser})=>{
    //launch browser
    page = await browser.newPage();
});

test('search for playwright keyword on being', async ({})=>{
    //navigate to bing home page
    await page.goto('https://www.bing.com/'); 
    await page. waitForTimeout(3000); //wait for few seconds
    await type(page,'[name="q"]','playwright','search box');
    await page.keyboard.press('Enter'); //hitting enter key to search

});//end of test

test('capture the search number on bing for playwright keyword', async ({})=>{
    let searchresult = await getText(page, '[class="sb_count"]', 'search result text');
    console.log("Search result is: "+searchresult);
    let searchnumber = searchresult.split(" ");
    console.log("Search number is: "+searchnumber[1]);
});//end of test