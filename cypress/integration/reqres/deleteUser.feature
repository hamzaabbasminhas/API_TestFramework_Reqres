Feature: validate delete request


    Scenario Outline: perform api test to delete user 
        Given I access api request end point to deleter user '<id>'
        Then Verify the reponse
            Examples:
            | id | 
            | 2  | 