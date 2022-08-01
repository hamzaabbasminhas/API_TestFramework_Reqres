# Cypress API framework - testing with api for https://reqres.in

https://reqres.in is a demo website where people can try out the API test. In this project, I have created test cases that would get the user list, post the users, delete the users and validate all response via Cypress tool, and used to test e2e use cases for the same. This will run test and also creates simple mochawesome report.

Use Cases:

- Create Users

- Get Users

- Update Users    

- Delete Users


Folder Structure
Integartion/Reqres
this contains all the feature files createUser and Delete users 

Ex.

Feature: validate create request

    Scenario Outline: Perform api test to create User
    When I access api request end point to create user with '<name>' and '<jobs>'
    Then Verify reponse to be equal to sent request having '<name>' and '<jobs>'
    Examples:
        | name     |  jobs |
        | morpheus | leader|
        
All step defintion files are included inside their respective folders with the same names as their feature files

Fixtures

This folder contains all the test data for our test like user_data.json that looks something like this 

{

   "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver"
 }
 
Mochawesome Report
marge (mochawesome-report-generator) is the counterpart to mochawesome, a custom reporter for use with the Javascript testing framework, mocha. Marge takes the JSON 	
output from mochawesome and generates a full fledged HTML/CSS report that helps visualize your test suites.

Output files are generated output.html file under mochawesome-report folder, 
and sample reports looks like this


How to run scripts:

Clone the repo and Install the project dependencies (npm install)

To run the tests on your terminal, 'npm run runAll'

To view the mochawesome report: open output.html file inside a browser

To view execution video: go inside cypress/videos


