Feature: Product Details

  Scenario: A user should be able to add products to the shopping cart
    Given the user is on the Pliers page
    And the product is available in stock
    When the user clicks on the Add to cart button
    Then the product should be added to the shopping cart
    And a success pop-up should appear confirming the product was added to the shopping cart

  Scenario: A logged out user should not be able to add products to the favorites
    Given the user is logged out
    And the user is on the Pliers page
    When the user clicks on the Add to favorites button
    Then the product should not be added to the favorites
    And an error pop-up should appear stating that only logged-in users can add products to favorites