import BasePage from '../pageObjects/basePage'

class SearchGirlie extends BasePage {
  static get url () {
    return '/#/search?q=Girlie';
  }

  static get basketButton(){
    return cy.get('[aria-label="Add to Basket"]');
  }
  static get goToBasketButton(){
    return cy.get('[aria-label="Show the shopping cart"]');
  }
}

export default SearchGirlie;

