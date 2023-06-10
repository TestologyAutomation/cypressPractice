/// <reference types='cypress'/>

// describe is used for grouping test cases
describe('basics of cypress', ()=>{
    // IT block it for creating test cases
    it.only('opening a website', ()=>{
        
        cy.visit('https://www.google.com/');
        cy.wait(5000);
        // just an example about expect (validation technique)
        expect(true).to.equal(true);
        cy.wait(5000);
        // you can type , and at the same time hit enter aftr the type
        cy.get('textarea[title="Search"][type="search"]')
            .type('nitesh pune linkedin {enter}');

    })

  /*  Visit: https://example.cypress.io
     Find the element with content: type
     Click on it
    Get the URL
   Assert it includes: /commands/actions
 Get the input with the action-email data-testid
Type fake@email.com into the input
Assert the input reflects the new value*/

    it('example click', ()=>{

        cy.visit('https://example.cypress.io/');
        // you can find element by text through contains
        cy.contains('type').click();
        cy.wait(5000);
        // should function has lot of option for validation
        // here we are checking url should include a particular text
        cy.url().should('include','/commands/actions');

        cy.get('#email1').type('nitesh@testology.com');
        cy.get('.action-email').should('have.value', 'fake@email.com')
    })

})