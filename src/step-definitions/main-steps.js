import { Then, When } from "@wdio/cucumber-framework";
import { pages } from "../pageobjects/pages";
import { extractPrices } from "../utils/common";

When(/^the user clicks on the Sort dropdown$/, async () => {
  await pages('main').sideFilters.openSortDropdown();
});

When(/^the user selects the (.+) sort option$/, async (option) => {
  await pages('main').sideFilters.selectOption(option);
});

Then(/^products should be displayed in descending order of price$/, async () => {
  await browser.pause(1000);
  const pricesElements = await pages('main').productList.productPrices;
  const prices = await extractPrices(pricesElements);
  await expect(prices).toBeSortedDescending();
});