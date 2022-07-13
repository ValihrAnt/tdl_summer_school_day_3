import BasePage from '../pageObjects/basePage'

class DeliveryMethodPage extends BasePage {
  static get url () {
    return '/#/delivery-method';
  }

  static get deliverySpeed(){
    return cy.get('.mat-row');
  }
  static get continueButton(){
    return cy.get('[aria-label="Proceed to delivery method selection"]');
  }
}

export default DeliveryMethodPage;

