Feature: Rent Car
 
Scenario: Verify the rent car process
 

Given I fill all data on the rent page
When Click on the search button
Then Avilable car to rent list appears
When Choose one Car from the list and rent it
Then Details page appears
When I click rent button 
Then Summary page appears
When I fill all the data on the summary page
And I click rent button again
Then Window with rent confirmation appears
