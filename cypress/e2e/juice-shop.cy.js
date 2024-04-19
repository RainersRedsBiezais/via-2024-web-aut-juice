import { HomePage } from "../pageObjects/HomePage";
import { BasePage } from "../pageObjects/basePage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.navbarAccountButton.click();
      // Click Login button
      HomePage.navbarLoginButton.click();
      // Set email value to "demo"
      HomePage.setEmail.type("demo");
      // Set password value to "demo"
      HomePage.setPassword.type("demo");
      // Click Log in
      HomePage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.validateDemoInAccountName.contains("demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.navbarAccountButton.click();
      // Login button
      HomePage.navbarLoginButton.click();
      // Click "Not yet a customer?"
      HomePage.notYetACustomer.click();
      // Find - how to generate random number in JS
      var randomNumber = Math.floor(Math.random() * 10000) + 1;
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      var emailAddress = "email_" + randomNumber + "@ebox.com";
      // Save that email address to some variable
      var uniqueEmail = emailAddress;
      HomePage.setEmailInUserRegistration.type(uniqueEmail);
      // Fill in password field and repeat password field with same password
      HomePage.setPasswordInUserRegistration.type("Password123");
      HomePage.setRepeatPasswordInUserRegistration.type("Password123");
      // Click on Security Question menu
      HomePage.securityQuestionButton.click();
      // Select  "Name of your favorite pet?"
      HomePage.setSecurityQuestion.click();
      // Fill in answer
      HomePage.setSecurityQuestionAnswer.type("Pedro");
      // Click Register button
      HomePage.registerButton.click();
      // Set email value to previously created email
      HomePage.setEmail.type(uniqueEmail);
      // Set password value to previously used password value
      HomePage.setPassword.type("Password123");
      // Click login button
      HomePage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.validateDemoInAccountName.contains(uniqueEmail);
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
      HomePage.setReview.click().type("Tastes like metal");
      // Click Submit
      HomePage.submitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.openReview.click();
      // Validate review -  "Tastes like metal"
      HomePage.validateReview.contains("Tastes like metal");
    });
    // Create scenario - Validate product card amount
    it.only("Validate product card amount", () => {
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
    // Click on search icon
    // Search for Girlie
    // Add to basket "Girlie"
    // Click on "Your Basket" button
    // Create page object - BasketPage
    // Click on "Checkout" button
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    // Click Continue button
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    // Click Continue button
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    // Click Continue button
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"

    // Create scenario - Add address
    // Click on Account
    // Click on Orders & Payment
    // Click on My saved addresses
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    // Click Submit button
    // Validate that previously added address is visible

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
  });
});
