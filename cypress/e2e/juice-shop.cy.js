import { BasketPage } from "../pageObjects/BasketPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { OrdersummaryPage } from "../pageObjects/OrdersummaryPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { CreateAddressesPage } from "../pageObjects/CreateAddressesPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";



describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      LoginPage.navbarAccountButton.click();
      // Click Login button
      LoginPage.navbarLoginButton.click();
      // Set email value to "demo"
      LoginPage.setEmail.type("demo");
      // Set password value to "demo"
      LoginPage.setPassword.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      LoginPage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      LoginPage.validateDemoInAccountName.contains("demo");
    });

    it("Registration", () => {
      // Click Account button
      LoginPage.navbarAccountButton.click();
      // Login button
      LoginPage.navbarLoginButton.click();
      // Click "Not yet a customer?"
      RegistrationPage.notYetACustomer.click();
      // Find - how to generate random number in JS
      var randomNumber = Math.floor(Math.random() * 10000) + 1;
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      var emailAddress = "email_" + randomNumber + "@ebox.com";
      // Save that email address to some variable
      var uniqueEmail = emailAddress;
      RegistrationPage.setEmailInUserRegistration.type(uniqueEmail);
      // Fill in password field and repeat password field with same password
      RegistrationPage.setPasswordInUserRegistration.type("Password123");
      RegistrationPage.setRepeatPasswordInUserRegistration.type("Password123");
      // Click on Security Question menu
      RegistrationPage.securityQuestionButton.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.setSecurityQuestion.click();
      // Fill in answer
      RegistrationPage.setSecurityQuestionAnswer.type("Pedro");
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.setEmail.type(uniqueEmail);
      // Set password value to previously used password value
      LoginPage.setPassword.type("Password123");
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      LoginPage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      LoginPage.validateDemoInAccountName.contains(uniqueEmail);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.navbarSearchBar.click();
      // Search for Lemon
      HomePage.setNavbarSearchBar.type("Lemon").type('{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.setProductCardSingle.click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.validateLemonJuiceProductCard.contains("Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      // Click on search icon
      HomePage.navbarSearchBar.click();
      // Search for 500ml
      HomePage.setNavbarSearchBar.type("500ml").type('{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.setLemonJuiceProductCardInMultipleCards.click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.validateLemonJuiceProductCard.contains("Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Click on search icon
      HomePage.navbarSearchBar.click();
      // Search for 500ml
      HomePage.setNavbarSearchBar.type("500ml").type('{enter}');
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.setEggFruitJuiceProductCardInMultipleCards.click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.validateEggFruitJuiceProductCard.contains("Now with even more exotic flavour.");
      // Close the card
      HomePage.closeCardButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.setLemonJuiceProductCardInMultipleCards.click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.validateLemonJuiceProductCard.contains("Sour but full of vitamins.");
      // Close the card
      HomePage.closeCardButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.setStrawberryJuiceProductCardInMultipleCards.click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.validateStrawberryJuiceProductCard.contains("Sweet & tasty!");
    });

    // Create scenario - Read a review
    it("Read a review", () => {
      // Click on search icon
      HomePage.navbarSearchBar.click();
      // Search for King
      HomePage.setNavbarSearchBar.type("King").type('{enter}');
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.setOWASPJuiceShopFacemask.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.setOpenReviewOWASPJuiceShopFacemask.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.validateReview.contains("K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });

    // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.navbarSearchBar.click();
      // Search for Raspberry
      HomePage.setNavbarSearchBar.type("Raspberry").type('{enter}');
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.setProductCardSingle.click()
      // Type in review - "Tastes like metal"
      HomePage.setReview.click().wait(500).type("Tastes like metal");
      // Click Submit
      HomePage.submitButton.click().wait(500);
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.openReview.click();
      // Validate review -  "Tastes like metal"
      HomePage.validateReview.contains("Tastes like metal");
    });
    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.validateDefaultAmmountOfCards.should('have.length', 12);
      // Change items per page (at the bottom of page) to 24
      HomePage.openItemsPerPage.click();
      HomePage.changeItemsPerPageTo24.contains("24").click();
      // Validate that the amount of cards is 24
      HomePage.validateDefaultAmmountOfCards.should('have.length', 24);
      // Change items per page (at the bottom of page) to 36
      HomePage.openItemsPerPage.click();
      HomePage.changeItemsPerPageTo24.contains("36").click();
      // Validate that the amount of cards is 35
      HomePage.validateDefaultAmmountOfCards.should('have.length', 35);
    });


    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {
      // Click on search icon
      HomePage.navbarSearchBar.click();
      // Search for Girlie
      HomePage.setNavbarSearchBar.type("Girlie").type('{enter}');
      // Add to basket "Girlie"
      BasketPage.addToBasketButton.click();
      // Click on "Your Basket" button
      BasketPage.basketButton.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.circleButton.contains("United Fakedom").click();
      // Click Continue button
      SelectAddressPage.continueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryOptionsList.contains("Standard Delivery").click();
      // Click Continue button
      DeliveryMethodPage.continueButton2.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.paymentCardList.contains("5678").closest('mat-row').find('[class="mat-radio-label"]').click();
      // Click Continue button
      PaymentOptionsPage.continueButton3.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrdersummaryPage.completeYourPurchaseButton.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.validateConfirmation.contains("Thank you for your purchase!");
    });

    // Create scenario - Add address
    it("Add address", () => {
      // Click on Account
      LoginPage.accountButton.click();
      // Click on Orders & Payment
      HomePage.ordersAndPaymentButton.contains("Orders & Payment").click();
      // Click on My saved addresses
      HomePage.ordersAndPaymentButton.contains("My saved addresses").click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.addNewAddressButton.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      CreateAddressesPage.setCountry.click().type("Latvia");
      CreateAddressesPage.setName.click().type("Pedro");
      CreateAddressesPage.setMobileNumber.click().type("12345678");
      CreateAddressesPage.setZipCode.click().type("LV-4412");
      CreateAddressesPage.setAdress.click().type("Kļavu iela 24");
      CreateAddressesPage.setCity.click().type("Liepāja");
      CreateAddressesPage.setState.click().type("Liepājas novads");
      // Click Submit button
      CreateAddressesPage.submitButton2.click();
      // Validate that previously added address is visible
      CreateAddressesPage.validateAddress.contains("Pedro");
  });
  // Create scenario - Add payment option
    it("Add payment option", () => {
    // Click on Account
    LoginPage.accountButton.click();
    // Click on Orders & Payment
    HomePage.ordersAndPaymentButton.contains("Orders & Payment").click();
    // Click on My payment options
    HomePage.ordersAndPaymentButton.contains("My Payment Options").click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    SavedPaymentMethodsPage.addNewCard.click();
    // Fill in Name
    SavedPaymentMethodsPage.addName.type("Pedro");
    // Fill in Card Number
    SavedPaymentMethodsPage.addCardNumber.type("1234567899876543")
    // Set expiry month to 7
    SavedPaymentMethodsPage.addExpiryMonth.click();
    SavedPaymentMethodsPage.expiryMonth.select(6)
    // Set expiry year to 2090
    SavedPaymentMethodsPage.addExpiryYear.click();
    SavedPaymentMethodsPage.expiryYear.select(10)
    // Click Submit button
    SavedPaymentMethodsPage.submitButton3.click();
    // Validate that the card shows up in the list
    SavedPaymentMethodsPage.validateCard.contains("Pedro");

  });
  });
});
