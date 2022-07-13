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
  static get searchIcon(){
    return cy.get('#searchQuery');
  }
  static get makeSearchQuery(){
    return cy.get('#mat-input-0');
  }
  static get itemsPerPage(){
    return cy.get('.mat-select-min-line');
  }
  static get cardsInPage(){
    return cy.get('.mat-grid-tile');
  }
  static get pickItemsPerPage(){
    return cy.get('.mat-option-text');
  }

}

export default HomePage;
