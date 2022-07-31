import { Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
//import * as fs from 'fs'

Given("I access api request end point to deleter user {string}", (id) => {
		
	cy.request({method:'Delete',url:`${Cypress.env('URL')}api/users/`+id+``, failOnStatusCode: false}).as('user')	
 
});


Then("Verify the reponse", ()=> {

    cy.get('@user').should((response) => {
		expect(response.status).to.eq(204);
    })
})