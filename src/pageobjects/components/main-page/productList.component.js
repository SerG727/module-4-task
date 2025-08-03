import BaseComponent from '../common/base.component';

export default class ProductList extends BaseComponent {
  constructor() {
    super('.container[data-test]');
  }

  get productPrices() {
    return this.rootElement.$$('[data-test="product-price"]');
  }
  get productNames() {
    return this.rootElement.$$('[data-test="product-name"]');
  }
  get productsCards() {
    return this.rootElement.$$('a.card');
  }

  async openFirstProduct() {
    await this.rootElement.waitForDisplayed();
    const firstProduct = await this.productsCards[0];
    await firstProduct.click();
  }
}
