const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
  projectId: "r5a9o7",
  reporter: "mochawesome",
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true
   },
  specPattern: 'cypress/integration/reqres/*.feature',
  env:{
    URL: 'https://reqres.in/'
  }
  },
});
