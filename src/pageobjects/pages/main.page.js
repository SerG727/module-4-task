import { Sort, ProductList } from '../components';
import BasePage from './base.page';

export default class MainPage extends BasePage {
  constructor() {
    super();
  }

  get sort() { return new Sort() }
  get productList() { return new ProductList() }

  async sortBy(option) {
    await this.sort.selectOption(option);
  }


}