class LoginPage{

    #userNameInput = '#CustomerEmail';
    #passwordInput='#CustomerPassword';
    #loginBtn = 'Sign in';
    #errorMessage = '.form__message';

    getUserNameInput(){
        return cy.get(this.#userNameInput);
    }

    getPasswordInput(){
        return cy.get(this.#passwordInput);
    }

    getSigninBtn(){
        return cy.contains(this.#loginBtn);
    }

    getErrorMessageTag(){
        return cy.get(this.#errorMessage)
    }
    login(userName, password){
        this.getUserNameInput().type(userName);
        this.getPasswordInput().type(password);
        this.getSigninBtn().click();
    }

}

export default LoginPage;