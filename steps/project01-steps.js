import { Given, Then, When } from "@cucumber/cucumber"
import { expect } from "@playwright/test"

Given(/^the user is on "([^"]*)"$/, async function () {
	await this.page.goto('https://www.techglobal-training.com/frontend/dynamic-tables')
});

Then(/^the user should see the “Inventory” heading$/, async function() {
	await expect(this.dynamicTablesPage.header).toHaveText('Inventory')
});

Then(/^the user should see the table with the headers below$/, async function()  {
	const actualHeaders = await this.dynamicTablesPage.tableHeaders.allTextContents();
    expect(actualHeaders).toEqual(headers.raw()[0]);
});

Then(/^the user should see the table with the rows below$/, async function()  {
	const actualRows = await this.dynamicTablesPage.tableRows.allTextContents();
    const expectedRows = rows.raw().map(row => row.join(' '));
    expect(actualRows).toEqual(expectedRows);
});

Then(/^the user should see the “ADD PRODUCT” button is enabled$/, async function()  {
	await expect(this.dynamicTablesPage.addBtn).toBeEnabled()
});

Then('the user should see the "Total = $2,300" text displayed', async function () {
    await expect(this.dynamicTablesPage.total).toHaveText("Total = $2,300");
});


When(/^the user clicks on the “ADD PRODUCT” button$/, async function() {
	await this.dynamicTablesPage.clickAddButton()
});

Then(/^the user should see the “Add New Product” modal with its heading$/, async function() {
	await expect(this.dynamicTablesPage.prodectModalTitle).toHaveText('Add New Product')
});

Then(/^the user should see the “X” button is enabled$/, async function() {
	await expect(this.dynamicTablesPage.prodectModalCloseBtn).toBeEnabled()
});

Then(/^the user should see the “Please select the quantity” label$/, async function() {
	await expect(this.dynamicTablesPage.prodectModalLabels).toBeVisible()
});

Then(/^the user should see the “Quantity” input box is enabled$/, async function() {
	await expect(this.dynamicTablesPage.quantityInput).toBeEnabled()
});

Then(/^the user should see the “Please enter the name of the product” label$/, async function() {
    await expect(this.dynamicTablesPage.prodectModalLabels).toBeVisible()
});

Then(/^the user should see the “Product” input box is enabled$/, async function() {
	await expect(this.dynamicTablesPage.productNameInput).toBeEnabled()
});

Then(/^the user should see the “Please enter the price of the product” label$/, async function() {
	await expect(this.dynamicTablesPage.prodectModalLabels).toBeVisible()
});

Then(/^the user should see the “Price” input box is enabled$/, async function(){
	await expect(this.dynamicTablesPage.priceInput).toBeEnabled()
});

Then(/^the user should see the “SUBMIT” button is enabled$/, async function(){
	await expect(this.dynamicTablesPage.submitBtn).toBeEnabled()
});

When(/^the user clicks on the “ADD PRODUCT” button$/, async function() {
	await this.dynamicTablesPage.clickAddButton()
});

Then(/^the user should see the “Add New Product” modal with its heading$/, async function() {
	await expect(this.dynamicTablesPage.prodectModalTitle).toBeVisible()
});

When(/^the user clicks on the “X” button$/, async function() {
	await this.dynamicTablesPage.clickOnCloseButton()
});

Then(/^the user should not see the “Add New Product” modal$/, async function() {
	await expect(this.dynamicTablesPage.newProductModel).not.toBeVisible()
});

When(/^the user clicks on the “ADD PRODUCT” button$/, async function() {
	await this.dynamicTablesPage.clickAddButton()
});

When(/^the user enters the quantity as “2”$/, async function(){
	await this.dynamicTablesPage.quantityInput.fill(2)
});

When(/^the user enters the product as “Mouse”$/, async function() {
	await this.dynamicTablesPage.productNameInput.fill('Mouse')
});

When(/^the user enters the price as “100”$/, async function(){
	await this.dynamicTablesPage.priceInput.fill('100') 
});

When(/^the user clicks on the “SUBMIT” button$/, async function() {
	await this.dynamicTablesPage.clickSubmitButton()
});

Then(/^the user should see the table with the new row below$/, async function(){
	const actualRows = await this.dynamicTablesPage.tableRows.allTextContents();
    const expectedRows = rows.raw().map(row => row.join(' '));
    expect(actualRows).toContain(expectedRows[0])
});


Then(/^the user should see the “Total = $2,500” text displayed$/, async function() {
    await expect(this.dynamicTablesPage.total).toHaveText("Total = $2,500")
});

