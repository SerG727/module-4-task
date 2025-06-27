Feature: User Login

  Scenario Outline: Scenario Outline name: A user should be able to log in with valid credentials
    Given the user is on the Login page
    When the user enters <email> into the Email address field
    And the user enters <password> into the Password field
    And the user clicks on the Login button
    Then the user should be redirected to the Account page

    Examples:
      | email             | password              |
      | example@gmail.com | SuperSecretPassword1! |