package cucumberFramework.steps;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	WebDriver driver;

	@Before()
	public void Setup() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\mindtree813\\Desktop\\CucumberBDD\\CucumberBDD\\src\\test\\java\\cucumberFramework\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		//this.driver = new FirefoxDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(80, TimeUnit.SECONDS);
	}

	@Given("^user navigates to AirAsia website$")
	public void user_navigates_to_AirAsia_website() throws Throwable {
		System.out.println("user_navigates_to_AirAsia_website");
		driver.get("https://www.airasia.com/en/gb");
	}

	@Given("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		System.out.println("user_clicks_on_login_button");
		driver.findElement(By.xpath("//span[@id='loginModal']")).click();
	}

	// @Given("^user enters valid username$")
	// public void user_enters_valid_username() throws Throwable {
	// System.out.println("user_enters_valid_username");
	// driver.findElement(By.cssSelector("#sso-login-email-input")).sendKeys("prasannamp@hotmail.com");
	// }
	//
	// @Given("^user enters valid password$")
	// public void user_enters_valid_password() throws Throwable {
	// System.out.println("user_enters_valid_password");
	// driver.findElement(By.xpath("//input[@id='sso-login-password-input']")).sendKeys("Today@100$");
	// }
	@Given("^user enters valid username and password$")
	public void user_enters_valid_username_and_password(DataTable arg1) throws Throwable {
		List<List<String>> data = arg1.raw();
		driver.findElement(By.cssSelector("#sso-login-email-input")).sendKeys(data.get(0).get(0));
		driver.findElement(By.xpath("//input[@id='sso-login-password-input']")).sendKeys(data.get(0).get(1));

	}

	@When("^user clicks on the Login button$")
	public void user_clicks_on_the_Login_button() throws Throwable {
		System.out.println("user_clicks_on_the_Login_button");
		driver.findElement(By.xpath("//button[contains(text(),'Log in')]")).click();
	}

	@Then("^user should be navigated to homepage$")
	public void user_should_be_navigated_to_homepage() throws Throwable {
		System.out.println("user_should_be_navigated_to_homepage");
		Thread.sleep(3000);
		String expectedTitle = "Book Cheap Flights, Hotels & Activities Online | AirAsia";
		String actualTitle = driver.getTitle();
		if (actualTitle.equals(expectedTitle)) {
			System.out.println("Login Successful");
		} else {
			System.out.println("Login Unsuccessful");
		}
	}

	@Then("^user clicks on Flight Tab$")
	public void user_clicks_on_Flight_Tab() throws Throwable {
		Thread.sleep(30000);
		WebElement flightBtn = driver.findElement(By.xpath("//p[contains(text(),'Flights')]"));
		Actions actions = new Actions(driver);
		actions.moveToElement(flightBtn).click().perform();
	}

	@Then("^selects From as Bengaluru$")
	public void selects_From_as_Bengaluru() throws Throwable {
		System.out.println("From : Bangalore");	
	}

	@Then("^selects to as Pune$")

	public void selcts_to_as_Pune() throws Throwable {
		driver.findElement(By.xpath("//*[@class='css-11aywtz r-141fyjm r-1m5ju6n r-1b43r93 r-majxgm r-1d7gupr r-1ny4l3l r-buy8e9 r-1j3t67a r-1jr0yug r-bnwqim'][@aria-label='To  edit  required  has auto complete']")).sendKeys("Pune");
		driver.findElement(By.xpath("//div[contains(text(),'From')]")).sendKeys(Keys.ARROW_DOWN);
		driver.findElement(By.xpath("//div[contains(text(),'From')]")).sendKeys(Keys.ENTER);
		System.out.println("To : Pune");
	}

	@Then("^selects as one way trip$")
	public void selects_as_one_way_trip() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^selects date as (\\d+) August$")
	public void selects_date_as_August(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^user clicks on Confirm button$")
	public void user_clicks_on_Confirm_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^user clicks on Search Flight button$")
	public void user_clicks_on_Search_Flight_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^user should be navigated to Flight results page$")
	public void user_should_be_navigated_to_Flight_results_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}
}