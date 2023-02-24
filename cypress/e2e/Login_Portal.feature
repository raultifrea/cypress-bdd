@login @regression
Feature: WebdriverUniversity - Login Portal Page

    Background: Preconditions
        Given I wait for 0 seconds
        When I navigate to the webdriveruniversity login page

    Scenario Outline: Validate login portal page
        And I enter the username <word>
        * I enter the password <password>
        * I click the login button
        Then I should be presented with an alert which contains text '<AlertText>'

        Examples:
            | word      |  | password     |  | AlertText            |
            | webdriver |  | webdriver123 |  | validation succeeded |
            | webdriver |  | 123webdriver |  | validation failed    |
            | Joe       |  | pass12345    |  | validation failed    |