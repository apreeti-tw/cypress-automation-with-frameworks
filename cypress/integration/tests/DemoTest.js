describe('Demo test to start frameworks', function (){
    before(function (){
        cy.fixture('example').then(function (data){
            this.data = data
        })
    })

    it('should be able to submit the form', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.contains('Name').next().type(this.data.name)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
    })
})
