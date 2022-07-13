import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  static get accountButton(){
    return cy.get('#navbarAccount');
  }
  static get loginButton(){
    return cy.get('#navbarLoginButton');
  }
  static get validateAccount(){
    return cy.get('#mat-menu-panel-0');
  }

}

export default HomePage;
