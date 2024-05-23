import LoginPage from "./loginPage";
import SearchResultPage from "./searchResultPage"
class HomePage{

    #accountBtn = '.header__icon--account';
    #searchIcon = "//*[@class='modal__toggle-open icon icon-search']";
    #searchBar = "//*[@id='Search-In-Modal']";
    #searchResultList = "//*[@id='predictive-search-results-list']"
    getTitle(){
        return cy.title();
    }

    getAccountBtn(){
        return cy.get(this.#accountBtn);
    }
    getSearchIcon(){
        return cy.xpath(this.#searchIcon);
    }

    getSearchBar(){
        return cy.xpath(this.#searchBar);
    }

    getSearchResult(){
        return cy.xpath(this.#searchResultList).first();
    }

    navigateToLoginPage(){
        this.getAccountBtn().click();
    }

    searchForProduct(productName){
        this.getSearchIcon().click();
        this.getSearchBar().type(productName);
    }


}

export default HomePage 