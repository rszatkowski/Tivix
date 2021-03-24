Feature: Login Feature
 
Scenario: Rent a car with using correct data
 

Given I fill all data on the rent page
When Click on the search button
Then Avilable car to rent list appears
When Choose one Car from the list and rent it
Then Details page appears
When I click rent button 
Then Summary page appears
When I click rent button without filling any data
Then Alert with information to fill mandatory data appears for each field
When I fill all fields with incorrect data
And I click rent button
Then Alert with information to correct mandatory data appeart for each field