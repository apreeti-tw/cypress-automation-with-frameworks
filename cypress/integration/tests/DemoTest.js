import HomePage from '../../page-objects/HomePage'

describe('Demo test to start frameworks', function (){
    beforeEach(function (){
        cy.fixture('example').then(function (data){
            this.data = data
        })
    })

    it('should be able to submit the form', function () {
        const homePage = new HomePage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getName().type(this.data.name)
        homePage.getGender().select(this.data.gender)

        homePage.get2WayDataBinding().should('have.value', this.data.name)
        homePage.getName().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneur().should('be.disabled')
    })

    it('should be able to select a product', function () {
        const homePage = new HomePage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getShop().click()
        this.data.productName.forEach(product => cy.selectProduct(product))
    })
})
