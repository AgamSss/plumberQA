// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('registration', (login, password) => {
    cy.get('.mb-5').click()
    cy.url().should("contain", "registration")
    cy.get('#inputLogin').type(login)
    cy.get('#inputPassword').type(password)
    cy.get('.w-100').click()
})

Cypress.Commands.add('login', (login, password) => {
    cy.url().should("contain", "login")
    cy.get('#inputLogin').type(login)
    cy.get('#inputPassword').type(password)
    cy.get('.w-100').click()
})

Cypress.Commands.add('reachSignInPage', () => {
    cy.visit('http://80.91.189.243:6335/')
    cy.get('.mat-button-wrapper').contains('Login').click()
})

