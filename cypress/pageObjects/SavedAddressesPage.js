import { BasePage } from "./basePage";

export class SavedAddressesPage extends BasePage{
    static get url() {
        return "/#/address/saved";
      }

    static get addNewAddressButton(){
    return cy.get("[class='mat-focus-indicator btn btn-new-address mat-button mat-raised-button mat-button-base mat-primary']");
    }
  }