Feature: User Account

  Scenario: A user should be able to update user's profile information
    Given the user is logged in
    And the user is on the Account page
    When the user clicks on the Profile button
    And the user updates First name, Last name, and Phone number
    And the user clicks on the Update Profile button
    Then the profile information should be updated
    And a success pop-up should appear confirming the profile was updated