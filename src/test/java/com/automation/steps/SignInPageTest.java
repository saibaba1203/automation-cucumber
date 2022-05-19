package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignInPageTest {
    @And("^I click on Sign In link$")
    public void iClickOnSignInLink() {
        new HomePage().clickOnSignInLink();
    }

    @Then("^I am on Sign In Page successfully$")
    public void iAmOnSignInPageSuccessfully() {
        new SignInPage().verifyAuthenticationMessage("Authentication");
    }

    @When("^I enter \"([^\"]*)\" in username field and \"([^\"]*)\" into password field$")
    public void iEnterInUsernameFieldAndIntoPasswordField(String userName, String password)  {
       new SignInPage().inputCredentials(userName,password);
    }

    @And("^I click on 'Sign In' button$")
    public void iClickOnSignInButton() {
        new SignInPage().clickOnSignInButton();
    }

    @Then("^I can see error message \"([^\"]*)\"$")
    public void iCanSeeErrorMessage(String errormessage)  {
       new SignInPage().verifyErrorMessage(errormessage);
    }

    @When("^I enter 'Username' in username field$")
    public void iEnterUsernameInUsernameField() {
        new SignInPage().inputEmailAddress("harry.potter@gmail.com");
    }

    @And("^I enter 'Password' in password field$")
    public void iEnterPasswordInPasswordField() {
        new SignInPage().inputPassword("Abcd1234");
    }

    @Then("^I can see 'Sign Out' link$")
    public void iCanSeeSignOutLink() {
        new SignInPage().verifySignOutLinkIsVisible();
    }

    @And("^I click on 'Sign out' link$")
    public void iClickOnSignOutLink() {
        new SignInPage().clickOnSignOutLink();
    }

    @Then("^I am able to logout successfully$")
    public void iAmAbleToLogoutSuccessfully() {
        new SignInPage().verifySignInLinkVisible();
    }
}
