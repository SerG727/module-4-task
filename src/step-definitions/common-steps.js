import { Given, Then } from '@wdio/cucumber-framework';
import { pages } from '../pageobjects/pages';

Given(/^the user is on the (\w+) page$/, async (page) => {
  await pages(page).open();
  await expect(browser).toHaveUrl(process.env.BASE_URL + pages(page).url);
});

Given(/^the user is logged out$/, async () => {
  await pages('main').open();
  await expect(pages('main').header.signInButton).toBeDisplayed();
});

Then(/^the user should be redirected to the (\w+) page$/, async (page) => {
  await expect(browser).toHaveUrl(process.env.BASE_URL + pages(page).url);
});