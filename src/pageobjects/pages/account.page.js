import { AccountNavigation } from '../components';
import BasePage from './base.page';

export default class AccountPage extends BasePage {
  constructor() {
    super('account');
  }

  get accountNavigation() { return new AccountNavigation() }
  get pageTitle() { return $('[data-test="page-title"]') }
}