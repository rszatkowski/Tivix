Feature: Validate Search
 
Scenario: Verify the search input form
 

Given I fill all data on the rent page except dates
When Click on the search button
Then Message with infomation to fill pickup and drop dates appears
When I fill all data on the rent page except pick up date
And Click on the search button
Then Message with infomation to fill pickup and drop dates appears
When I fill all data on the rent page except dropoff date
And Click on the search button
Then Message with infomation to fill pickup and drop dates appears
When I fill all data on the rent page and pick up date will be greater than dropoff date
And Click on the search button
Then Message with infomation to correct a valid date appears