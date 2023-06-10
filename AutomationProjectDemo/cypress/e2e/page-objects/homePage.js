export class HomePage
{
    openWebsite()
    {
        cy.visit('https://test.techlift.in/')
    }

    gotoLoginPage()
    {
        cy.get('.ml-auto > .nav-item > .nav-link').click();
    }
}