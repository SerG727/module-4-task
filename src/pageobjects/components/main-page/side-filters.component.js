import BaseComponent from '../common/base.component';

export default class SideFilters extends BaseComponent {
  constructor() {
    super('#filters');
  }

  get sortDropdown() { return this.rootElement.$('select[aria-label="sort"]') }
  
  async openSortDropdown() {
    await this.sortDropdown.click();
  }

  async selectOption(text) {
    await this.sortDropdown.selectByVisibleText(text);
  }
}