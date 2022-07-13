import BasePage from '../pageObjects/basePage'

class OrderCompletionPage extends BasePage {
  static get url () {
    return '/#/order-completion';
  }

  static get confirmationText(){
    return cy.get('.confirmation');
  }
}

export default OrderCompletionPage;

