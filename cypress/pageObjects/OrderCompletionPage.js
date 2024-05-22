import { BasePage } from "./basePage";

export class OrderCompletionPage extends BasePage {
    static get url() {
        return "/#/order-completion";
      }

    static get validateConfirmation(){
    return cy.get("[class='confirmation']");
    } 
  }