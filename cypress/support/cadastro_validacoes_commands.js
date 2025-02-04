/// <reference types = "cypress"/>
import { faker } from '@faker-js/faker';

const elementos = {
  botoes : {

      register : '#btnRegister'
  },
  campos : {
      nome  : '#use',
      email : '#email',
      senha : '#password',


  },
  mensagens : {
      cadastroRealizado : '#swal2-title',
      bemVindo : '#swal2-html-container',

  }
}

Cypress.Commands.add ('acessarPaginaCadastro', () => {
  //Acessa aplicação
    cy.visit('/');
    cy.get('.fa-lock').click();

    //verifica se esta na pagina de cadastro 
      cy.get('#user').should('be.visible');
});


Cypress.Commands.add ('clicarBotaoRegistrar', () => {
  cy.get(elementos.botoes.register).click();
})

Cypress.Commands.add('preencherNomeAleatorio', () => {
  const nomeAleatorio = faker.person.fullName();
  cy.get(elementos.campos.nome).type(nomeAleatorio); 
  cy.wrap(nomeAleatorio).as('nomeAleatorio');
})

Cypress.Commands.add('preencherEmailAleatorio', () => { 
  const emailAleatorio = faker.internet.email(); 
      cy.get(elementos.campos.email).type(emailAleatorio); 
  });

Cypress.Commands.add('preencherSenhaAleatoria', () => { 
  const senhaAleatoria = faker.internet.password(8); 
       // Gerando uma senha aleatória com pelo menos 8 caracteres 
  cy.get(elementos.campos.senha).type(senhaAleatoria);
       });
       
Cypress.Commands.add('validarMensagem', (mensagemEsperada) => { 
  cy.contains(mensagemEsperada).should('be.visible'); 
});

Cypress.Commands.add('validarCampoVisivel', (seletor) => { 
  cy.get(seletor).should('be.visible'); 
});


 
  Cypress.Commands.add('mensagemSucesso', (nomeAleatorio) => { 
      cy.get(elementos.mensagens.cadastroRealizado).should('have.text','Cadastro realizado!'); 
      cy.get(elementos.mensagens.bemVindo).should('have.text', `Bem-vindo ${nomeAleatorio}` )
  
  
  });