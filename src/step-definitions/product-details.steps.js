import { Given, Then, When } from '@wdio/cucumber-framework';
import { mainPage, productPage } from '../pageobjects/pages';
import { expect } from 'chai';

Given(/^the user is on the Product details page$/, async () => {
  await mainPage.open();
  await mainPage.productList.openFirstProduct();
});

Given(/^the product is available in stock$/, async () => {
  expect(await productPage.outOfStockMessage.isExisting()).to.be.false;
  expect(await productPage.addToCartButton.isEnabled()).to.be.true;
});

When(/^the user clicks on the Add to cart button$/, async () => {
  await productPage.addToCart();
});

When(/^the user clicks on the Add to favorites button$/, async () => {
  await productPage.addToFavorites();
});

Then(/^the product should be added to the shopping cart$/, async () => {
  const button = await productPage.header.cartButton;
  await button.waitForDisplayed();
  expect(await button.isDisplayed()).to.be.true;
});

Then(
  /^a success pop-up should appear confirming the product was added to the shopping cart$/,
  async () => {
    const toast = await productPage.successToast;
    await toast.waitForDisplayed();
    expect(await toast.isDisplayed()).to.be.true;
    const message = await productPage.getSuccessToastMessage();
    expect(await message.getText()).to.be.equal(
      'Product added to shopping cart.'
    );
  }
);

Then(/^the product should not be added to the favorites$/, async () => {
  const toast = await productPage.errorToast;
  await toast.waitForDisplayed();
  expect(await toast.isDisplayed()).to.be.true;
});

Then(
  /^an error pop-up should appear stating that only logged-in users can add products to favorites$/,
  async () => {
    const toast = await productPage.errorToast;
    await toast.waitForDisplayed();
    expect(await toast.isDisplayed()).to.be.true;
    const message = await productPage.getErrorToastMessage();
    expect(await message.getText()).to.be.equal(
      'Unauthorized, can not add product to your favorite list.'
    );
  }
);
