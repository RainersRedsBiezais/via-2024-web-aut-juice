export class PaymentOptionsPage {
    static get url() {
        return "/#/payment/shop";
      }

    static get paymentCardList(){
        return cy.get(".mat-row");
    }
    static get continueButton3(){
        return cy.get("[class='mat-focus-indicator btn nextButton mat-button mat-raised-button mat-button-base mat-primary']");
    }
  }