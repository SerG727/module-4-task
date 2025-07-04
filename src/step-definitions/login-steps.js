import { Given, When, Then } from '@wdio/cucumber-framework';
import { accountPage, loginPage } from '../pageobjects/pages';
import { assert } from 'chai';

Given(/^the user is logged in$/, async () => {
  await loginPage.open();
  await loginPage.logIn(process.env.EMAIL, process.env.PASSWORD);
  await browser.waitUntil(async function () {
    const expectedUrl = await accountPage.getUrl();
    return (await browser.getUrl()).includes(expectedUrl);
  }, {
    timeoutMsg: 'Expected to be redirected to /account after login',
  });
});

When(/^the user enters valid email into the Email address field$/, async () => {
  await loginPage.enterEmail(process.env.EMAIL);
});

When(/^the user enters valid password into the Password field$/, async () => {
  await loginPage.enterPassword(process.env.PASSWORD);
});

When(/^the user clicks on the Login button$/, async () => {
  await loginPage.submit();
});

Then(/^the user should be redirected to the Account page$/, async () => {
  await accountPage.pageTitle.waitForDisplayed();
  const url = await browser.getUrl();
  assert.equal(url, process.env.BASE_URL + accountPage.url);
});