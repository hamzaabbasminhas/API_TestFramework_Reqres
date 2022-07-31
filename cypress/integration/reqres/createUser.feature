Feature: validate create request

    Scenario Outline: Perform api test to create User
    When I access api request end point to create user with '<name>' and '<jobs>'
    Then Verify reponse to be equal to sent request having '<name>' and '<jobs>'
    Examples:
        | name     |  jobs |
        | morpheus | leader|