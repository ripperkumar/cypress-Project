export const getTitle = () => cy.title();

export const getAccountBtn = () => cy.get(".header__icon--account");
export const getSearchIcon = () =>
  cy.xpath("//*[@class='modal__toggle-open icon icon-search']");
export const getHomeBtn = () => cy.get('//*[text()=\'Home\']');
export const getSearchBar = () => cy.xpath("//*[@id='Search-In-Modal']");

export const getPredictiveSearchResultList = () =>
  cy.get('#predictive-search-results-list');

export const navigateToLoginPage = () => {
  getAccountBtn().click();
};

export const searchForProduct = (productName) => {
  getSearchIcon().click();
  getSearchBar().type(productName).type('{enter}');
};
