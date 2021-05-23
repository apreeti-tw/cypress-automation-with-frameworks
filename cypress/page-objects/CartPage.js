class CartPage{
    getCheckout(){
        return cy.contains('Checkout')
    }

    getProductTotal(){
        return cy.get("tbody tr td:nth-child(4) strong")
    }

    getCartTotal(){
        return cy.get('h3 strong')
    }
}

export default CartPage
