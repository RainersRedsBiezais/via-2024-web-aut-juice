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
  static get navbarAccountButton(){
    return cy.get("[id='navbarAccount']");
  }
  static get navbarLoginButton(){
    return cy.get("[id='navbarLoginButton']");
  }
  static get setEmail(){
    return cy.get("[id='email']");
  }
  static get setPassword(){
    return cy.get("[id='password']");
  }
  static get loginButton(){
    return cy.get("[id='loginButton']");
  }
  static get accountButton(){
    return cy.get("[id='navbarAccount']");
  }
  static get validateDemoInAccountName(){
    return cy.get("[id='mat-menu-panel-0']");
  }
  static get notYetACustomer(){
    return cy.get("[routerlink='/register']");
  }
  static get setEmailInUserRegistration(){
    return cy.get("[id='emailControl']");
  }
  static get setPasswordInUserRegistration(){
    return cy.get("[id='passwordControl']");
  }
  static get setRepeatPasswordInUserRegistration(){
    return cy.get("[id='repeatPasswordControl']");
  }
  static get securityQuestionButton(){
    return cy.get("[name='securityQuestion']");
  }
  static get setSecurityQuestion(){
    return cy.get("[id='mat-option-9']");
  }
  static get setSecurityQuestionAnswer(){
    return cy.get("[id='securityAnswerControl']");
  }
  static get registerButton(){
    return cy.get("[id='registerButton']");
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

  

  
  

  
  

  
  
  
}
