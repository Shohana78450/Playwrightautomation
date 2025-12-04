import {Page, test} from '@playwright/test';


test('Search for a car on bing', async ({ page }) => {
    //declare arrylist for cars
    //let cars: string[] = ['BMW', 'Audi', 'Mercedes', 'Toyota', 'Honda'];
    let cars = new Array<string>()
    cars.push('BMW')
    cars.push('Audi')
    cars.push('Mercedes')
    cars.push('Toyota')
    cars.push('Honda')

    for (let i = 0; i< cars.length; i++) {
    //navigate to bing
    await page.goto( 'https://www.bing.com/')
    //type a keyword in the search box
    await page.locator('[name="q"]').fill(cars[i])
    await page.waitForTimeout(2000)//wait for few seconds for the next step
    //submit on the search field
    await page.keyboard.press('Enter')
    //capture search result text
    let searchresults = await page.locator('[class="sb_count"]').textContent();//you can also use .innerText()
    //for concatenation purpose, you can either can use comma, or + 
    console.log('Search Results: ', searchresults)
    //extract number from the text 
    let resultsArray = searchresults.split(' ')
    console.log('for cars '+ cars[i]+ ': ', resultsArray[1])
}//end of for loop
})//end of test