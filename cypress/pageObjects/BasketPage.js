import { BasePage } from "./basePage";

export class BasketPage extends BasePage{
    static get url() {
        return "/#/basket";
    }

    static get addToBasketButton(){
        return cy.get("[aria-label='Add to Basket']");
    }
    static get basketButton(){
        return cy.get("[routerlink='/basket']");
      }
    static get checkoutButton(){
        return cy.get("[id='checkoutButton']");
    }




  }