Feature: User Login

  Scenario: A user should be able to log in with valid credentials
    Given the user is on the Login page
    When the user enters valid email into the Email address field
    And the user enters valid password into the Password field
    And the user clicks on the Login button
    Then the user should be redirected to the Account page