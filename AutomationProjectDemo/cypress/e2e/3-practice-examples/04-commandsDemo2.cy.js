
/// <reference types ="cypress" />

describe('command checks' , ()=>{


it('test techlift menu', ()=>{
    cy.visit('https://test.techlift.in/')

    cy.get('#navbarSupportedContent')
        .find('ul li')
        .eq(1).should('contain', 'Blog');
})

it('test to check parent element' ,  ()=>{

    cy.visit('https://test.techlift.in/login#login');
    cy.wait(5000);
    cy.get('.form-signin.form-login')
        .parent().invoke('attr', 'class').should('contain', 'login-content');
})
it('test  menu items', ()=>{
    cy.visit('https://test.techlift.in/')

    cy.get('#navbarSupportedContent')
        .find('ul').first().find('li')
            .should('have.length', 3)
})

})