/// <reference types='cypress'/>

it('login test for invalid credential' , function(){
// open website 
cy.visit('https://test.techlift.in/');
// wait for some seconds
cy.wait(2000);
// click on login link
cy.get("a[class *= 'btn-login-area'][href *= 'login']").click();
cy.wait(2000);
// specify email
cy.get('#login_email').type('test@test.com');
cy.wait(2000);
// specify password
cy.get('#login_password').type('xyz');
cy.wait(2000);
// click on login/submit button
cy.get('.for-login > .login-content > .form-signin > .btn').click();
cy.wait(2000);
});