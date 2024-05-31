
import * as loginPage from "../support/components/loginpage/loginPageLocators";
import * as homePage from "../support/components/homepage/homePageLocators";

describe('login',()=>{
    let data;
    before(()=>{
        cy.fixture('credentials').then((userData)=>{
            data=userData;
        })
    })

    beforeEach(() => {
        homePage.navigateToLoginPage();
      });
    
    it('verify login with valid credentials', ()=>{

        loginPage.login(data.validCredentials.email,data.validCredentials.password)
        homePage.getTitle().should("eq", "Account – ul-web-playground");
    })

    it('verify login with invalid credentials', ()=>{
            loginPage.login(data.inValidCredentials.email,data.inValidCredentials.password)
            loginPage.getErrorMessageTag().should('be.visible');
    })

    it('verify try to login with empty username and password',()=>{
        loginPage.login(' ',' ');
        loginPage.getErrorMessageTag().should('be.visible');
    })
})