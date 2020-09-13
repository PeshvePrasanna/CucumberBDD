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
  "duration": 4289895203,
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
  "name": "user enters valid username and password",
  "rows": [
    {
      "cells": [
        "prasannamp@hotmail.com",
        "Today@100$"
      ],
      "line": 10
    }
  ],
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
formatter.step({
  "line": 13,
  "name": "user clicks on Flight Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "selects From as Bengaluru",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "selects to as Pune",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "selects as one way trip",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "selects date as 31 August",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Search Flight button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should be navigated to Flight results page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_AirAsia_website()"
});
formatter.result({
  "duration": 30444288517,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 56561172,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@id\u003d\u0027loginModal\u0027]\"}\n  (Session info: chrome\u003d84.0.4147.135)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027MINDTREE362\u0027, ip: \u0027172.18.50.154\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\MINDTR~1\\AppData\\Local\\Temp\\scoped_dir8220_1130408428}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50756}, acceptInsecureCerts\u003dfalse, browserVersion\u003d84.0.4147.135, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: e06c963d7af2f6b96fb2537808d263d0\n*** Element info: {Using\u003dxpath, value\u003d//span[@id\u003d\u0027loginModal\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat cucumberFramework.steps.LoginSteps.user_clicks_on_login_button(LoginSteps.java:42)\r\n\tat ✽.And user clicks on login button(login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.user_enters_valid_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_should_be_navigated_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Flight_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.selects_From_as_Bengaluru()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.selcts_to_as_Pune()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.selects_as_one_way_trip()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "31",
      "offset": 16
    }
  ],
  "location": "LoginSteps.selects_date_as_August(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Confirm_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Search_Flight_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_should_be_navigated_to_Flight_results_page()"
});
formatter.result({
  "status": "skipped"
});
});