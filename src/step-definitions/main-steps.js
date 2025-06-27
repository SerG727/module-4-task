import { Then, When } from "@wdio/cucumber-framework";
import { pages } from "../pageobjects/pages";
import { extractPrices } from "../utils/common";

When(/^the user clicks on the Sort dropdown$/, async () => {
  await pages('main').sideFilters.openSortDropdown();
});

When(/^the user selects the (.+) sort option$/, async (option) => {
  await pages('main').sideFilters.selectOption(option);
});

When(/^the user enters (.+) into the Search field$/, async (query) => {
  await pages('main').sideFilters.enterSearchQuery(query);
});

When(/^the user clicks on the Search button$/, async () => {
  await pages('main').sideFilters.submitSearch();
});

Then(/^products should be displayed in descending order of price$/, async () => {
  await browser.pause(1000);
  const pricesElements = await pages('main').productList.productPrices;
  const prices = await extractPrices(pricesElements);
  await expect(prices).toBeSortedDescending();
});

Then(/^the search results should display all product whose names contain (.+)$/, async (query) => {
const searchResult = await pages('main').productList.rootElement;
await searchResult.waitUntil(async function () {
  return (await this.getAttribute('data-test')) === 'search_completed'
}, {
  timeout: 5000,
  timeoutMsg: 'Expected search result to have data-test="search_completed"',
});

const productNames = await pages('main').productList.productNames;
await expect(productNames).toHaveTextContaining(query);
});