import { Given, Then, When } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { DynamicTablesPage } from "../pages/DynamicTablesPage.js"
Given('the user is on {string}', async function () {
    await this.basePage.goto(
        "https://techglobal-training.com/frontend/dynamic-tables"
    );
});


Then(/^the user should see the “Inventory” heading$/, async function() {
	return true;
});

Then(/^the user should see the table with the headers below$/, async function()  {
	return true;
});

Then(/^the user should see the table with the rows below$/, async function()  {
	return true;
});

Then(/^the user should see the “ADD PRODUCT” button is enabled$/, async function()  {
	return true;
});

Then('the user should see the "Total = $2,300" text displayed', async function () {
    await expect(this.dynamicTablesPage.total).toHaveText("Total = $2,300");
});


When(/^the user clicks on the “ADD PRODUCT” button$/, async function() {
	return true;
});

Then(/^the user should see the “Add New Product” modal with its heading$/, async function() {
	return true;
});

Then(/^the user should see the “X” button is enabled$/, async function() {
	return true;
});

Then(/^the user should see the “Please select the quantity” label$/, async function() {
	return true;
});

Then(/^the user should see the “Quantity” input box is enabled$/, async function() {
	return true;
});

Then(/^the user should see the “Please enter the name of the product” label$/, async function() {
	return true;
});

Then(/^the user should see the “Product” input box is enabled$/, async function() {
	return true;
});

Then(/^the user should see the “Please enter the price of the product” label$/, async function() {
	return true;
});

Then(/^the user should see the “Price” input box is enabled$/, async function(){
	return true;
});

Then(/^the user should see the “SUBMIT” button is enabled$/, async function(){
	return true;
});

When(/^the user clicks on the “ADD PRODUCT” button$/, async function() {
	return true;
});

Then(/^the user should see the “Add New Product” modal with its heading$/, async function() {
	return true;
});

When(/^the user clicks on the “X” button$/, async function() {
	return true;
});

Then(/^the user should not see the “Add New Product” modal$/, async function() {
	return true;
});

When(/^the user clicks on the “ADD PRODUCT” button$/, async function() {
	return true;
});

When(/^the user enters the quantity as “2”$/, async function(){
	return true;
});

When(/^the user enters the product as “Mouse”$/, async function() {
	return true;
});

When(/^the user enters the price as “100”$/, async function(){
	return true;
});

When(/^the user clicks on the “SUBMIT” button$/, async function() {
	return true;
});

Then(/^the user should see the table with the new row below$/, async function(){
	return true;
});


Then(/^the user should see the “Total = $2,500” text displayed$/, async function() {
	return true;
});

