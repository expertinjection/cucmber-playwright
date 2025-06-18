import { BasePage } from "../pages/BasePage.js"
class DynamicTablesPage extends BasePage {
    constructor(page){
        super(page)
        this.header = this.page.locator('h1')
        this.tableHeaders = this.page.locator('#product_table th')
        this.tableRows = this.page.locator("tbody tr")
        this.total = this.page.locator('#total_amount')
        this.addBtn = this.page.locator('#add_product_btn')
        this.prodectModalTitle = this.page.locator("#modal_title");
        this.prodectModalCloseBtn = this.page.locator("button[aria-label='close']");
        this.prodectModalLabels = this.page.locator('.field label')
        this.quantityInput = this.page.locator('#quantity')
        this.productNameInput = this.page.locator('#product')
        this.priceInput = this.page.locator('#price')
        this.submitBtn = this.page.locator('#submit')
        this.newProductModel = this.page.locator('.model')
    }
    async clickAddButton() {
        await this.addBtn.click();
    }
      async clickOnCloseButton() {
        await this.prodectModalCloseBtn.click();
    }
    async clickSubmitButton() {
        await this.submitBtn.click();
    }
}
export { DynamicTablesPage }