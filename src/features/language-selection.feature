@regression
Feature: Language Selection

  Scenario Outline: A user should be able to change a language of the website
    Given the user is on the Main page
    And a language of the website is set to a default language
    When the user clicks on the language selector
    And the user selects <language> language
    Then a language of the website should be changed to <language> language

    Examples:
      | language |
      | french   |
      | spanish  |
      | german   |
      | dutch    |
      | turkish  |