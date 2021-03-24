export default class HomePage {

    static selectors = {
        rentButton: '.btn-primary', 
        nameInput: '#name',
        lastNameInput: '#last_name',
        cardNumberInput: '#card_number',
        emailInput: '#email',  
        alertMessage: '.alert-danger'
    }

    static inputFormData(name, lastName, cardNumber, email){
        cy.get(this.selectors.nameInput).type(name)
        cy.get(this.selectors.lastNameInput).type(lastName)
        cy.get(this.selectors.cardNumberInput).type(cardNumber)
        cy.get(this.selectors.emailInput).type(email)
    }

    static clickRentButton(){
        cy.get(this.selectors.rentButton).click()
        
    }

    static confirmRentProcess(){
        cy.url().should('contain', 'Success')
    }

    static validateErrorMessage(message){
        cy.get(this.selectors.alertMessage).contains(message)
    }
   
    
}