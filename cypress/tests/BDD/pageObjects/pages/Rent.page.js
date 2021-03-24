export default class RentPage {

    static selectors = {
        rentButton: '.btn-primary', 
        cardHeader: '.card-header',
        cardAtribute: '.card-text'
    }

    static clickRentButton(){
        cy.get(this.selectors.rentButton).click()
    }

    static checkIfSummaryPageIsVisible(){
        cy.url().should('contain', 'rent')
    }

    static validateRentForm(country, city, pickupDate, dropOffDate, model){
        cy.get(this.selectors.cardHeader).contains(model)
        cy.get(this.selectors.cardAtribute).contains(city)
        cy.get(this.selectors.cardAtribute).contains(country)
        cy.contains(pickupDate)
        cy.contains(dropOffDate)

    }
    
    
   
   
    
}