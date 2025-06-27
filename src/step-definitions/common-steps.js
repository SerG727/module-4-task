import { Given, Then } from "@wdio/cucumber-framework";
import { pages } from '../pageobjects/pages';
import * as utils from '../utils/common.js'

Given(/^the user is on the (\w+) page$/, async (page) => {
  await pages(page).open();
});

Then(/^the user should be redirected to the (\w+) page$/, async (page) => {
  await expect(browser).toHaveUrl(utils.getBaseUrl() + pages(page).url);
});