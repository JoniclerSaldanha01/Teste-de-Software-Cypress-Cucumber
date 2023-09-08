const INPUT_EMAIL = '#email'
const INPUT_SENHA = '#passwd'
const BTN_LOGIN = '#SubmitLogin'
const search = '#search_query_top'

Cypress.Commands.add('realizarLogin', () => {
    //var faker = require('faker-br');
    //let nome = faker.name.firstName();
    //cy.screenshot('success-message')

    //cy.get(search).type(nome)    
   // cy.pause()
    cy.get(INPUT_EMAIL).type('treinamento_cypress@teste.com')
    cy.get(INPUT_SENHA).type('!QAZ2wsx')    
    cy.get(BTN_LOGIN).click()
})