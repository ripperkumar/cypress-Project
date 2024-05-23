class SearchResultPage{
    #firstResult ="//*[@id='product-grid']/ul/li[1]/div/div[1]/div/h3/a"
    getFirstResult(){
        return cy.xpath(this.#firstResult)
    }

    navigateToProductPage(){
        this.getFirstResult().click();
    }

}

export default SearchResultPage