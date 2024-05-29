export const getOrderSummarySection = () => cy.get("#Form1");

export const getCashOnDeliveryBtn = () => cy.get("#basic-paymentOnDelivery");

export const getCompleteOrderBtn = () => cy.get("#checkout-pay-button");

export const completeOrder = () => {
  getCashOnDeliveryBtn().click();
  getCompleteOrderBtn().click();
};

export const continueShopping = () => {
  cy.contains("Continue shopping").click();
};


