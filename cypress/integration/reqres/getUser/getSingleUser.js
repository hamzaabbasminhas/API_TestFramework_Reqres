import { Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
//import * as fs from 'fs'

var singleuser;

Given("I access api request end point to get {string} single user only", (id) => {
		
	cy.request({url:`${Cypress.env('URL')}api/users/`+id+``, failOnStatusCode: false}).as('singleuser')	
 
});


Given("Verify the response like id email firstname lastname from fixture", () => {
	// read data fromjson and then validate the response data	 
		cy.fixture('/users/userdata').then((userdata) => {
				cy.get('@singleuser').should((response) => {
 				expect(response.status).to.eq(200)	
   				assert.equal(response.body.data.first_name,userdata.first_name)
				assert.equal(response.body.data.last_name,userdata.last_name)
				assert.equal(response.body.data.email,userdata.email)

		});
 
	})
});

Given("Verify the reponse is 404", () => {

	cy.get('@singleuser').should((response) => {
		expect(response.status).to.eq(404)	
})
})