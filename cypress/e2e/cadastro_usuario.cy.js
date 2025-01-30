const usuarioinvalido = require('../fixtures/usuario_invalido.json');
const usuariovalido = require('../fixtures/usuario_valido.json');


const screens = ['desktop', 'iphone-7'];

screens.forEach((element) => {
  describe(`Cadastro de usuario e validações - ${element}`, () => {

    beforeEach('Acessar pagina e clicar no icone Cadastro', () => { 
      if (element !== 'desktop') {
        cy.viewport(element);
      }
      cy.acessarPaginaCadastro();
    });

    it('verificar mensagem de validação do campo nome vazio', () => {
      cy.validarCampoVisivel('#user');
      cy.preencherEmailAleatorio();
      cy.preencherSenhaAleatoria();
      cy.clicarBotaoRegistrar();
      cy.validarMensagem('O campo nome deve ser prenchido');
    });

    it('verificar mensagem de validação do campo e-mail vazio', () => {
      cy.preencherNomeAleatorio();
      cy.validarCampoVisivel('#email');
      cy.preencherSenhaAleatoria();
      cy.clicarBotaoRegistrar();
      cy.validarMensagem('O campo e-mail deve ser prenchido corretamente');
    });

    it('verificar mensagem de validação do campo e-mail invalido', () => {
      cy.preencherNomeAleatorio();
      cy.get('#email').type(usuarioinvalido.email);
      cy.clicarBotaoRegistrar();
      cy.validarMensagem('O campo e-mail deve ser prenchido corretamente');
    });

    it('verificar mensagem de validação do campo senha vazio', () => {
      cy.preencherNomeAleatorio();
      cy.preencherEmailAleatorio();
      cy.validarCampoVisivel('#password');
      cy.clicarBotaoRegistrar();
      cy.validarMensagem('O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Cadastro com sucesso', () => {
      cy.preencherNomeAleatorio();
      cy.preencherEmailAleatorio();
      cy.preencherSenhaAleatoria();
      cy.validarCampoVisivel('#user', '#email', '#password');
      cy.clicarBotaoRegistrar();
      cy.get('@nomeAleatorio').then((nomeAleatorio) => {
        cy.mensagemSucesso(nomeAleatorio);
      });
    });
  });
});
