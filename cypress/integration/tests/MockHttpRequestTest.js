describe('Mock Http Request Test', function (){
    it('should be able to mock http request to get a 403 response', function () {
        cy.intercept(
            'GET',
            '/Library/GetBook.php?AuthorName=shetty',
            (req => {
                req.url = '/Library/GetBook.php?AuthorName=malhotra'
                req.continue((res => {
                    expect(res.statusCode).to.equal(403)
                }))
            })).as('mockRequest')
        cy.visit('/angularAppdemo')
        cy.get('.btn-primary').click()
        cy.wait('@mockRequest')
    })
})
