import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from "../../../support/page-objects/HomePage";
import ShoppingPage from "../../../support/page-objects/ShoppingPage";
import CartPage from "../../../support/page-objects/CartPage";
import CheckoutPage from "../../../support/page-objects/CheckoutPage";

const homePage = new HomePage()
const shoppingPage = new ShoppingPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()

Given('User navigates to Home page', () => {
    cy.visit(Cypress.config("baseUrl") + Cypress.env("angularpractice"))
})

When('User selects to shop', () => {
    homePage.getShop().click()
})

When('Adds products to cart', function () {
    this.data.productName.forEach(product => cy.selectProduct(product))
})

When('Selects checkout', () => {
    shoppingPage.getCheckout().click()
    cartPage.getCheckout().click()
})

When('Enters country {string}', function () {
    checkoutPage.getCountry().type(this.data.country)
    cy.selectFromList(this.data.country)
})

When('Accepts terms and conditions', () => {
    checkoutPage.getTnC().click({force: true})
})

When('Places the order', () => {
    checkoutPage.getPurchase().click()
})

Then('The order should be placed successfully', function () {
    cy.successAlertContainsText(this.data.successfulOrderMsg)
})
