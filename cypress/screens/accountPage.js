class AccoutPage{
    #logOutBtn = "//*[@href='/account/logout']"

    getLogoutBtn(){
        return cy.xpath(this.#logOutBtn);
    }

    logout(){
        this.getLogoutBtn().click();
    }
}

export default AccoutPage