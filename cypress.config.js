const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nnmujd',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true, // Ativa gráficos no relatório
      reportTitle: "Projeto inicial", // Título do relatório
      reportPageTitle: "Projeto inicial", // Título da página do relatório
      reportDir: "cypress/reports/html", // Agora o diretório está correto
      overwrite: true, // Permite sobrescrever relatórios antigos
      html: true, // ATIVA a geração do relatório HTML
      json: true, // Mantém a geração do JSON
    },
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // Configura o plugin do Mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
