const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/trello.spec.js"
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "trello\mochawesome-report", 
    overwrite: false,                   
    html: true,                         
    json: true                          
  }
});