//Comando do login
Cypress.Commands.add('login',(
    user = Cypress.env('usuario_padrao'),
    pass = Cypress.env('senha_padrao')
)=>{
    cy.session('user',()=>{
        cy.visit('/')
        cy.get('[data-test="username"]').type(user)
        cy.get('[data-test="password"]').type(pass,{log:false})
        cy.get('[data-test="login-button"]').click()
    })
})
