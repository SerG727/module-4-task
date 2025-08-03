import { Then, When } from '@wdio/cucumber-framework';
import { accountPage, profilePage } from '../pageobjects/pages';
import { firstName, lastName, phoneNumber } from '../utils/user-data.json';
import * as chai from 'chai';

chai.should();

When(/^the user clicks on the Profile button$/, async () => {
  await accountPage.accountNavigation.openProfile();
  await browser.waitUntil(
    async function () {
      const expectedUrl = await profilePage.getUrl();
      return (await browser.getUrl()).includes(expectedUrl);
    },
    {
      timeoutMsg: 'Expected to be redirected to /profile',
    }
  );
});

When(/^the user updates First name, Last name, and Phone number$/, async () => {
  await profilePage.updateProfileInfo(firstName, lastName, phoneNumber);
});

When(/^the user clicks on the Update Profile button$/, async () => {
  await profilePage.updateProfile();
});

Then(/^the profile information should be updated$/, async () => {
  (await profilePage.firstNameField.getValue()).should.be.equal(firstName);
  (await profilePage.lastNameField.getValue()).should.be.equal(lastName);
  (await profilePage.phoneField.getValue()).should.be.equal(phoneNumber);
});

Then(
  /^a success pop-up should appear confirming the profile was updated$/,
  async () => {
    const popup = await profilePage.successPopup;
    await popup.waitForDisplayed();
    (await popup.isDisplayed()).should.be.true;
  }
);
