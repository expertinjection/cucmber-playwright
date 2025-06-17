import { TGFrontendTestingPage } from './TGFrontendTestingPage.js';

export class TGLoginPage extends TGFrontendTestingPage {
  constructor(page) {
    super(page);

    // Locators
    this.usernameInput = this.page.locator('#username');
    this.passwordInput = this.page.locator('#password');
    this.loginButton = this.page.locator('#login_btn');
  }

  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.loginButton.click();
  }
}