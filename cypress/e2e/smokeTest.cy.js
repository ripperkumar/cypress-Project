import * as homePage from "../support/components/homepage/homePageLocators";
import * as loginPage from "../support/components/loginpage/loginPageLocators";
import * as searchResultPage from "../support/components/searchResultPage";
import * as pageActions from "../support/actions/pageActions";
import credential from "../testdata/credentials";
import * as productPage from "../support/components/productPage";
import * as cartPage from "../support/components/cartpage/cartPageLocators";
import * as paymentPage from "../support/components/paymentPage";
import * as accountPage from "../support/components/accountpage/accountPageLocators"

describe("Smoke test", () => {



  const validEmail = credential.validCredentials.email;
  const validPassword = credential.validCredentials.password;

  beforeEach(() => {
    cy.visit("https://web-playground.ultralesson.com/");
  });
  
  it("test happy path", () => {
    homePage.getTitle().should("eq", "ul-web-playground");

    homePage.navigateToLoginPage();
    homePage.getTitle().should("include", "Account");
    loginPage.login(validEmail, validPassword);
    homePage.getTitle().should("eq", "Account – ul-web-playground");

    homePage.searchForProduct("Shirt\n");
    pageActions
      .getText(searchResultPage.getFirstResult())
      .should("include", "Shirt");
    searchResultPage.navigateToProductPage();
    pageActions
      .getText(productPage.getProductTitle())
      .should("include", "Shirt");

    productPage.addProductToCart();
    productPage.getCartNotificationPopUp().should("be.visible");
    productPage.navigateToCartPage();
    homePage.getTitle().should("include", "Your Shopping Cart");
    cartPage.getCartItems().should("have.length", 1);

    cartPage.checkout();

    // paymentPage.getOrderSummarySection().should("be.visible");

    paymentPage.completeOrder();
    homePage.getTitle().should("include", "Thank you for your purchase!");
    paymentPage.continueShopping();
    homePage.navigateToLoginPage();
    accountPage.logout();
  });
});
