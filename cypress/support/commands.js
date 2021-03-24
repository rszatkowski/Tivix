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
Cypress.Commands.add('openHomePage', () => {
    cy.visit('')
    cy.url().should('eq', 'http://qalab.pl.tivixlabs.com/')
    cy.contains('Please fill pickup and drop off dates') 
  })