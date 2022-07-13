import BasePage from '../pageObjects/basePage'

class SavedAddressesPage extends BasePage {
  static get url () {
    return '/#/address/saved';
  }

  static get addAddressButton(){
    return cy.get('[aria-label="Add a new address"]');
  }
  static get validateAddress(){
    return cy.get('.mat-row');
  }
}

export default SavedAddressesPage;

