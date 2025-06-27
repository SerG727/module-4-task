import { Header } from '../components';

export default class BasePage {
  constructor(url = '') {
    this.url = url;
  }

  get header() { return new Header() }

  async open() {
    await browser.url(this.url);
  }

  async getUrl() {
    return this.url;
  }
}