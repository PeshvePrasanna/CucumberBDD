@tag
Feature: Login Feature
	existing users will be able to login into their account using valid credentials

  @tag1
  Scenario: Log Into Account with valid credentials
    Given user navigates to AirAsia website
    And user clicks on login button
    And user enters valid username and password 
     |prasannamp@hotmail.com|Today@100$|
    When user clicks on the Login button
    Then user should be navigated to homepage
    
    