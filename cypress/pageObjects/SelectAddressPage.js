import BasePage from '../pageObjects/basePage'

class SelectAddressPage extends BasePage {
  static get url () {
    return '/#/address/select';
  }

  static get selectAddress(){
    return cy.get('.mat-row');
  }
  static get continueButton(){
    return cy.get('[aria-label="Proceed to payment selection"]');
  }
}

export default SelectAddressPage;

