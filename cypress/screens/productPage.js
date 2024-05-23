class ProductPage{

    #productTitle = "//*[@class='product__title']";
    #addToCartBtn = "//*[@name='add']"
    #cartNotificationPopUp = '#cart-notification'
    #cartNotificationBtn = '#cart-notification-button'
    getProductTitle(){
        return cy.xpath(this.#productTitle);
    }

    getAddToCartBtn(){
        return cy.xpath(this.#addToCartBtn)
    }

    getCartNotificationPopUp(){
        return cy.get(this.#cartNotificationPopUp);
    }

    getCartNotificationBtn(){
        return cy.get(this.#cartNotificationBtn)
    }

    addProductToCart(){
        this.getAddToCartBtn().click();
    }

    navigateToCartPage(){
        this.getCartNotificationBtn().click();
    }
}
export default ProductPage