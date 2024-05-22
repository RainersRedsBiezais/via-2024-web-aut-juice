import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }
  static get navbarSearchBar(){
    return cy.get("[class='mat-icon notranslate mat-ripple mat-search_icon-search ng-tns-c130-1 material-icons mat-ligature-font mat-icon-no-color']");
  }
  static get setNavbarSearchBar(){
    return cy.get("[id='mat-input-0']");
  }
  static get setProductCardSingle(){
    return cy.get("[class='item-name']");
  }
  static get validateLemonJuiceProductCard(){
    return cy.get("[class='container mat-typography']");
  }
  static get setLemonJuiceProductCardInMultipleCards(){
    return cy.get("[src='assets/public/images/products/lemon_juice.jpg']");
  }
  static get setEggFruitJuiceProductCardInMultipleCards(){
    return cy.get("[src='assets/public/images/products/eggfruit_juice.jpg']");
  }
  static get validateEggFruitJuiceProductCard(){
    return cy.get("[class='container mat-typography']");
  }
  static get closeCardButton(){
    return cy.get("[class='mat-focus-indicator close-dialog buttons mat-stroked-button mat-button-base']");
  }
  static get setStrawberryJuiceProductCardInMultipleCards(){
    return cy.get("[src='assets/public/images/products/strawberry_juice.jpeg']");
  }
  static get validateStrawberryJuiceProductCard(){
    return cy.get("[class='container mat-typography']");
  }
  static get setOWASPJuiceShopFacemask(){
    return cy.get("[class='mat-card-image img-responsive img-thumbnail']");
  }
  static get setOpenReviewOWASPJuiceShopFacemask(){
    return cy.get("[style='margin-right: 5px;']");
  }
  static get validateReview(){
    return cy.get("[class='comment ng-star-inserted']");
  }
  static get setReview(){
    return cy.get("[cols='50']");
  }
  static get submitButton(){
    return cy.get("[style='margin-bottom: 5px; margin-top: 5px; margin-left: 5px; display: block;']");
  }
  static get openReview(){
    return cy.get("[style='margin-right: 5px;']");
  }
  static get validateDefaultAmmountOfCards(){
    return cy.get("div.item-name");
  }
  static get openItemsPerPage(){
    return cy.get("[role='combobox']");
  }
  static get changeItemsPerPageTo24(){
    return cy.get("[class='mat-option-text']");
  }
  static get circleButtonStandardDelivery(){
    return cy.get("[class='mat-radio-inner-circle']");
  }
  static get validateConfirmation(){
    return cy.get("[class='confirmation']");
  }
  static get ordersAndPaymentButton(){
    return cy.get(".mat-menu-item");
  }
}
