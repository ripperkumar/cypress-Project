import * as homePage from "../support/components/homepage/homePageLocators";
import * as searchResultPage from "../support/components/searchresultpage/searchResultPageLocators";
import* as pageActions from "../support/actions/pageActions";
describe("Home Page", () => {


  beforeEach(() => {
    cy.visit("https://web-playground.ultralesson.com/");
  });

  it("verify the page title", () => {
    homePage.getTitle().should("eq", "ul-web-playground");
  });

  it("verify the navigation to login page", () => {
    homePage.navigateToLoginPage();
    homePage.getTitle().should("include", "Account");
  });

  it("verify search for product", () => {
    homePage.searchForProduct("Shirt\n");
    searchResultPage.getFirstResult()
        .invoke('text')
      .should("include", "Shirt");
  });
});
