import { BasePage } from "./basePage";

export class SavedPaymentMethodsPage extends BasePage{
    static get url() {
        return "/#/saved-payment-methods";
      }

    static get addNewCard(){
    return cy.get("[id='mat-expansion-panel-header-0']")
    }
    static get addName(){
    return cy.get("#mat-input-1")
    }
    static get addCardNumber(){
    return cy.get("#mat-input-2")
    }
    static get addExpiryMonth(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-14']")
    }
    static get expiryMonth(){
    return cy.get('select').eq(0)
    }
    static get addExpiryYear(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-14']")
    }
    static get expiryYear(){
    return cy.get('select').eq(1)
    }
    static get submitButton3(){
    return cy.get("[id='submitButton']")
    }
    static get validateCard(){
    return cy.get("[class='mat-cell cdk-cell cdk-column-Name mat-column-Name ng-star-inserted']")
    }
  }