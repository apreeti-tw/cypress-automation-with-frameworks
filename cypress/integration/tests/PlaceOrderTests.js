import HomePage from '../../page-objects/HomePage'
import ShoppingPage from '../../page-objects/ShoppingPage'
import CartPage from "../../page-objects/CartPage";
import CheckoutPage from "../../page-objects/CheckoutPage"

describe('Place Order Test', function (){
    beforeEach(function (){
        cy.fixture('example').then(function (data){
            this.data = data
        })
    })

    it('should be able to place an order', function () {
        const homePage = new HomePage()
        const shoppingPage = new ShoppingPage()
        const cartPage = new CartPage()
        const checkoutPage = new CheckoutPage()

        cy.visit(Cypress.config("baseUrl"))
        homePage.getShop().click()
        this.data.productName.forEach(product => cy.selectProduct(product))
        shoppingPage.getCheckout().click()
        cartPage.getCheckout().click()
        checkoutPage.getCountry().type(this.data.country)
        cy.selectFromList(this.data.country)
        checkoutPage.getTnC().click({force: true})
        checkoutPage.getPurchase().click()
        cy.successAlertContainsText(this.data.successfulOrderMsg)
    });
})
