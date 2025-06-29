import { Given, When } from '@wdio/cucumber-framework';
import { pages } from '../pageobjects/pages';

Given(/^the user is logged in$/, async () => {
  await pages('login').open();
  await pages('login').logIn(process.env.EMAIL, process.env.PASSWORD);
  await browser.waitUntil(async function () {
    const expectedUrl = await pages('account').getUrl();
    return (await browser.getUrl()).includes(expectedUrl);
  }, {
    timeout: 5000,
    timeoutMsg: 'Expected to be redirected to /account after login',
  });
});

When(/^the user enters valid email into the Email address field$/, async () => {
  await pages('login').enterEmail(process.env.EMAIL);
});

When(/^the user enters valid password into the Password field$/, async () => {
  await pages('login').enterPassword(process.env.PASSWORD);
});

When(/^the user clicks on the Login button$/, async () => {
  await pages('login').submit();
});