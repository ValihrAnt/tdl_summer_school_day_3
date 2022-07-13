import BasePage from '../pageObjects/basePage'

class LoginPage extends BasePage {
  static get url () {
    return '/#/login';
  }

  static get elementName(){
    return cy.get('elementSelector');
  }
  static get inputEmail(){
    return cy.get('#email');
  }
  static get inputPassword(){
    return cy.get('#password');
  }
  static get loginButton(){
    return cy.get('#loginButton');
  }
}

export default LoginPage;
