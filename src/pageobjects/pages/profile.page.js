import BasePage from './base.page';

export default class ProfilePage extends BasePage {
  constructor() {
    super('account/profile')
  }

  get firstNameField() { return $('#first_name') }
  get lastNameField() { return $('#last_name') }
  get phoneField() { return $('#phone') }
  get updateProfileButton() { return $('[data-test="update-profile-submit"]') }
  get successPopup() { return $('.alert-success') }

  async updateProfileInfo(firstName, lastName, phone) {
    await browser.waitUntil(
      async () => (await this.firstNameField.getValue()).trim().length > 0,
    );
    await this.firstNameField.clearValue();
    await this.firstNameField.setValue(firstName);
    await this.lastNameField.clearValue();
    await this.lastNameField.setValue(lastName);
    await this.phoneField.clearValue();
    await this.phoneField.setValue(phone);
  }

  async updateProfile() {
    await this.updateProfileButton.click();
  }
}