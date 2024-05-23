class PaymentPage {
  #orderSummarySection = "#Form1";
  #cashOnDeliveryBtn = "#basic-paymentOnDelivery";
  #completeOrderBtn = "#checkout-pay-button";

  getOrderSummarySection() {
    return cy.get(this.#orderSummarySection);
  }

  getCashOnDeliveryBtn() {
    return cy.get(this.#cashOnDeliveryBtn);
  }
  getCompleteOrderBtn() {
    return cy.get(this.#completeOrderBtn);
  }

  completeOrder() {
    this.getCashOnDeliveryBtn().click();
    this.getCompleteOrderBtn().click();
  }

  continueShopping() {
    cy.contains("Continue shopping").click();
  }
}

export default PaymentPage;
