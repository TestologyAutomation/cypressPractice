/// <reference types='cypress' />

describe('action test suite', ()=>{

    beforeEach('open website', ()=>{
        cy.visit('https://test.techlift.in/contact')
    })
    
    it('scroll demo test', ()=>{
        cy.wait(5000)
        cy.get('#footer-subscribe-email')
            .scrollIntoView(); // scroll upto the element 
    })

    it('title check', ()=>{
        // title function will give title of webpage
        cy.title().should('include', 'Contact Us');
    })
    
    })