import { Given, Then } from '@wdio/cucumber-framework';
import * as pages from '../pageobjects/pages';

Given(/^the user is on the (\w+) page$/, async (page) => {
  const pageName = page.toLowerCase() + 'Page';
  await pages[pageName].open();
  await expect(browser).toHaveUrl(process.env.BASE_URL + pages[pageName].url);
});

Given(/^the user is logged out$/, async () => {
  await pages.mainPage.open();
  await expect(pages.mainPage.header.signInButton).toBeDisplayed();
});