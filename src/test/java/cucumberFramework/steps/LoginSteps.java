package cucumberFramework.steps;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

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

	@Given("^user enters valid username$")
	public void user_enters_valid_username() throws Throwable {
		System.out.println("user_enters_valid_username");
		driver.findElement(By.cssSelector("#sso-login-email-input")).sendKeys("prasannamp@hotmail.com");
	}

	@Given("^user enters valid password$")
	public void user_enters_valid_password() throws Throwable {
		System.out.println("user_enters_valid_password");
		driver.findElement(By.xpath("//input[@id='sso-login-password-input']")).sendKeys("Today@100$");
	}

	@When("^user clicks on the Login button$")
	public void user_clicks_on_the_Login_button() throws Throwable {
		System.out.println("user_clicks_on_the_Login_button");
		driver.findElement(By.xpath("//button[contains(text(),'Log in')]")).click();
	}

	@SuppressWarnings("deprecation")
	@Then("^user should be navigated to homepage$")
	public void user_should_be_navigated_to_homepage() throws Throwable {
		System.out.println("user_should_be_navigated_to_homepage");
		Thread.sleep(3000);
		String MyUser = "Prasanna";
		String usernameText = driver.findElement(By.xpath("//span[@id='loginModal']")).getText();
		System.out.println(usernameText);
		if(usernameText.equals(MyUser)){
			System.out.println("Login Successful");
		}else{
			System.out.println("Login Unsuccessful");
		}
		
		
	}
}