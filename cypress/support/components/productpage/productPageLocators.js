export const getProductTitle = () => cy.xpath("//*[@class='product__title']");

export const getAddToCartBtn = () => cy.xpath("//*[@name='add']");

export const getCartNotificationPopUp = () => cy.get("#cart-notification");

export const getCartNotificationBtn = () => cy.get("#cart-notification-button");

export const addProductToCart = () => {
  getAddToCartBtn().click();
};

export const navigateToCartPage = () => {
  getCartNotificationBtn().click();
};
