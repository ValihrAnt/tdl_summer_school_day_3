import BasePage from '../pageObjects/basePage'

class PaymentOptionsPage extends BasePage {
  static get url () {
    return '/#/payment/shop';
  }

  static get pickCard(){
    return cy.get('.mat-radio-inner-circle');
  }
  static get continueButton(){
    return cy.get('[aria-label="Proceed to review"]');
  }
}

export default PaymentOptionsPage;

