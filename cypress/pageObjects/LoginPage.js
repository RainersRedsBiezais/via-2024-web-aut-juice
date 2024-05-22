import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
 static get url() {
    return "/#/register";
  }

  static get elementName() {
    return cy.get("elementSelector");
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




}
