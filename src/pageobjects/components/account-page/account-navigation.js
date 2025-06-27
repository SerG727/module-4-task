import BaseComponent from '../common/base.component';

export default class AccountNavigation extends BaseComponent {
  constructor() {
    super('.btn-group-vertical');
  }

  get profileLink() { return this.rootElement.$('[data-test="nav-profile"]')}

  async clickProfileLink() {
    await this.profileLink.click();
  }
}