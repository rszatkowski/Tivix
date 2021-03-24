export default class HomePage {

    static selectors = {
        countryListBox: "#country", 
        cityListBox: "#city", 
        modelListBox: "#model",
        pickUpDate: "#pickup",
        dropOffDate: "#dropoff",
        searchButton: 'button[type="submit"]',
        searchResultsTable: 'table[id="search-results"]', 
        rentButtonInsideTable: '.btn-success',
    }

    
    static validateMissingDate(){
        cy.contains('Please fill pickup and drop off dates').should('be.visible')
    }


    static validateWrongDate(){
        cy.contains('Please enter a valid date!').should('be.visible')
    }

    static selectCountry(country){
        cy.get(this.selectors.countryListBox).select(country)
        cy.contains(country)
    }
    
   
    static selectCity(city){
        cy.get(this.selectors.cityListBox).select(city)
        cy.contains(city)
    }
    
    static selectModel(model){
        cy.get(this.selectors.modelListBox).type(model)
    }


    static setPickupDate(date) {
        cy.get(this.selectors.pickUpDate).type(date)
    }

    static setDropoffDate(date) {
        cy.get(this.selectors.dropOffDate).type(date)
    }


    static clickSearchButton(){
        cy.get(this.selectors.searchButton).click()
    }

    static checkIfResultListIsVisible(){
        cy.get(this.selectors.searchResultsTable).should('be.visible')
    }

    static selectCarAndClickRent(model){
        cy.contains(model).parent('tr').within(()=>{
            cy.get(this.selectors.rentButtonInsideTable).click()
        })
        cy.url().should('contain', 'details')
    }
    
}


