import BaseComponent from './base.component';

export default class Header extends BaseComponent {
  constructor() {
    super('app-header');
  }

  get languageButton() {
    return this.rootElement.$('#language');
  }
  get languageDropdown() {
    return this.rootElement.$('#dropdown-animated');
  }
  get navigationLinks() {
    return this.rootElement.$$('a.nav-link');
  }
  get cartButton() {
    return this.rootElement.$('[data-test="nav-cart"]');
  }
  get signInButton() {
    return this.rootElement.$('[data-test="nav-sign-in"]');
  }

  async openLanguageDropdown() {
    await this.languageButton.click();
    await this.languageDropdown.waitForDisplayed();
  }

  async selectLanguage(languageName) {
    const selectors = {
      english: '[data-test="lang-en"]',
      french: '[data-test="lang-fr"]',
      spanish: '[data-test="lang-es"]',
      german: '[data-test="lang-de"]',
      dutch: '[data-test="lang-nl"]',
      turkish: '[data-test="lang-tr"]',
    };

    await this.languageDropdown
      .$(selectors[languageName.toLowerCase()])
      .click();
  }
}
