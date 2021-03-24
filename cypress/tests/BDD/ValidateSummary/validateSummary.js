import {Given, When, Then, And, But} from "cypress-cucumber-preprocessor/steps"
import rentPage from "../pageObjects/pages/Rent.page"
import homePage from "../pageObjects/pages/Home.page"
import navBar from "../pageObjects/components/NavigationBar"
import summaryPage from "../pageObjects/pages/Summary.page"

   let pickupDate
   let dropOffDate 
   let country 
   let city 
   let model 
   let name 
   let lastName 
   let cardNumber
   let email 

   before(() => { 
    cy.fixture('rentiers').then(list => {
        pickupDate = list.completeData.pickupDate
        dropOffDate = list.completeData.dropOffDate
        country = list.completeData.country
        city = list.completeData.city
        model = list.completeData.model
        name = list.wrongData.name
        lastName = list.wrongData.lastName
        cardNumber = list.wrongData.cardNumber
        email = list.wrongData.email
    })

   })



Given('I fill all data on the rent page',()=>{
    homePage.setPickupDate(pickupDate)
    homePage.setDropoffDate(dropOffDate)
    homePage.selectCountry(country)
    homePage.selectCity(city)
    homePage.selectModel(model) 
    
    // summaryPage.clickRentButton()
})
When('Click on the search button',()=>{
    homePage.clickSearchButton()
})
Then('Avilable car to rent list appears',()=>{
    homePage.checkIfResultListIsVisible()

})
When('Choose one Car from the list and rent it',()=>{
    homePage.selectCarAndClickRent(model)
})

Then('Details page appears',()=>{
    rentPage.validateRentForm(country,city,pickupDate,dropOffDate,model)

})
When('I click rent button',()=>{
    rentPage.clickRentButton()
})
Then('Summary page appears',()=>{
    rentPage.checkIfSummaryPageIsVisible()
})
When('I click rent button without filling any data',()=>{
    summaryPage.clickRentButton()
})
Then('Alert with information to fill mandatory data appears for each field',()=>{
    summaryPage.validateErrorMessage('Name is required')
    summaryPage.validateErrorMessage('Last name is required')
    summaryPage.validateErrorMessage('Email is required')
    summaryPage.validateErrorMessage('Card number is required')
})

When('I fill all fields with incorrect data',()=>{
    summaryPage.inputFormData(name, lastName, cardNumber, email)
})
And('I click rent button without filling any data',()=>{
    summaryPage.clickRentButton()
})

Then('Alert with information to correct mandatory data appeart for each field',()=>{
    summaryPage.validateErrorMessage('Name value is too long')
    summaryPage.validateErrorMessage('Last name value is too long')
    summaryPage.validateErrorMessage('Please provide valid email')
    summaryPage.validateErrorMessage('Card number value is too long')
})