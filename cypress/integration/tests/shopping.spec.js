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
        let price = '';
        cy.get('#Description h2').then(($el) => {
            price = $el.text().split('\n')[0].trim()
            cy.log("Product price ---------> "+price)
        })
        cy.get('button[name="save_to_cart"]').click()

        //go to cart
        cy.get('#shoppingCartLink').click()

        //checkout
        cy.get('#checkOutButton').click()

        //verify price and login to place order
        cy.wait(5000) //wait for the cart mini window to close
        cy.get('.roboto-bold.totalText.ng-binding span').then(($el) => {
            expect($el.text()).to.eq(price)
        })
        cy.get('[name="usernameInOrderPayment"]').type('testautomation')
        cy.get('[name="passwordInOrderPayment"]').type('Test@12345')
        cy.get('#login_btnundefined').click()

        //click next in shipping details
        cy.get('#next_btn').click('bottom')

        //click on pay now in payment method and verify message
        cy.get('[name="pay_now_btn_MasterCredit"]').click()
        cy.get('#orderPaymentSuccess h2 span').should('have.text', 'Thank you for buying with Advantage')

        //log order details
        cy.wait(1000)
        let orderNo = ''
        cy.get('#orderNumberLabel').then(($el) => {
            orderNo = $el.text()
        })
        cy.log("Order No. ---------> "+orderNo)
    })
})
