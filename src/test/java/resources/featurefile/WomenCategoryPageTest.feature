Feature: Women Category Page

  Background: I am on Homepage
    And I click on 'Women' tab

  @Smoke @Regression
  Scenario: Verify user should navigagte to women cagtagory page successfully
    Then I am on 'Women' page successfully

  @Regression
  Scenario Outline: Verify user should add product to the cart successfully
    When  I click on product "<Product>"
    And   I change quantity "<Quantity>"
    And   I select size "<Size>" from dropdown
    And   I click on colour "<Colour>"
    And   I click on 'Add to Cart' button
    Then  Product added to cart successfully
    Examples:
      |           Product                       | Quantity  | Size  | Colour  |
      | Blouse                                  |     2     |  M    | White   |
      | Printed Dress                           |     3     |  L    | Orange  |
      | Printed Chiffon Dress                   |     4     |  S    | Green   |
      | Printed Summer Dress with Price $28.98  |     2     |  M    | Blue    |
