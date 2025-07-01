import { Given, Then, When } from '@wdio/cucumber-framework';
import { mainPage, productPage } from '../pageobjects/pages';

Given(/^the user is on the Product details page$/, async () => {
  await mainPage.open();
  await mainPage.productList.openFirstProduct();
});

Given(/^the product is available in stock$/, async () => {
  await expect(productPage.outOfStockMessage).not.toBeExisting();
  await expect(productPage.addToCartButton).toBeEnabled();
});

When(/^the user clicks on the Add to cart button$/, async () => {
  await productPage.addToCart();
});

When(/^the user clicks on the Add to favorites button$/, async () => {
  await productPage.addToFavorites();
});

Then(/^the product should be added to the shopping cart$/, async () => {
  await expect(productPage.header.cartButton).toBeDisplayed();
});

Then(/^a success pop-up should appear confirming the product was added to the shopping cart$/, async () => {
  await expect(productPage.successToast).toBeDisplayed();
  const message = await productPage.getSuccessToastMessage();
  await expect(message).toHaveText('Product added to shopping cart.');
});

Then(/^the product should not be added to the favorites$/, async () => {
  await expect(productPage.errorToast).toBeDisplayed();
});

Then(/^an error pop-up should appear stating that only logged-in users can add products to favorites$/, async () => {
  await expect(productPage.errorToast).toBeDisplayed();
  const message = await productPage.getErrorToastMessage();
  await expect(message).toHaveText('Unauthorized, can not add product to your favorite list.');
});