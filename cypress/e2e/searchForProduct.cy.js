import * as homePage from "../support/components/homepage/homePageLocators";
import * as searchResultPage from "../support/components/searchresultpage/searchResultPageLocators";

describe('Search for product',()=>{
    let product;
    before(()=>{
        cy.fixture('product').then((data)=>{
             product= data;
        })
    })
    it('Verify search for existing product',()=>{
        homePage.searchForProduct(product.existingProductName);
        searchResultPage.getFirstResult()
            .invoke('text')
            .should("include", product.expectedIfProductFound);
    })

    it('Verify search for not existing product',()=>{
        homePage.searchForProduct(product.notExistingProductName);
        searchResultPage.getProductNotFoundMsg()
            .invoke('text')
            .should('eq',product.expectedIfProductNotFound);

    })
})