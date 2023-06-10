/// <reference types='cypress'/>

describe('navigation checks' , ()=>{

it('navigation back and forward test', ()=>{
cy.visit('https://test.techlift.in/')
cy.wait(4000)
cy.get('a[class="nav-link"][href *= "contact"]').click();
cy.wait(4000)
cy.go('back')
cy.wait(4000)
cy.go('forward')

})

it('refresh reload test', ()=>{
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
})
})