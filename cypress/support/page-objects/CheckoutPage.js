class CheckoutPage{
    getCountry(){
        return cy.get('#country')
    }

    getTnC(){
        return cy.get('#checkbox2')
    }

    getPurchase(){
        return cy.contains('Purchase')
    }
}

export default CheckoutPage
