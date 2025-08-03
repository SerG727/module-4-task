import { Given, Then, When } from '@wdio/cucumber-framework';
import { mainPage } from '../pageobjects/pages';
import { getLinksExpectedText } from '../utils/common';

Given(/^a language of the website is set to a default language$/, async () => {
  await mainPage.header.openLanguageDropdown();
  await mainPage.header.selectLanguage('english');
});

When(/^the user clicks on the language selector$/, async () => {
  await mainPage.header.openLanguageDropdown();
});

When(/^the user selects (\w+) language$/, async (language) => {
  await mainPage.header.languageDropdown.waitForDisplayed();
  await mainPage.header.selectLanguage(language);
});

Then(
  /^a language of the website should be changed to (\w+) language$/,
  async (language) => {
    const links = await mainPage.header.navigationLinks;
    await expect(links).toHaveText(getLinksExpectedText(language));
  }
);
