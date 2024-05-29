export const getUserNameInput = () => cy.get("#CustomerEmail");

export const getPasswordInput = () => cy.get("#CustomerPassword");

export const getSigninBtn = () => cy.contains("Sign in");

export const getErrorMessageTag = () => cy.get(".form__message");

export const login = (userName, password) => {
  getUserNameInput().type(userName);
  getPasswordInput().type(password);
  getSigninBtn().click();
};
