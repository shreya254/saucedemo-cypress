
import loginPage from "../support/pages/loginpage";


const LoginPage = new loginPage();

describe('login testcase',()=>{
    it('login with valid cred',()=>{
        cy.fixture('user').then((data)=>{
            LoginPage.visit()
        LoginPage.Username(data.username)
        LoginPage.password(data.password)
        LoginPage.login()
        cy.url().should('include', '/inventory.html')
    })
        })
        
})
