import { Given, Then, When } from "@wdio/cucumber-framework";
import { pages } from "../pageobjects/pages";
import { getLinksExpectedText } from "../utils/common";

Given(/^a language of the website is set to a default language$/, async () => {
  await pages('main').header.openLanguageDropdown();
  await pages('main').header.selectLanguage('english');
});

When(/^the user clicks on the language selector$/, async () => {
  await pages('main').header.openLanguageDropdown();
});

When(/^the user selects (\w+) language$/, async (language) => {
  await pages('main').header.selectLanguage(language);
});

Then(/^a language of the website should be changed to (\w+) language$/, async (language) => {
  const links = await pages('main').header.navigationLinks;
  await expect(links).toHaveText(getLinksExpectedText(language));
});