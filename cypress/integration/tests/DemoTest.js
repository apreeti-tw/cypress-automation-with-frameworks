describe('Demo test to start frameworks', function (){
    beforeEach(function (){
        cy.fixture('example').then(function (data){
            this.data = data
        })
    })

    it('should be able to submit the form', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.contains('Name').next().type(this.data.name)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)

        cy.contains('Two-way Data Binding example').children('input').should('have.value', this.data.name)
        cy.contains('Name').next().should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
    })

    it('should be able to select a product', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.contains('Shop').click()
        this.data.productName.forEach(product => cy.selectProduct(product))
    })
})
