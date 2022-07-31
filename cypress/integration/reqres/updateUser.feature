Feature: validate update request

    Scenario Outline: Perform api test to update User
    When I access api request end point to update user with '<name>' and '<jobs>'
    Then Verify reponse to be equal to sent request having '<name>' and '<jobs>'
    Examples:
        | name     |  jobs         |
        | morpheus | zion resident |