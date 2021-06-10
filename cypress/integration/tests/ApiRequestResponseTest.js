describe('API request response test', function (){
    it('should be able to make an http request and validate the response', function () {
        cy.request('POST', 'https://reqres.in/api/users',
            {
                name: "morpheus",
                job: "leader"
            }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name','morpheus')
            expect(response.body).to.have.property('job','leader')
            expect(response.body).to.have.property('id')
        })
    });
})
