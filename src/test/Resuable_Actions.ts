import {Page } from '@playwright/test';

//method to click on any unique element
export async function click(page:Page,locator:string,elementName:string){
    console.log("Clicking on: "+elementName);
    await page.locator(locator).click();
}//end of click method

//method to click on any element by index
export async function clickByIndex(page:Page,locator:string,elementName:string,index:number){
    console.log("Clicking on: "+elementName);
    await page.locator(locator).nth(index).click();
}//end of clickByIndex method


//method to type on any unique element
export async function type(page:Page,locator:string, userValue:string, elementName:string){
    console.log("Typing on: "+elementName);
    let element = page. locator(locator);
    await element.fill('');
    await element.fill(userValue);
}//end of type method

//method to type on any element by index
export async function typeByIndex(page:Page,locator:string, userValue:string, elementName:string,index:number){
    console.log("Typing on: "+elementName);
    let element = page. locator(locator).nth(index);
    await element.fill('');
    await element.fill(userValue);
}//end of typeByIndex method

//method to get text from any unique element
export async function getText(page:Page,locator:string, elementName:string){
    console.log("Getting text from element: "+elementName);
    let result = await page. locator(locator).innerText();
    return result;
}//end of getText method 