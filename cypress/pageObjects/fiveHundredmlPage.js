import BasePage from './basePage'

class fiveHundredmlPage extends BasePage {
  static get url () {
    return '/#/search?q=Lemon';
  }
  static get lemonJuice(){
    return cy.get('[alt="Lemon Juice (500ml)"]');
  }
  static get eggfruitJuice(){
    return cy.get('[alt="Eggfruit Juice (500ml)"]');
  }
  static get strawberryJuice(){
    return cy.get('[alt="Strawberry Juice (500ml)"]');
  }
  static get juiceScreen(){
    return cy.get('.mat-dialog-content');
  }
  static get closeJuiceScreen(){
    return cy.get('.close-dialog');
  }
}

export default fiveHundredmlPage;

