Feature: Search

  Scenario: A user should be able to search for a product using the product name
    Given the user is on the "Main" page
    When the user enters "Thor Hammer" into the "Search" field
    And the user clicks on the "Search" button
    Then the search results should display all product whose names contain "Thor Hammer"