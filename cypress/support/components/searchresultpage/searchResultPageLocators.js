export const getFirstResult = () =>
  cy.xpath("//*[@id='product-grid']/ul/li[1]/div/div[1]/div/h3/a");

export const getProductNotFoundMsg = ()=> cy.get("p[role='status']")
export const navigateToProductPage = () => {
  getFirstResult().click();
};
