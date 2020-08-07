package cucumberFramework.steps;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	@Given("^user navigates to AirAsia website$")
	public void user_navigates_to_AirAsia_website() throws Throwable {
		System.out.println("user_navigates_to_AirAsia_website");
	    
	}

	@Given("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    System.out.println("user_clicks_on_login_button");
	    
	}

	@Given("^user enters valid username$")
	public void user_enters_valid_username() throws Throwable {
		System.out.println("user_enters_valid_username");
	    	}

	@Given("^user enters valid password$")
	public void user_enters_valid_password() throws Throwable {
		System.out.println("user_enters_valid_password");
	    
	}

	@When("^user clicks on the Login button$")
	public void user_clicks_on_the_Login_button() throws Throwable {
		System.out.println("user_clicks_on_the_Login_button");
	    
	}

	@Then("^user should be navigated to homepage$")
	public void user_should_be_navigated_to_homepage() throws Throwable {
	    System.out.println("user_should_be_navigated_to_homepage");
	    
	}
}
