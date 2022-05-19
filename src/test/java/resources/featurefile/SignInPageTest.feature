Feature: Sign In page

  Background: I am on homepage
    And I click on Sign In link

  @Smoke @Regression
  Scenario: User should navigate to sign in page successfully
    Then  I am on Sign In Page successfully

  @Sanity @Regression
  Scenario Outline: Verify the error message with invalid credentials
    When  I enter "<Username>" in username field and "<Password>" into password field
    And   I click on 'Sign In' button
    Then  I can see error message "<message>"
    Examples:
      | Username       | Password | message                    |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |


  @Regression
  Scenario: Verify user should login successfully with valid credentials
    When  I enter 'Username' in username field
    And   I enter 'Password' in password field
    And   I click on 'Sign In' button
    Then  I can see 'Sign Out' link

  @Regression
  Scenario: Verify user should logout successfully
    When  I enter 'Username' in username field
    And   I enter 'Password' in password field
    And   I click on 'Sign In' button
    And   I click on 'Sign out' link
    Then  I am able to logout successfully

