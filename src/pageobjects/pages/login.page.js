import BasePage from './base.page';

export default class LoginPage extends BasePage {
  constructor() {
    super('auth/login');
  }

  get emailAddressInput() { return $('#email') }
  get passwordInput() { return $('#password') }
  get loginButton() { return $('input[aria-label="Login"]') }

  async enterEmail(email) {
    await this.emailAddressInput.setValue(email);
  }

  async enterPassword(password) {
    await this.passwordInput.setValue(password);
  }

  async submit() {
    await this.loginButton.click();
  }

  async logIn(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.submit(); 
  }
}