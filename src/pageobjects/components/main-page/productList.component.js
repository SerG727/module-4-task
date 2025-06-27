import BaseComponent from '../common/base.component';

export default class ProductList extends BaseComponent {
  constructor() {
    super('.container[data-test]');
  }

  get productPrices() { return this.rootElement.$$('[data-test="product-price"]') }
  get productNames() { return this.rootElement.$$('[data-test="product-name"]') }
}