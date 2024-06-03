export const getUserNameInput = () => cy.get("#CustomerEmail");

export const getPasswordInput = () => cy.get("#CustomerPassword");

export const getSignInBtn = () => cy.contains("Sign in");

export const getErrorMessageTag = () => cy.get(".form__message");


