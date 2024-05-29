import * as homePage from "../support/components/homepage/homePageLocators";
import SearchResultPage from "../support/components/searchResultPage";
import PageActions from "../support/actions/pageActions";
describe("Home Page", () => {

  const searchResultPage = new SearchResultPage();
  const pageActions = new PageActions();
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
    pageActions
      .getText(searchResultPage.getFirstResult())
      .should("include", "Shirt");
  });
});
