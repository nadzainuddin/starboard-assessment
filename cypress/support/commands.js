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
const CompanyDueDiligencePage = require('../page_objects/company_due_diligence_page')

Cypress.Commands.add('signUpWithEmail', (email, password) => { 
    cy.fixture('credentials').then((userdata) => {
        let email = userdata.username + userdata.id + "@mail.co"
        CompanyDueDiligencePage.signUpBusiness(email, "Lisa Mawar", "12344222")
    })
})

Cypress.Commands.add('updateUserCreds', (email, password) => { 
    cy.fixture('credentials').then((userdata) => {
        userdata.id = userdata.id + 1
        userdata.username = userdata.username
        cy.writeFile("cypress/fixtures/credentials.json", JSON.stringify(userdata))
    })
})



