import BasePage from './base.page';

export default class ProductPage extends BasePage {
  constructor(url) {
    super(url);
  }

  get addToCartButton() {
    return $('#btn-add-to-cart');
  }
  get addToFavoritesButton() {
    return $('#btn-add-to-favorites');
  }
  get outOfStockMessage() {
    return $('[data-test="out-of-stock"]');
  }
  get successToast() {
    return $('.toast-success');
  }
  get errorToast() {
    return $('.toast-error');
  }
  get productName() {
    return $('[data-test="product-name"]');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async addToFavorites() {
    await this.addToFavoritesButton.click();
  }

  async getSuccessToastMessage() {
    const toast = this.successToast;
    await toast.waitForDisplayed();
    return toast.$('.toast-message');
  }

  async getErrorToastMessage() {
    const toast = this.errorToast;
    await toast.waitForDisplayed();
    return toast.$('.toast-message');
  }
}
