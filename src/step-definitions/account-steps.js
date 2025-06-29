import { Then, When } from '@wdio/cucumber-framework';
import { pages } from '../pageobjects/pages';
import * as testData from '../utils/test-data.js'  

When(/^the user clicks on the Profile button$/, async () => {
  await pages('account').accountNavigation.openProfile();
  await browser.waitUntil(async function () {
    const expectedUrl = await pages('profile').getUrl();
    return (await browser.getUrl()).includes(expectedUrl);
  }, {
    timeoutMsg: 'Expected to be redirected to /profile',
  });
});

When(/^the user updates First name, Last name, and Phone number$/, async () => {
  await browser.pause(1500);
  await pages('profile').updateProfileInfo(testData.profileInfo.firstName, testData.profileInfo.lastName, testData.profileInfo.phone);
});

When(/^the user clicks on the Update Profile button$/, async () => {
  await pages('profile').updateProfile();
});

Then(/^the profile information should be updated$/, async () => {
  await expect(pages('profile').firstNameField).toHaveValue(testData.profileInfo.firstName);
  await expect(pages('profile').lastNameField).toHaveValue(testData.profileInfo.lastName);
  await expect(pages('profile').phoneField).toHaveValue(testData.profileInfo.phone);
});

Then(/^a success pop-up should appear confirming the profile was updated$/, async () => {
  await expect(pages('profile').successPopup).toBeDisplayed();
});