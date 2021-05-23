import HomePage from '../../support/page-objects/HomePage'
import ShoppingPage from '../../support/page-objects/ShoppingPage'
import CartPage from "../../support/page-objects/CartPage";
import CheckoutPage from "../../support/page-objects/CheckoutPage"

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

        cy.visit(Cypress.config("baseUrl") + Cypress.env("angularpractice"))
        homePage.getShop().click()
        this.data.productName.forEach(product => cy.selectProduct(product))
        shoppingPage.getCheckout().click()
        let sum = 0
        let cartTotal

        cartPage.getProductTotal().each(($el, index, $list) => {
            sum = Number(sum) + Number($el.text().split(" ")[1].trim())
        }).then(() => {
            cartPage.getCartTotal().then(el => {
                cartTotal = Number(el.text().split(" ")[1].trim())
                expect(sum).to.eql(cartTotal)
            })
        })

        cartPage.getCheckout().click()
        checkoutPage.getCountry().type(this.data.country)
        cy.selectFromList(this.data.country)
        checkoutPage.getTnC().click({force: true})
        checkoutPage.getPurchase().click()
        cy.successAlertContainsText(this.data.successfulOrderMsg)
    });
})
