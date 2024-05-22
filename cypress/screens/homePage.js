class HomePage{

    #accountBtn = '.header__icon--account'

    getTitle(){
        return cy.title();
    }

    getLoginBtn(){
        return cy.get(this.#accountBtn);
    }

    navigateToLoginPage(){
        this.getLoginBtn().click();
    }

}

export default HomePage 