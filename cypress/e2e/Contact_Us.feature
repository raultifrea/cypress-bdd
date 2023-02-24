@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

    Background: Preconditions
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us form Submission
        And I type a first name
        * I type a last name
        * I enter an email address
        * I type a comment
        * I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us form Submission
        And I type a first name
        * I type a last name
        * I type a comment
        * I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid Contact Us form Submission - Using specific data
        And I type a specific first name "Sarah"
        * I type a specific last name "Wood"
        * I type a specific email address "sarah_wood101@mail.com"
        * I type a specific word "Hello123" and number 6788 within the comment input field
        * I click on the submit button
        Then I should be presented with a successful contact us submission message

    @smoke
    Scenario Outline: Validate contact us page
        And I type a first name <firstName> and a last name '<lastName>'
        * I type a '<emailAddress>' and a comment '<comment>'
        * I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress          | comment            | message                      |
            | John      | Jones    | john_jones@mail.com   | Hallå, hur mår du? | Thank You for your Message!  |
            | Michael   | Carter   | mihai_carter@mail.com | Hej, hur mår du?   | Thank You for your Message!  |
            | Grace     | Hudson   | grace_hudson          | Tjena, hur mår du? | Error: Invalid email address |
