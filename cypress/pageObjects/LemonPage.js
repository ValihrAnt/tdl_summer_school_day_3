import BasePage from '../pageObjects/basePage'

class LemonPage extends BasePage {
  static get url () {
    return '/#/search?q=Lemon';
  }

  static get lemonJuice(){
    return cy.get('.mat-card-image');
  }
  static get lemonJuiceScreen(){
    return cy.get('.mat-dialog-content');
  }
}

export default LemonPage;

