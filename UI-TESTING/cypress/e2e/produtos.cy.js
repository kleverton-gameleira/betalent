/// <reference types='Cypress' />

describe('Suite de testes produtos',()=>{
     beforeEach(()=>{
        cy.login()
        cy.visit('/')
     })

     it('testes 01',()=>{
         cy.get('.inventory_item')
     })

     it('testes 01',()=>{
        cy.get('.inventory_item')
    })


    it('testes 01',()=>{
        cy.get('.inventory_item')
    })

    it('testes 01',()=>{
        cy.get('.inventory_item')
    })

    it('testes 01',()=>{
        cy.get('.inventory_item')
    })
    
    
})