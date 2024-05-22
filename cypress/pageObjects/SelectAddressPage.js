import { BasePage } from "./basePage";

export class SelectAddressPage extends BasePage {
    static get url() {
        return "/#/address/select";
      }

    static get circleButton(){
        return cy.get("[class='mat-row cdk-row ng-star-inserted']");
    }
    static get continueButton(){
        return cy.get("[class='mat-focus-indicator btn btn-next mat-button mat-raised-button mat-button-base mat-primary ng-star-inserted']");
    }
  }