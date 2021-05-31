Feature: Place Order

  Scenario: User should be able to place an order
    Given User navigates to Home page
    When User selects to shop
    And Adds products to cart
    And Selects checkout
    And Enters country "India"
    And Accepts terms and conditions
    And Places the order
    Then The order should be placed successfully


  Scenario: User should be able to fill the form
    Given User navigates to Home page
    When User fills the form
    Then Two way data binding must have same value as name
    And Name should have minimum length of 2
    And Entrepreneurship should be disabled
