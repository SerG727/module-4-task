import { Then, When } from '@wdio/cucumber-framework';
import { accountPage, profilePage } from '../pageobjects/pages';
import { firstName, lastName, phoneNumber} from '../utils/user-data.json'  

When(/^the user clicks on the Profile button$/, async () => {
  await accountPage.accountNavigation.openProfile();
  await browser.waitUntil(async function () {
    const expectedUrl = await profilePage.getUrl();
    return (await browser.getUrl()).includes(expectedUrl);
  }, {
    timeoutMsg: 'Expected to be redirected to /profile',
  });
});

When(/^the user updates First name, Last name, and Phone number$/, async () => {
  await profilePage.updateProfileInfo(firstName, lastName, phoneNumber);
});

When(/^the user clicks on the Update Profile button$/, async () => {
  await profilePage.updateProfile();
});

Then(/^the profile information should be updated$/, async () => {
  await expect(profilePage.firstNameField).toHaveValue(firstName);
  await expect(profilePage.lastNameField).toHaveValue(lastName);
  await expect(profilePage.phoneField).toHaveValue(phoneNumber);
});

Then(/^a success pop-up should appear confirming the profile was updated$/, async () => {
  await expect(profilePage.successPopup).toBeDisplayed();
});