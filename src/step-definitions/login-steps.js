import { When } from "@wdio/cucumber-framework";
import { pages } from "../pageobjects/pages";

When(/the user enters (.+) into the Email address field/, async (value) => {
  await pages('login').enterEmail(value);
});

When(/^the user enters (.+) into the Password field$/, async (value) => {
  await pages('login').enterPassword(value);
});

When(/^the user clicks on the Login button$/, async () => {
  await pages('login').submit();
});