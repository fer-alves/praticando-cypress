const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nnmujd',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {},
      charts: true,
      reportTitle: "Projeto inicial",
      reportPageTitle:"Projeto inicial",
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout:5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
