@regression
Feature: Main page

  Scenario: A user should be able to sort products by price from high to low
    Given the user is on the Main page
    When the user clicks on the Sort dropdown
    And the user selects the Price (High - Low) sort option
    Then products should be displayed in descending order of price