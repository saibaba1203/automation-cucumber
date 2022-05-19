package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class SignInPage extends Utility {

    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    public SignInPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Authentication')]")
    WebElement authenticationMessage;

    @CacheLookup
    @FindBy(id = "email")
    WebElement emailAddressField;

    @CacheLookup
    @FindBy(id = "passwd")
    WebElement passwordField;

    @CacheLookup
    @FindBy(id = "SubmitLogin")
    WebElement signInButton;

    @CacheLookup
    @FindBy(id = "SubmitCreate")
    WebElement createAccountButton;

    @CacheLookup
    @FindBy(id = "email_create")
    WebElement createAccountEmail;

    @CacheLookup
    @FindBy(xpath = "//li[contains(text(),'An email address required.')]")
    WebElement emailRequiredError;

    @CacheLookup
    @FindBy(xpath = "//li[contains(text(),'Password is required.')]")
    WebElement passwordRequiredError;

    @CacheLookup
    @FindBy(xpath = "//li[contains(text(),'Invalid email address.')]")
    WebElement invalidEmail;

    @CacheLookup
    @FindBy(xpath = "//li[contains(text(),'Authentication failed.')]")
    WebElement authenticationFailed;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement logoutButton;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInLink;


    public void verifyAuthenticationMessage(String text) {
        verifyThatTextIsDisplayed(authenticationMessage, text);
        log.info("Verifying Authenticaion message  " + authenticationMessage.toString());
    }

    public void inputEmailAddress(String text) {
        sendTextToElement(emailAddressField, text);
        log.info("Entering email address  " + emailAddressField.toString());
    }

    public void inputPassword(String text) {
        sendTextToElement(passwordField, text);
        log.info("Entering password  " + passwordField.toString());
    }

    public void clickOnSignInButton() {
        clickOnElement(signInButton);
        log.info("Clicking on Sign in button  " + signInButton.toString());
    }

    public void verifySignOutLinkIsVisible() {
        verifyThatElementIsDisplayed(logoutButton);
        log.info("Verifying Sign Out link is visible  " + logoutButton.toString());
    }

    public void clickOnSignOutLink() {
        clickOnElement(logoutButton);
        log.info("Clicking no Logout button  " + logoutButton.toString());
    }

    public void verifySignInLinkVisible() {
        verifyThatElementIsDisplayed(signInLink);
        log.info("Verifying Sign In link is visible  " + signInLink.toString());
    }

    public void inputEmailToCreateAccount(String text) {
        sendTextToElement(createAccountEmail, text);
        log.info("Entering email to create account  " + createAccountEmail.toString());
    }

    public void clickOnCreateAccountButton() {
        clickOnElement(createAccountButton);
        log.info("Clicking on create account button  " + createAccountButton.toString());
    }

    public void inputCredentials(String username, String password) {
        sendTextToElement(emailAddressField, username);
        log.info("Entering Username " + emailAddressField.toString());

        sendTextToElement(passwordField, password);
        log.info("Entering Password  " + passwordField.toString());
    }

    // This method will get error message
    public void verifyErrorMessage(String errorMessage) {
        log.info("Verifying error message " + errorMessage.toString());
        List<WebElement> topMenuNames = driver.findElements(By.xpath("//body/div[@id='page']/div[@class='columns-container']/div[@id='columns']/div[@class='row']/div[@id='center_column']/div[1]"));
        for (WebElement names : topMenuNames) {
            if (names.getText().equalsIgnoreCase(errorMessage)) {
                break;
            }
        }
    }
}
