import { Given, Then, When } from '@wdio/cucumber-framework';
import { pages } from '../pageobjects/pages';

Given(/^the product is available in stock$/, async () => {
  await expect(pages('Pliers').outOfStockMessage).not.toBeExisting();
  await expect(pages('Pliers').addToCartButton).toBeEnabled();
});

When(/^the user clicks on the Add to cart button$/, async () => {
  await pages('Pliers').addToCart();
});

When(/^the user clicks on the Add to favorites button$/, async () => {
  await pages('Pliers').addToFavorites();
});

Then(/^the product should be added to the shopping cart$/, async () => {
  await expect(pages('Pliers').header.cartButton).toBeDisplayed();
});

Then(/^a success pop-up should appear confirming the product was added to the shopping cart$/, async () => {
  await expect(pages('Pliers').successToast).toBeDisplayed();
  const message = await pages('Pliers').getSuccessToastMessage();
  await expect(message).toHaveText('Product added to shopping cart.');
});

Then(/^the product should not be added to the favorites$/, async () => {
  await expect(pages('Pliers').errorToast).toBeDisplayed();
});

Then(/^an error pop-up should appear stating that only logged-in users can add products to favorites$/, async () => {
  await expect(pages('Pliers').errorToast).toBeDisplayed();
  const message = await pages('Pliers').getErrorToastMessage();
  await expect(message).toHaveText('Unauthorized, can not add product to your favorite list.');
});