/// <reference types='cypress'/>

describe('get text ' , ()=>{

    it.only('match two links test', ()=>{
    cy.visit('https://test.techlift.in/')
    cy.wait(4000)
    cy.get('.ml-auto > .nav-item > .nav-link').click();

    cy.wait(4000)
    let text1, text2;
// to get text from any element you have to use callback function 
   cy.get('.sign-up-message > a')
   .then(($link) => {
    // save text from the first element
    text1 = $link.text()
  })
     
   cy.get('.forgot-password-message > a')
   .then(($link) => {
    // save text from the first element
    text2 = $link.text()

    expect(text1).to.be.equal(text2)
  })

})
    
    })