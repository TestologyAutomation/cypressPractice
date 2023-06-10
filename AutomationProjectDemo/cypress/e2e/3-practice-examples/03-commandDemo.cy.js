/// <reference types ="cypress" />

describe('command checks' , ()=>{
// before each function will be executed before each case
beforeEach('start websote' , ()=>{
    cy.visit('https://example.cypress.io/commands/traversal');
})

it('test1' , ()=>{

    cy.get('.traversal-breadcrumb')  // you can find child element 
        .children('.active')
         .should('contain', 'Data')
})

it('test2', ()=>{
    cy.get('.traversal-list>li') // you can use 'eq' to find child element of same type using index
                .eq(1).should('contain', 'siamese')
})






})
