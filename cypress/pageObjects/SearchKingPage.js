import BasePage from '../pageObjects/basePage'

class SearchKingPage extends BasePage {
  static get url () {
    return '/#/search?q=King';
  }

  static get kingFacemask(){
    return cy.get(`[alt='OWASP Juice Shop "King of the Hill" Facemask']`);
  }
  static get productScreenReviews(){
    return cy.get('.mat-expansion-panel-header-title');
  }
  static get reviews(){
    return cy.get('.review-text');
  }
}

export default SearchKingPage;

