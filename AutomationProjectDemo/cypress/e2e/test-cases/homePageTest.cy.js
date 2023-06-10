/// <reference types='cypress'/>

import { HomePage } from "../page-objects/homePage"
import { LoginPage } from "../page-objects/loginPage"

describe('asserions checks' , ()=>
{
    const homepage= new HomePage()
    it('going to loginpage', ()=>
    {
        homepage.openWebsite()

        homepage.gotoLoginPage()
    })

    it('invalidLoginErrorMEssageCheck', ()=>{
      const loginPageObj= new LoginPage()
      loginPageObj.specifyEmail()
      loginPageObj.specifyPasword()
      loginPageObj.clickOnLogin()
      loginPageObj.verifyErrorMEssage('Invalid Login. Try again')  
    })
    })