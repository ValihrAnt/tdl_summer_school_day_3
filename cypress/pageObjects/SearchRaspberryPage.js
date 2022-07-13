import BasePage from '../pageObjects/basePage'

class SearchRaspberryPage extends BasePage {
  static get url () {
    return '/#/search?q=Raspberry';
  }

  static get raspberryJuice(){
    return cy.get('[alt="Raspberry Juice (1000ml)"]');
  }
  static get addReview(){
    return cy.get('[aria-label="Text field to review a product"]');
  }
  static get submitReview(){
    return cy.get('#submitButton');
  }
  static get productScreenReviews(){
    return cy.get('.mat-expansion-panel-header-title');
  }
  static get reviews(){
    return cy.get('.review-text');
  }
}

export default SearchRaspberryPage;

