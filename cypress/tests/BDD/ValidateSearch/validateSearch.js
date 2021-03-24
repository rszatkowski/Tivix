import {Given, When, Then, And, But} from "cypress-cucumber-preprocessor/steps"
import homePage from "../pageObjects/pages/Home.page"

   let pickupDate
   let dropOffDate 
   let country 
   let city 
   let model 
  

   before(() => { 
    cy.fixture('rentiers').then(list => {
        pickupDate = list.wrongData.pickupDate
        dropOffDate = list.wrongData.dropOffDate
        country = list.completeData.country
        city = list.completeData.city
        model = list.completeData.model
    })

   })



Given('I fill all data on the rent page except dates',()=>{
    homePage.selectCountry(country)
    homePage.selectCity(city)
    homePage.selectModel(model)     
})
When('Click on the search button',()=>{
    homePage.clickSearchButton()
})
Then('Message with infomation to fill pickup and drop dates appears',()=>{
    homePage.validateMissingDate()
})
When('I fill all data on the rent page except pick up date',()=>{
    cy.openHomePage()
    homePage.selectCountry(country)
    homePage.selectCity(city)
    homePage.selectModel(model) 
    homePage.setDropoffDate(dropOffDate)
})

And('Click on the search button',()=>{
    homePage.clickSearchButton()
})

Then('Message with infomation to fill pickup and drop dates appears',()=>{
    homePage.validateMissingDate()
})

When('I fill all data on the rent page except dropoff date',()=>{
    cy.openHomePage()
    homePage.selectCountry(country)
    homePage.selectCity(city)
    homePage.selectModel(model) 
    homePage.setDropoffDate(pickupDate)
})

And('Click on the search button',()=>{
    homePage.clickSearchButton()
})

Then('Message with infomation to fill pickup and drop dates appears',()=>{
    homePage.validateMissingDate()
})

When('I fill all data on the rent page and pick up date will be greater than dropoff date',()=>{
    cy.openHomePage()
    homePage.selectCountry(country)
    homePage.selectCity(city)
    homePage.selectModel(model) 
    homePage.setDropoffDate(pickupDate)
    homePage.setPickupDate(dropOffDate)
})

And('Click on the search button',()=>{
    homePage.clickSearchButton()
})

Then('Message with infomation to correct a valid date appears',()=>{
    homePage.validateWrongDate()
})