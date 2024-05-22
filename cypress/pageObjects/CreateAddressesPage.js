import { BasePage } from "./basePage";

export class CreateAddressesPage extends BasePage{
    static get url() {
        return "/#/address/create";
    }

    static get setCountry(){
        return cy.get("#mat-input-1");
    }
    static get setName(){
        return cy.get("#mat-input-2");
    }
    static get setMobileNumber(){
        return cy.get("#mat-input-3");
    }
    static get setZipCode(){
        return cy.get("#mat-input-4");
    }
    static get setAdress(){
        return cy.get("[id='address']");
    }
    static get setCity(){
        return cy.get("#mat-input-6");
    }
    static get setState(){
        return cy.get("#mat-input-7");
    }
    static get submitButton2(){
        return cy.get("[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary']");
    }
    static get validateAddress(){
        return cy.get("[class='mat-cell cdk-cell cdk-column-Name mat-column-Name ng-star-inserted']");
    }
}