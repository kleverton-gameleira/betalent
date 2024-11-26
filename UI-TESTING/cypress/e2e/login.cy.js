/// <reference types='Cypress' />

describe('Suite de testes funcionalidade de Login',()=>{
  beforeEach(()=>{
    cy.visit('/')
  })

   const user_faker ="tester"
   const senha_faker =  "123456"
   const user_bloked = "locked_out_user"
   const user_problem = "problem_user"
   const user_padrao = Cypress.env('usuario_padrao')
   const senha_padrao = Cypress.env('senha_padrao')


   it('Login de Usuário - campo usuario sem preenchimento',()=>{

    cy.get('[data-test="password"]').type(senha_padrao)

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain','Epic sadface: Username is required')

  })


  it('Login de Usuário - campo senha sem preenchimento',()=>{

    cy.get('[data-test="username"]').type(user_padrao)

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain','Epic sadface: Password is required')

  })

  it('Login de Usuário - usuario não cadastrado',()=>{

    cy.get('[data-test="username"]').type(user_faker)

    cy.get('[data-test="password"]').type(senha_padrao)

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain','Epic sadface: Username and password do not match any user in this service')

  })

  it('Login de Usuário - senha inválida',()=>{

    cy.get('[data-test="username"]').type(user_padrao)

    cy.get('[data-test="password"]').type(senha_faker)

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain','Epic sadface: Username and password do not match any user in this service')

  })

  it('Login de Usuário',()=>{

    cy.get('[data-test="username"]').type(user_padrao)

    cy.get('[data-test="password"]').type(senha_padrao)

    cy.get('[data-test="login-button"]').click()

    cy.url().should('eq',`${Cypress.config('baseUrl')}inventory.html`)

    cy.get('div.app_logo').contains("Swag Labs").should('be.visible')
    
  })

  it('Login - usuario bloqueado',()=>{
    
    cy.get('[data-test="username"]').type(user_bloked)

    cy.get('[data-test="password"]').type(senha_padrao)

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain','Epic sadface: Sorry, this user has been locked out.')

  })

  it.only('Logout',()=>{

    cy.get('[data-test="username"]').type(user_padrao)

    cy.get('[data-test="password"]').type(senha_padrao)

    cy.get('[data-test="login-button"]').click()

    cy.get('.bm-burger-button ').click()

    cy.get('[data-test="logout-sidebar-link"]').click()

    cy.get('.login_credentials_wrap-inner').should('be.visible')
    
  })

})