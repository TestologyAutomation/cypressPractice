export class LoginPage{

    specifyEmail()
    {
        cy.get('#login_email').type('test@test.com');
    }

    specifyPasword()
    {
        cy.get('#login_password').type('xyz');
    }

    clickOnLogin()
    {
        cy.get('.for-login > .login-content > .form-signin > .btn').click();
        cy.wait(4000)
    }

    verifyErrorMEssage(expectedErrorMsg)
    {
        cy.get("span[class *= 'indicator'][class *= 'red']")
            .should('have.text', expectedErrorMsg)
            cy.wait(4000)
    }
}