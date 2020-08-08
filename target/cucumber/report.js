$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "existing users will be able to login into their account using valid credentials",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Log Into Account with valid credentials",
  "description": "",
  "id": "login-feature;log-into-account-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user navigates to AirAsia website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters valid username",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters valid password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user should be navigated to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_AirAsia_website()"
});
formatter.result({
  "duration": 159238237,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 6051,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_valid_username()"
});
formatter.result({
  "duration": 119157,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_valid_password()"
});
formatter.result({
  "duration": 105659,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_Login_button()"
});
formatter.result({
  "duration": 297426,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_navigated_to_homepage()"
});
formatter.result({
  "duration": 81455,
  "status": "passed"
});
});