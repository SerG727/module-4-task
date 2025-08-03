import BaseComponent from '../common/base.component';

export default class SideFilters extends BaseComponent {
  constructor() {
    super('#filters');
  }

  get sortDropdown() {
    return this.rootElement.$('select[aria-label="sort"]');
  }
  get searchInputBox() {
    return this.rootElement.$('#search-query');
  }
  get submitSearchButton() {
    return this.rootElement.$('[data-test="search-submit"]');
  }

  async openSortDropdown() {
    await this.sortDropdown.click();
  }

  async selectOption(text) {
    await this.sortDropdown.selectByVisibleText(text);
  }

  async enterSearchQuery(query) {
    await this.searchInputBox.setValue(query);
  }

  async submitSearch() {
    await this.submitSearchButton.click();
  }
}
