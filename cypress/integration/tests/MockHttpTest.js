describe('Mock request/response tests', function (){
    it('should mock http response to get results', function () {
        cy.intercept(
            'GET',
            '/Library/GetBook.php?AuthorName=shetty', {
                statusCode: 200,
                body:[{"book_name":"RestAssured with Java","isbn":"RSU","aisle":"2301"}]
            }).as('getBooks')
        cy.visit('/angularAppdemo')
        cy.get('.btn-primary').click()
        cy.wait('@getBooks').should(({request, response}) => {
            cy.get('tbody tr th').should('have.length', response.body.length)
        })
        cy.get('p').should('have.text', 'Sorry we have only one book available')
    });
})
