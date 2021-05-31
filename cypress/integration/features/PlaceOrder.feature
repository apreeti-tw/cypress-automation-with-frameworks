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
