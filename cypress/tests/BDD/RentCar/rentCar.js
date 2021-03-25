import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import rentPage from "../pageObjects/pages/Rent.page"
import homePage from "../pageObjects/pages/Home.page"
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
        name = list.completeData.name
        lastName = list.completeData.lastName
        cardNumber = list.completeData.cardNumber
        email = list.completeData.email
    })

   })

Given('I fill all data on the rent page',()=>{
    homePage.setPickupDate(pickupDate)
    homePage.setDropoffDate(dropOffDate)
    homePage.selectCountry(country)
    homePage.selectCity(city)
    homePage.selectModel(model) 
    
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

When('I fill all the data on the summary page',()=>{
    summaryPage.inputFormData(name,lastName,cardNumber,email)
})

And('I click rent button again',()=>{
    summaryPage.clickRentButton()
})

Then('Window with rent confirmation appears',()=>{
    summaryPage.confirmRentProcess()
})

