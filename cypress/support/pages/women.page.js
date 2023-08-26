const BTN_PRODUTO = '.product-container'

Cypress.Commands.add('clicarProduto', produto => {
    cy.get(BTN_PRODUTO).contains(produto).click()
})

Cypress.Commands.add('validarQtdProdutos', produto => {
    cy.get(BTN_PRODUTO).should('have.length', 7)
})