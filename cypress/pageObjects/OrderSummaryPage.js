import { BasePage } from "./basePage";

export class OrdersummaryPage extends BasePage {
    static get url() {
        return "/#/order-summary";
      }
    static get completeYourPurchaseButton(){
    return cy.get("[aria-label='Complete your purchase']");
    }
  }