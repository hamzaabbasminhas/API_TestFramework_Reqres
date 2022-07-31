import { Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
//import * as fs from 'fs'

var page;

Given("I access api request end point to get users", function() {
	cy.request({url:`${Cypress.env('URL')}api/users?page=2`}).as('page')
})

Given("Verify below response for the user", (table) => {

	cy.get('@page').should((response) => {
		expect(response.status).to.eq(200);
		assert.equal(response.body.page,'2')
		assert.equal(response.body.per_page,'6')
		assert.equal(response.body.total,'12')
		assert.equal(response.body.total_pages,'2')

		var id = 0
		table.hashes().forEach(row => {

			assert.equal(response.body.data[id].email,(row.email))
			assert.equal(response.body.data[id].first_name,(row.firstname))
			assert.equal(response.body.data[id].last_name,(row.lastname))
			assert.equal(response.body.data[id].avatar,(row.avatar))
			id+=1
		})


		})
});
