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

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement women;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInLink;

    @CacheLookup
    @FindBy(xpath = "//img[@alt='My Store']")
    WebElement logoLocator;


    public void clickOnWomenTab(){
        clickOnElement(women);
        log.info("Clicking on Women tab  " + women.toString());
    }

    public void clickOnSignInLink(){
        clickOnElement(signInLink);
        log.info("Clicking on Sign In Link  " + signInLink.toString());
    }

    public void verifyLogoisVisible(){
        verifyThatElementIsDisplayed(logoLocator);
        log.info("Verifying logo is visible  " + logoLocator.toString());
    }

    // This method will select top menu categroy
    public void selectMenu(String menu) {
        log.info("Clicking on top menu tab  " + menu.toString());
        List<WebElement> topMenuNames = driver.findElements(By.xpath("//div[@id='block_top_menu']//li"));
        for (WebElement names : topMenuNames) {
            if (names.getText().equalsIgnoreCase(menu)) {
                names.click();
                break;
            }
        }
    }

}
