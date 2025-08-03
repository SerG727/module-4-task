import { ProductList, SideFilters } from '../components';
import BasePage from './base.page';

export default class MainPage extends BasePage {
  constructor() {
    super();
  }

  get sideFilters() {
    return new SideFilters();
  }
  get productList() {
    return new ProductList();
  }
}
