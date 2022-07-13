import BasePage from '../pageObjects/basePage'

class SavedPaymentMethodsPage extends BasePage {
  static get url () {
    return '/#/saved-payment-methods';
  }

  static get confirmationText(){
    return cy.get('.confirmation');
  }
  static get addPaymentOption(){
    return cy.get('.mat-expansion-panel-header');
  }
  static get addName(){
    return cy.get('#mat-input-1');
  }
  static get addCardNumber(){
    return cy.get('#mat-input-2');
  }
  static get pickExpiryMonth(){
    return cy.get('#mat-input-3');
  }
  static get pickExpiryYear(){
    return cy.get('#mat-input-4');
  }
  static get submitButton(){
    return cy.get('#submitButton');
  }
  static get validateCard(){
    return cy.get('.mat-row');
  }
}

export default SavedPaymentMethodsPage;

