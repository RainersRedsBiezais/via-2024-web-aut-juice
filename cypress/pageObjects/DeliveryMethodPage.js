import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage {
    static get url() {
        return "/#/delivery-method";
      }

    static get deliveryOptionsList(){
        return cy.get(".mat-table");
    }
    static get continueButton2(){
        return cy.get("[aria-label='Proceed to delivery method selection']");
    }
  }