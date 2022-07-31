Feature: validate get request

    Scenario: perform api test to fetch list of users
    Given I access api request end point to get users 
    Then Verify below response for the user
        | email                    | firstname  | lastname  | avatar                                  |
        | michael.lawson@reqres.in | Michael    | Lawson    | https://reqres.in/img/faces/7-image.jpg |
        |lindsay.ferguson@reqres.in| Lindsay    | Ferguson  | https://reqres.in/img/faces/8-image.jpg |
        |tobias.funke@reqres.in    | Tobias     | Funke     | https://reqres.in/img/faces/9-image.jpg |

    Scenario Outline: perform api test to fetch for single user only
    Given I access api request end point to get '<id>' single user only
    Then Verify the response like id email firstname lastname from fixture
        Examples:
        | id | 
        | 2  | 

    Scenario Outline: perform api test to verify correct reponse 404 when user not found
    Given I access api request end point to get '<id>' single user only
    Then Verify the reponse is 404
        Examples:
        | id | 
        | 23 | 

