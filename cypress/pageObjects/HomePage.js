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
  static get addToBasketButton(){
    return cy.get("[aria-label='Add to Basket']");
  }
  static get basketButton(){
    return cy.get("[routerlink='/basket']");
  }
  static get checkoutButton(){
    return cy.get("[id='checkoutButton']");
  }
  static get circleButton(){
    return cy.get("[class='mat-row cdk-row ng-star-inserted']");
  }
  static get continueButton(){
    return cy.get("[class='mat-focus-indicator btn btn-next mat-button mat-raised-button mat-button-base mat-primary ng-star-inserted']");
  }
  static get circleButtonStandardDelivery(){
    return cy.get("[class='mat-radio-inner-circle']");
  }
  static get deliveryOptionsList(){
    return cy.get(".mat-table");
  }
  static get continueButton2(){
    return cy.get("[aria-label='Proceed to delivery method selection']");
  }
  static get paymentCardList(){
    return cy.get(".mat-row");
  }
  static get continueButton3(){
    return cy.get("[class='mat-focus-indicator btn nextButton mat-button mat-raised-button mat-button-base mat-primary']");
  }
  static get completeYourPurchaseButton(){
    return cy.get("[aria-label='Complete your purchase']");
  }
  static get validateConfirmation(){
    return cy.get("[class='confirmation']");
  }
  static get validateConfirmation(){
    return cy.get("[class='confirmation']");
  }
  static get ordersAndPaymentButton(){
    return cy.get(".mat-menu-item");
  }
  static get addNewAddressButton(){
    return cy.get("[class='mat-focus-indicator btn btn-new-address mat-button mat-raised-button mat-button-base mat-primary']");
  }
  static get setCountry(){
    return cy.get("#mat-input-1")
  }
  static get setName(){
    return cy.get("#mat-input-2")
  }
  static get setMobileNumber(){
    return cy.get("#mat-input-3")
  }
  static get setZipCode(){
    return cy.get("#mat-input-4")
  }
  static get setAdress(){
    return cy.get("[id='address']")
  }
  static get setCity(){
    return cy.get("#mat-input-6")
  }
  static get setState(){
    return cy.get("#mat-input-7")
  }
  static get submitButton2(){
    return cy.get("[class='mat-focus-indicator mat-raised-button mat-button-base mat-primary']")
  }
  static get validateAddress(){
    return cy.get("[class='mat-cell cdk-cell cdk-column-Name mat-column-Name ng-star-inserted']")
  }
  static get addNewCard(){
    return cy.get("[id='mat-expansion-panel-header-0']")
  }
  static get addName(){
    return cy.get("#mat-input-1")
  }
  static get addCardNumber(){
    return cy.get("#mat-input-2")
  }
  static get addExpiryMonth(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-14']")
  }
  static get expiryMonth(){
    return cy.get('select').eq(0)
  }
  static get addExpiryYear(){
    return cy.get("[class='mat-form-field-infix ng-tns-c22-14']")
  }
  static get expiryYear(){
    return cy.get('select').eq(1)
  }
  static get submitButton3(){
    return cy.get("[id='submitButton']")
  }
  static get validateCard(){
    return cy.get("[class='mat-cell cdk-cell cdk-column-Name mat-column-Name ng-star-inserted']")
  }

  
  







  



  

  
  

  
  

  
  
  
}
