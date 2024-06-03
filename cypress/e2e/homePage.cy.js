import * as homePage from "../support/components/homepage/homePageLocators";
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
  it('verify the search button',()=>{
    homePage.getSearchIcon().click();
    homePage.getSearchBar().should('be.visible');
  });


});
