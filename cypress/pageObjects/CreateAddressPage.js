import BasePage from '../pageObjects/basePage'

class CreateAddressPage extends BasePage {
  static get url () {
    return '/#/address/create';
  }

  static get addCountry(){
    return cy.get('[data-placeholder="Please provide a country."]');
  }
  static get addName(){
    return cy.get('[data-placeholder="Please provide a name."]');
  }
  static get addPhone(){
    return cy.get('[data-placeholder="Please provide a mobile number."]');
  }
  static get addZip(){
    return cy.get('[data-placeholder="Please provide a ZIP code."]');
  }
  static get addAddress(){
    return cy.get('[data-placeholder="Please provide an address."]');
  }
  static get addCity(){
    return cy.get('[placeholder="Please provide a city."]');
  }
  static get addState(){
    return cy.get('[data-placeholder="Please provide a state."]');
  }
  static get submitButton(){
    return cy.get('#submitButton');
  }
}

export default CreateAddressPage;

