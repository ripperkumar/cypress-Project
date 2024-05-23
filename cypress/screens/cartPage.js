class CartPage{
    #cartItems = '//*[@id="main-cart-items"]/div/table/tbody/tr'
    #chechoutBtn = "button#checkout"
    getCartItems(){
        return cy.xpath(this.#cartItems);
    }

    getCheckoutBtn(){
        return cy.get(this.#chechoutBtn);
    }

    checkout(){
        this.getCheckoutBtn().click();
    }

}

export default CartPage