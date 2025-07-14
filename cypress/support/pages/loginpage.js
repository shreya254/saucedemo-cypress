class loginPage{
    visit(){
        cy.visit("https://www.saucedemo.com/")
    }
    Username(username){
        cy.get('[data-test="username"]').type(username)
    }
    password(password){
        cy.get('[data-test="password"]').type(password)
    
    }
    login(){
        cy.get('[data-test="login-button"]').click()
        
    }
    
}
export default loginPage;