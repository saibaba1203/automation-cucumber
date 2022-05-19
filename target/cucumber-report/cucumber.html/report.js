$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/WomenCategoryPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Page",
  "description": "",
  "id": "women-category-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16758595700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027Women\u0027 tab",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTab()"
});
formatter.result({
  "duration": 5119060900,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify user should navigagte to women cagtagory page successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-navigagte-to-women-cagtagory-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on \u0027Women\u0027 page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenCategoryPageTest.iAmOnWomenPageSuccessfully()"
});
formatter.result({
  "duration": 127357000,
  "status": "passed"
});
formatter.after({
  "duration": 3145613300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on product \"\u003cProduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"\u003cQuantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"\u003cSize\u003e\" from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"\u003cColour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "Product",
        "Quantity",
        "Size",
        "Colour"
      ],
      "line": 19,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 20,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 21,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 22,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 23,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8672271500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027Women\u0027 tab",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2859813500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"M\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 3813383800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 327625000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 298234000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColour(String)"
});
formatter.result({
  "duration": 173038500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 200519700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 1807504800,
  "status": "passed"
});
formatter.after({
  "duration": 1318418000,
  "status": "passed"
});
formatter.before({
  "duration": 10754359700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027Women\u0027 tab",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTab()"
});
formatter.result({
  "duration": 6706730300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"L\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 2996940300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 188594700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 207449300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColour(String)"
});
formatter.result({
  "duration": 239993600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 287820300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 1597888600,
  "status": "passed"
});
formatter.after({
  "duration": 1443492600,
  "status": "passed"
});
formatter.before({
  "duration": 8896814100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027Women\u0027 tab",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTab()"
});
formatter.result({
  "duration": 3137223800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"S\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 2640038700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 194826000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 86338600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColour(String)"
});
formatter.result({
  "duration": 179282200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 250511100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 916652400,
  "status": "passed"
});
formatter.after({
  "duration": 1418711400,
  "status": "passed"
});
formatter.before({
  "duration": 8214334300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I click on \u0027Women\u0027 tab",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2924642500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select size \"M\" from dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Add to Cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Product added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 3231759200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iChangeQuantity(String)"
});
formatter.result({
  "duration": 194485800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategoryPageTest.iSelectSizeFromDropdown(String)"
});
formatter.result({
  "duration": 175680800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnColour(String)"
});
formatter.result({
  "duration": 181298800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 154424100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.productAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 1951941500,
  "status": "passed"
});
formatter.after({
  "duration": 1380715700,
  "status": "passed"
});
});