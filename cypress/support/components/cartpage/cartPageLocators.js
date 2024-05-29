export const getCartItems = () =>
  cy.xpath('//*[@id="main-cart-items"]/div/table/tbody/tr');

export const getCheckoutBtn = () => cy.get("button#checkout");

export const checkout = () => {
  getCheckoutBtn().click();
};
