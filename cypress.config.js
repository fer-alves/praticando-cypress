const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nnmujd',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true, // Ativa gráficos no relatório
      reportTitle: "Projeto inicial", // Título do relatório
      reportPageTitle: "Projeto inicial", // Título da página do relatório
      reportDir: "cypress/report", // Diretório onde o relatório será gerado
      overwrite: true, // Permite sobrescrever relatórios antigos
      html: false, // Define se o relatório gerado será no formato HTML
      json: true, // Define se o relatório será gerado no formato JSON
    },
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // Configura o plugin do Mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
