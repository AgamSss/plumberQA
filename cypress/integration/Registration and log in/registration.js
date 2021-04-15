/// <reference types="Cypress" />


describe('registration', () => {
    let login = Math.random().toString(20).substring(2)
    let password = Math.random().toString(20).substring(2)
    let invalidLogin = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)
    let invalidPassword = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)

    beforeEach(()=>{
        cy.reachSignInPage()
    })

    it('Create a valid account', () => {
        cy.registration(login, password)
        cy.get('span.ng-star-inserted').should('have.text', login)
    })

    it('Login with valid credentials', () => {
        cy.login(login, password)
        cy.get('span.ng-star-inserted').should('have.text', login)
    })

    it('Try to create exist user', () => {
        cy.registration(login, password)
        cy.validateErrorSignUpPage("User is already exist") 
    })

    it('Try to create user with Login length more than Max', () => {
        cy.registration(invalidLogin, password)
        cy.validateErrorSignUpPage("Login and password must be shorter then 20 symbols")
    })
    it('Try to create user with Password length more than Max', () => {
        cy.registration(login+2, invalidPassword)
        cy.validateErrorSignUpPage("Login and password must be shorter then 20 symbols")
    })

    it('Try to log in with empty Login and password fields', () => {
        cy.registration(" ", " ")
        cy.validateErrorSignUpPage("Login and password are required")
    })
  })