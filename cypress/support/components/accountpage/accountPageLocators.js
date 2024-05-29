export const getLogoutBtn = () => cy.xpath("//*[@href='/account/logout']");

export const logout = () => getLogoutBtn().click();
