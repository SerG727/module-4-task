import BaseComponent from '../../common/base.component';

export default class Sort extends BaseComponent {
  constructor() {
    super('form.ng-untouched.ng-pristine.ng-valid');
  }

  get sortDropdown() { return this.rootElement.$('select[aria-label="sort"]') }
  
  async selectOption(text) {
    await this.sortDropdown.selectByVisibleText(text);
  }
}