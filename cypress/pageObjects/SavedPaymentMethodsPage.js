import BasePage from '../pageObjects/basePage'

class SavedPaymentMethodsPage extends BasePage {
  static get url () {
    return '/#/saved-payment-methods';
  }

  static get confirmationText(){
    return cy.get('.confirmation');
  }
}

export default SavedPaymentMethodsPage;

