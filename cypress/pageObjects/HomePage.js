import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  static get navbarAccountButton(){
    return cy.get("[id='navbarAccount']");
  }
  static get navbarLoginButton(){
    return cy.get("[id='navbarLoginButton']");
  }
  static get setEmail(){
    return cy.get("[id='email']");
  }
  static get setPassword(){
    return cy.get("[id='password']");
  }
  static get loginButton(){
    return cy.get("[id='loginButton']");
  }
  static get accountButton(){
    return cy.get("[id='navbarAccount']");
  }
  static get validateDemoInAccountName(){
    return cy.get("[id='mat-menu-panel-0']");
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
