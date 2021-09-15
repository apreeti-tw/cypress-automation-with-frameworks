describe('Buy a product', function (){
    let example
    before(function (){
        cy.fixture('example.json').then(function (data){
            example = data
        })
    })

    it('move to speakers', () => {
        //visit site
        cy.visit('https://www.advantageonlineshopping.com/#/')

        //go to speakers page
        cy.get('#speakersImg').click()

        //select a speaker
        cy.contains(example.singleproduct).click()

        //capture price in description and add product to cart
        cy.get('button[name="save_to_cart"]').click()

        //go to cart
        cy.get('#shoppingCartLink').click()

        //checkout
        cy.get('#checkOutButton').click()

        //verify price and login to place order
        cy.get('[name="usernameInOrderPayment"]').type('testautomation')
        cy.get('[name="passwordInOrderPayment"]').type('Test@12345')
        cy.get('#login_btnundefined').click()

        //click next in shipping details
        cy.get('#next_btn').click('bottom')

        //click on pay now in payment method and verify message
        cy.get('[name="pay_now_btn_MasterCredit"]').click()

        cy.get('#orderPaymentSuccess h2 span').should('be.visible')
        cy.get('#orderPaymentSuccess h2 span').should('have.text', 'Thank you for buying with Advantage')

        //log order details
        let orderNo = ''
        cy.get('#orderNumberLabel').then((el) => {
            orderNo = el.text()
            cy.log("Order No. ---------> "+orderNo)
        })
    })
})
