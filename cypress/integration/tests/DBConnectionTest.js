import HomePage from "../../support/page-objects/HomePage";

describe('DB connection demo', function (){
    it('should be able to read data fetched from the db', function () {
        const homePage = new HomePage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.sqlServer("select book_name from library").then(function (resultSet){
            console.log(resultSet[1][0])
        })
        homePage.getName().type("somename")
        homePage.getGender().select("Female")
    })
})
