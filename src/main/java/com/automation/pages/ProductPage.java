package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductPage extends Utility {

    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {PageFactory.initElements(driver, this);}

    @CacheLookup
    @FindBy(id = "quantity_wanted")
    WebElement quantity;

    @CacheLookup
    @FindBy(id = "group_1")
    WebElement selectSize;

    @CacheLookup
    @FindBy(className = "attribute_list")
    WebElement color;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Add to cart')]")
    WebElement addToCartButton;

    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement popUpDisplay;

    @CacheLookup
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeButton;

    public void addProductAttribute(String qty, String size, String colour) {
        sendKeysToElement(quantity, Keys.BACK_SPACE + qty);
        selectByVisibleTextFromDropDown(selectSize, size);
        clickOnElement(color, colour);
    }

    public void changeQuantity(String qty){
        sendKeysToElement(quantity, Keys.BACK_SPACE+ qty);
        log.info("Changing quantity  " + quantity.toString());
    }

    public void selectSize(String size){
        selectByVisibleTextFromDropDown(selectSize, size);
        log.info("Selecting size from dropdown  " + selectSize.toString());
    }

    public void clickOnColour(String colour){
        clickOnElement(color, colour);
        log.info("Clicking on colour  " + color.toString());
    }

    public void clickOnAddToCartButton(){
        clickOnElement(addToCartButton);
        log.info("Clicking on Add to cart button  " + addToCartButton.toString());
    }

    public void verifyProductAddedToCartMessage(String text){
        verifyThatTextIsDisplayed(popUpDisplay, text);
        log.info("Verifying product added to cart message  " + popUpDisplay.toString());
    }

    public void clickOnCloseButton(){
        clickOnElement(closeButton);
        log.info("Clicking on close button on pop up  " + closeButton.toString());
    }

}
