describe('Demo test to start frameworks', function (){
    before(function (){
        cy.visit('https://rahulshettyacademy.com/angularpractice/   ')
    })

    it('should be able to submit the form', function () {
        cy.contains('Name').next().type('Bob')
        cy.get('#exampleFormControlSelect1').select('Female')
    })
})
