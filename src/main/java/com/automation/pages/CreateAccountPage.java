package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(CreateAccountPage.class.getName());

    public CreateAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='radio']")
    WebElement selectTitle;

    @CacheLookup
    @FindBy(id = "customer_firstname")
    WebElement firstName;

    @CacheLookup
    @FindBy(id = "customer_lastname")
    WebElement lastName;

    @CacheLookup
    @FindBy(id = "email")
    WebElement email;

    @CacheLookup
    @FindBy(id = "passwd")
    WebElement password;

    @CacheLookup
    @FindBy(id = "firstname")
    WebElement addressFirstName;

    @CacheLookup
    @FindBy(id = "lastname")
    WebElement addressLastName;

    @CacheLookup
    @FindBy(id = "address1")
    WebElement addressLine1;

    @CacheLookup
    @FindBy(id = "city")
    WebElement addressCity;

    @CacheLookup
    @FindBy(id = "id_state")
    WebElement addressState; // dropdown

    @CacheLookup
    @FindBy(id = "postcode")
    WebElement addressPostcode;     // only 5 digits

    @CacheLookup
    @FindBy(id = "id_country")
    WebElement addressCountry;  // dropdown

    @CacheLookup
    @FindBy(id = "phone_mobile")
    WebElement mobilePhone;

    @CacheLookup
    @FindBy(id = "submitAccount")
    WebElement registerButton;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'My account')]")
    WebElement myAccountText;


    public void enterPersonalInformation(String name, String lstName, String title, String passwrd){
        clickOnElement(selectTitle, title);      // select title
        log.info("Selecting Title " + selectTitle.toString());

        sendTextToElement(firstName, name);     // Input First Name
        log.info("Entering first name " + firstName.toString());

        sendTextToElement(lastName, lstName);     // Input Last Name
        log.info("Entering Last name  " + lastName.toString());

        sendTextToElement(password, passwrd);     // Input password Name
        log.info("Entering Password  " + password.toString());

    }

    public void enterAddressDetails(String fName, String lstName,
                                    String address, String city, String state, String postcode, String mobile){
        sendTextToElement(addressFirstName, fName);      // Address first name
        log.info("Entering First Name for address  " + addressFirstName.toString());

        sendTextToElement(addressLastName, lstName);       // Address last name
        log.info("Entering Last Name for address  " + addressLastName.toString());

        sendTextToElement(addressLine1, address);       // Address
        log.info("Entering address  " + addressLine1.toString());

        sendTextToElement(addressCity, city);       // Address City name
        log.info("Entering city  " + addressCity.toString());

        selectByVisibleTextFromDropDown(addressState, state);  // Address State
        log.info("Selecting state from dropdown  " + addressState.toString());

        sendTextToElement(addressPostcode, postcode);   // Postalcode
        log.info("Entering Post code  " + addressPostcode.toString());

        sendTextToElement(mobilePhone, mobile);     // mobile number
        log.info("Entering Mobile number  " + mobilePhone.toString());
    }

    public void clickOnRegisterButton(){
        log.info("Clicking on Register button  " + registerButton.toString());
        clickOnElement(registerButton);
    }

    public void verifyMyAccountText(String text){
        log.info("Verifying 'My Account' Text  " + myAccountText.toString());
        verifyThatTextIsDisplayed(myAccountText, text);
    }

}
