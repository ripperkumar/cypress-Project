import HomePage from "../screens/homePage";
import LoginPage from "../screens/loginPage";

describe("Home Page", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  beforeEach(() => {
    cy.visit("https://web-playground.ultralesson.com/");
  });

  it("verify the page title", () => {
    homePage.getTitle().should("eq", "ul-web-playground");
  });

  it("verify the navigation to login page", () => {
    homePage.navigateToLoginPage();
    loginPage.getTitle().should("eq","Account – ul-web-playground");
  });
});
