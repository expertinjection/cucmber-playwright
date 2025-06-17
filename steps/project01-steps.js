import { Given, Then, When } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { DynamicTablesPage } from "../pages/DynamicTablesPage.js"
Given('the user is on {string}', async function () {
    await this.basePage.goto(
        "https://techglobal-training.com/frontend/dynamic-tables"
    );
});


Then(/^the user should see the “Inventory” heading$/, () => {
	return true;
});

Then(/^the user should see the table with the headers below$/, () => {
	return true;
});

Then(/^the user should see the table with the rows below$/, () => {
	return true;
});

Then(/^the user should see the “Total = $2,300” text displayed$/, () => {
	return true;
});


Then(/^the user should see the “ADD PRODUCT” button is enabled$/, () => {
	return true;
});

Then(/^the user should see the “Total = $2,300” text displayed$/, () => {
	return true;
});

When(/^the user clicks on the “ADD PRODUCT” button$/, () => {
	return true;
});

Then(/^the user should see the “Add New Product” modal with its heading$/, () => {
	return true;
});

Then(/^the user should see the “X” button is enabled$/, () => {
	return true;
});

Then(/^the user should see the “Please select the quantity” label$/, () => {
	return true;
});

Then(/^the user should see the “Quantity” input box is enabled$/, () => {
	return true;
});

Then(/^the user should see the “Please enter the name of the product” label$/, () => {
	return true;
});

Then(/^the user should see the “Product” input box is enabled$/, () => {
	return true;
});

Then(/^the user should see the “Please enter the price of the product” label$/, () => {
	return true;
});

Then(/^the user should see the “Price” input box is enabled$/, () => {
	return true;
});

Then(/^the user should see the “SUBMIT” button is enabled$/, () => {
	return true;
});

When(/^the user clicks on the “ADD PRODUCT” button$/, () => {
	return true;
});

Then(/^the user should see the “Add New Product” modal with its heading$/, () => {
	return true;
});

When(/^the user clicks on the “X” button$/, () => {
	return true;
});

Then(/^the user should not see the “Add New Product” modal$/, () => {
	return true;
});

When(/^the user clicks on the “ADD PRODUCT” button$/, () => {
	return true;
});

When(/^the user enters the quantity as “2”$/, () => {
	return true;
});

When(/^the user enters the product as “Mouse”$/, () => {
	return true;
});

When(/^the user enters the price as “100”$/, () => {
	return true;
});

When(/^the user clicks on the “SUBMIT” button$/, () => {
	return true;
});

Then(/^the user should see the table with the new row below$/, () => {
	return true;
});

Then(/^the user should see the “Total = $2,500” text displayed$/, () => {
	return true;
});
