import { Then, When } from "@wdio/cucumber-framework";
import { mainPage } from "../pageobjects/pages";
import { extractPrices } from "../utils/common";

When(/^the user clicks on the Sort dropdown$/, async () => {
  await mainPage.sideFilters.openSortDropdown();
});

When(/^the user selects the (.+) sort option$/, async (option) => {
  await mainPage.sideFilters.selectOption(option);
  const selected = mainPage.sideFilters.sortDropdown.$(`//option[text()="${option}"]`);
  await expect(selected).toBeSelected();
});

When(/^the user enters (.+) into the Search field$/, async (query) => {
  await mainPage.sideFilters.enterSearchQuery(query);
});

When(/^the user clicks on the Search button$/, async () => {
  await mainPage.sideFilters.submitSearch();
});

Then(/^products should be displayed in descending order of price$/, async () => {
  const list = await mainPage.productList.rootElement;
  await list.waitUntil(async function () {
    return (await this.getAttribute('data-test')) === 'sorting_completed'
  }, {
    timeoutMsg: 'Expected product list to have data-test="sorting_completed"', 
  });
  const pricesElements = await mainPage.productList.productPrices;
  const prices = await extractPrices(pricesElements);
  await expect(prices).toBeSortedDescending();
});

Then(/^the search results should display all product whose names contain (.+)$/, async (query) => {
  const searchResult = await mainPage.productList.rootElement;
  await searchResult.waitUntil(async function () {
    return (await this.getAttribute('data-test')) === 'search_completed'
  }, {
    timeoutMsg: 'Expected search result to have data-test="search_completed"',
});
  const productNames = await mainPage.productList.productNames;
  await expect(productNames).toHaveTextContaining(query);
});