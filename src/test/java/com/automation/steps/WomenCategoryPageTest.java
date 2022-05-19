package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WomenCategoryPageTest {
    @And("^I click on 'Women' tab$")
    public void iClickOnWomenTab() {
        new HomePage().selectMenu("Women");
    }

    @Then("^I am on 'Women' page successfully$")
    public void iAmOnWomenPageSuccessfully() {
        new WomenCategoryPage().verifyWomenText("Women");
    }

    @When("^I click on product \"([^\"]*)\"$")
    public void iClickOnProduct(String product)  {
        new WomenCategoryPage().clickOnProduct(product);
    }

    @And("^I change quantity \"([^\"]*)\"$")
    public void iChangeQuantity(String quantity)  {
        new ProductPage().changeQuantity(quantity);
    }

    @And("^I select size \"([^\"]*)\" from dropdown$")
    public void iSelectSizeFromDropdown(String size)  {
        new ProductPage().selectSize(size);
    }

    @And("^I click on colour \"([^\"]*)\"$")
    public void iClickOnColour(String colour)  {
        new ProductPage().clickOnColour(colour);
    }

    @And("^I click on 'Add to Cart' button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().clickOnAddToCartButton();
    }

    @Then("^Product added to cart successfully$")
    public void productAddedToCartSuccessfully() {
        new ProductPage().verifyProductAddedToCartMessage("Product successfully added to your shopping cart");
        new ProductPage().clickOnCloseButton();
    }
}
