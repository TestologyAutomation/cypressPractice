/// <reference types='cypress'/>

describe('asserions checks' , ()=>{

it.only('should demos', ()=>{
cy.visit('https://test.techlift.in/')
cy.wait(4000)
cy.get('a[class="nav-link"][href *= "contact"]').click();
cy.wait(4000)
cy.get('button[class *= "btn-send"]')
    .should('have.text', 'Send')

cy.get('#footer-subscribe-email') // have.attr will check a atribute ion html tag
        .should('have.attr', 'placeholder', 'Your email address...')
})

it('refresh reload test', ()=>{
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
})
})