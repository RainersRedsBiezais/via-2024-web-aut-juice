import { BasePage } from "../pageObjects/basePage";

export class RegistrationPage extends BasePage {
  static get url() {
    return "/#/register";
  }

  static get notYetACustomer(){
    return cy.get("[routerlink='/register']");
  }
  static get setEmailInUserRegistration(){
    return cy.get("[id='emailControl']");
  }
  static get setPasswordInUserRegistration(){
    return cy.get("[id='passwordControl']");
  }
  static get setRepeatPasswordInUserRegistration(){
    return cy.get("[id='repeatPasswordControl']");
  }
  static get securityQuestionButton(){
    return cy.get("[name='securityQuestion']");
  }
  static get setSecurityQuestion(){
    return cy.get("[id='mat-option-9']");
  }
  static get setSecurityQuestionAnswer(){
    return cy.get("[id='securityAnswerControl']");
  }
  static get registerButton(){
    return cy.get("[id='registerButton']");
  }

}