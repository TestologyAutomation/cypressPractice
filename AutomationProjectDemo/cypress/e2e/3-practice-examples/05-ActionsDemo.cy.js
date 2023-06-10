/// <reference types='cypress' />

describe('action test suite', ()=>{

beforeEach('open website', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
})

it('clear dmeo test', ()=>{

    cy.get('input[type="text"][id="description"]').type('abcd..')
    cy.wait(3000)
    cy.get('input[type="text"][id="description"]').clear()
        .should('have.text', '');
})

})