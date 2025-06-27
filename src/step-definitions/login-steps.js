import { Given, When } from "@wdio/cucumber-framework";
import { pages } from "../pageobjects/pages";

Given(/^the user is logged in$/, async () => {
  await pages('login').open();
  await pages('login').logIn('example@gmail.com', 'SuperSecretPassword1!');
  await browser.waitUntil(async function () {
    const expectedUrl = await pages('account').getUrl();
    return (await browser.getUrl()).includes(expectedUrl);
  }, {
    timeout: 5000,
    timeoutMsg: 'Expected to be redirected to /account after login',
  });
});

When(/the user enters (.+) into the Email address field/, async (value) => {
  await pages('login').enterEmail(value);
});

When(/^the user enters (.+) into the Password field$/, async (value) => {
  await pages('login').enterPassword(value);
});

When(/^the user clicks on the Login button$/, async () => {
  await pages('login').submit();
});