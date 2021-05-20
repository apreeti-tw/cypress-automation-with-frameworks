class HomePage{
    getName() {
        return cy.contains('Name').next()
    }

    getGender(){
        return cy.get('#exampleFormControlSelect1')
    }

    get2WayDataBinding(){
        return cy.contains('Two-way Data Binding example').children('input')
    }

    getEntrepreneur(){
        return cy.get('#inlineRadio3')
    }

    getShop(){
        return cy.contains('Shop')
    }
}

export default HomePage
