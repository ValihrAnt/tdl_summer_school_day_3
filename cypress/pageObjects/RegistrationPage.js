import BasePage from '../pageObjects/basePage'

class RegistrationPage extends BasePage {
  static get url () {
    return '/#/register';
  }
  static get inputEmail(){
    return cy.get('#emailControl');
  }
  static get inputPassword(){
    return cy.get('#passwordControl');
  }
  static get inputPasswordAgain(){
    return cy.get('#repeatPasswordControl');
  }
  static get securityQuestion(){
    return cy.get('.mat-select-placeholder');
  }
  static get securityQuestionChoice(){
    return cy.get('#mat-option-9');
  }
  static get securityQuestionAnswer(){
    return cy.get('#securityAnswerControl');
  }
  static get submitButton(){
    return cy.get('#registerButton');
  }
}

export default RegistrationPage;
