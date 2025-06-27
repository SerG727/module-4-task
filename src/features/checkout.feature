Feature: Checkout

  Scenario: A user should be able to complete an order using valid billing and payment information
    Given the user is on the "Shopping cart" page
    And there is at least 1 product in the shopping cart
    When the user clicks on the "Proceed to checkout" button
    Then the user should be taken to the "Sign in" step
    When the user logs in with valid credentials
    Then a message confirming successful login should be displayed
    When the user clicks on the "Proceed to checkout" button
    Then the user should be taken to the "Billing address" step
    And the billing address should be prefilled with the user's address
    When the user clicks on the "Proceed to checkout" button
    Then the user should be taken to the "Payment" step
    When the user selects a payment option
    And the user provides payment details
    And the user clicks on the "Confirm" button
    Then a confirmation message that the payment was successful should be displayed