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
formatter.before({
  "duration": 4007505929,
  "status": "passed"
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
  "duration": 4885829918,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 160681147,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_valid_username()"
});
formatter.result({
  "duration": 1014119580,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_valid_password()"
});
formatter.result({
  "duration": 385798500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_Login_button()"
});
formatter.result({
  "duration": 217630508,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_navigated_to_homepage()"
});
formatter.result({
  "duration": 5293935353,
  "status": "passed"
});
});