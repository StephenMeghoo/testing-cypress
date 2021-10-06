/// <reference types="cypress" />

// const token = ''


describe('Samples', function(){
    
    /* before(() => {
 
         cy.viewport(1280, 720)
         cy.then(() => {
             window.localStorage.setItem('__auth__token', token)
         })
         
     })
     */
    
     beforeEach(() => {
         cy.viewport(1280, 720)
         
     })
     
 
     it('Web Page loads; is Functional', function(){
 
         cy.visit('http://localhost:3000/user')
    
     })
 
 
     it('Test Login Page Elements & Functionality', function(){
         
         
         cy.get('[placeholder="Username"]').type('sample4@mail.com')
         
     })
 
 })