import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import LemonPage from "../pageObjects/LemonPage";
import fiveHundredmlPage from "../pageObjects/fiveHundredmlPage";
import SearchKingPage from "../pageObjects/SearchKingPage";
import SearchRaspberryPage from "../pageObjects/SearchRaspberryPage";
import SearchGirlie from "../pageObjects/SearchGirlie";
import BasketPage from "../pageObjects/BasketPage";
import DeliveryMethodPage from "../pageObjects/DeliveryMethodPage";
import OrderCompletionPage from "../pageObjects/OrderCompletionPage";
import OrderSummaryPage from "../pageObjects/OrderSummaryPage";
import PaymentOptionsPage from "../pageObjects/PaymentOptionsPage";
import SelectAddressPage from "../pageObjects/SelectAddressPage";
import SavedAddressesPage from "../pageObjects/SavedAddressesPage";
import CreateAddressPage from "../pageObjects/CreateAddressPage";
import SavedPaymentMethodsPage from "../pageObjects/SavedPaymentMethodsPage";

describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Login", () => {
    // Click Account button
    HomePage.accountButton.should("be.visible").click();
    // Click Login button
    HomePage.loginButton.should("be.visible").click();
    // Set email value to "demo"
    LoginPage.inputEmail.type("demo");
    // Set password value to "demo"
    LoginPage.inputPassword.type("demo");
    // Click Log in
    LoginPage.loginButton.click();
    // Click Account button
    HomePage.accountButton.click();
    // Validate that "demo" account name appears in the menu section
    HomePage.validateAccount.should("contains.text", "demo");
  });

  it("Registration", () => {
    // Click Account button
    HomePage.accountButton.should("be.visible").click();
    // Login button
    HomePage.loginButton.should("be.visible").click();
    // Click "Not yet a customer?"
    LoginPage.notYetACustomerButton.should("be.visible").click();
    // Find - how to generate random number in JS
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    let emailAddress = "email_" + randomNum(1, 9999) + "@ebox.com";
  
    // Save that email address to some variable
    RegistrationPage.inputEmail.type(emailAddress);
    // Fill in password field and repeat password field with same password
    RegistrationPage.inputPassword.type("strongPass");
    RegistrationPage.inputPasswordAgain.type("strongPass");
    // Click on Security Question menu
    RegistrationPage.securityQuestion.should("be.visible").click();
    // Select  "Name of your favorite pet?"
    RegistrationPage.securityQuestionChoice.contains("Name of your favorite pet?").click();
    // Fill in answer
    RegistrationPage.securityQuestionAnswer.type("CatDog")
    // Click Register button
    RegistrationPage.submitButton.click();
    // Set email value to previously created email
    LoginPage.inputEmail.type(emailAddress);
    // Set password value to previously used password value
    LoginPage.inputPassword.type("strongPass");
    // Click login button
    LoginPage.loginButton.click();
    // Click Account button
    HomePage.accountButton.click();
    // Validate that account name (with previously created email address) appears in the menu section
    HomePage.validateAccount.should("contains.text", emailAddress);
  });
});

describe("Juice-shop with Auto login", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });

  it("Search and validate Lemon", () => {
    // Click on search icon
    HomePage.searchIcon.click();
    // Search for Lemon
    HomePage.makeSearchQuery.type("Lemon{enter}");
    // Select a product card - Lemon Juice (500ml)
    LemonPage.lemonJuice.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    LemonPage.lemonJuiceScreen.should("contains.text", "Sour but full of vitamins.")
  });

  it("Search 500ml and validate Lemon, while having multiple cards", () => {
  // Create scenario - Search 500ml and validate Lemon, while having multiple cards
  HomePage.searchIcon.click();
  // Click on search icon
  HomePage.makeSearchQuery.type("500ml{enter}");
  // Search for 500ml
  fiveHundredmlPage.lemonJuice.click()
  // Select a product card - Lemon Juice (500ml)
  fiveHundredmlPage.juiceScreen.should("contains.text", "Sour but full of vitamins.")
  // Validate that the card (should) contains "Sour but full of vitamins."

  });
  it("Search 500ml and validate cards", () => {
  // Create scenario - Search 500ml and validate cards
  HomePage.searchIcon.click();
  // Click on search icon
  HomePage.makeSearchQuery.type("500ml{enter}");
  // Search for 500ml
  fiveHundredmlPage.eggfruitJuice.click();
  // Select a product card - Eggfruit Juice (500ml)
  fiveHundredmlPage.juiceScreen.should("contains.text", "Now with even more exotic flavour.");
  // Validate that the card (should) contains "Now with even more exotic flavour."
  fiveHundredmlPage.closeJuiceScreen.click();
  // Close the card
  fiveHundredmlPage.lemonJuice.click();
  // Select a product card - Lemon Juice (500ml)
  fiveHundredmlPage.juiceScreen.should("contains.text", "Sour but full of vitamins.");
  // Validate that the card (should) contains "Sour but full of vitamins."
  fiveHundredmlPage.closeJuiceScreen.click();
  // Close the card
  fiveHundredmlPage.strawberryJuice.click();
  // Select a product card - Strawberry Juice (500ml)
  fiveHundredmlPage.juiceScreen.should("contains.text", "Sweet & tasty!");
  // Validate that the card (should) contains "Sweet & tasty!"
});
  it("Read a review", () => {
  // Create scenario - Read a review
  HomePage.searchIcon.click();
  // Click on search icon
  HomePage.makeSearchQuery.type("King{enter}");
  // Search for King
  SearchKingPage.kingFacemask.click();
  // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
  SearchKingPage.productScreenReviews.click().wait(500);
  // Click expand reviews button/icon (wait for reviews to appear)
  SearchKingPage.reviews.should("contains.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
  // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
});
it("Add a review", () => {
  // Create scenario - Add a review
  HomePage.searchIcon.click();
  // Click on search icon
  HomePage.makeSearchQuery.type("Raspberry{enter}");
  // Search for Raspberry
  SearchRaspberryPage.raspberryJuice.click();
  // Select a product card - Raspberry Juice (1000ml)
  SearchRaspberryPage.addReview.wait(1000).type("Tastes like metal{enter}");
  // Type in review - "Tastes like metal"
  SearchRaspberryPage.submitReview.click();
  // Click Submit
  SearchRaspberryPage.productScreenReviews.click().wait(500);
  // Click expand reviews button/icon (wait for reviews to appear)
  SearchRaspberryPage.reviews.should("contains.text", "Tastes like metal");
  // Validate review -  "Tastes like metal"
});
  it("Validate product card amount", () => {
  // Create scenario - Validate product card amount
  HomePage.cardsInPage.its('length').should('eq', 12);
  // Validate that the default amount of cards is 12
  HomePage.itemsPerPage.click();
  HomePage.pickItemsPerPage.contains("24").click();
  // Change items per page (at the bottom of page) to 24
  HomePage.cardsInPage.its('length').should('eq', 24);
  // Validate that the amount of cards is 24
  HomePage.itemsPerPage.click();
  HomePage.pickItemsPerPage.contains("36").click();
  // Change items per page (at the bottom of page) to 36
  HomePage.cardsInPage.its('length').should('eq', 35);
  // Validate that the amount of cards is 35
});
  it("Buy Girlie T-shirt", () => {
  // Create scenario - Buy Girlie T-shirt
  HomePage.searchIcon.click();
  // Click on search icon
  HomePage.makeSearchQuery.type("Girlie{enter}");
  // Search for Girlie
  SearchGirlie.basketButton.click();
  // Add to basket "Girlie"
  SearchGirlie.goToBasketButton.click();
  // Click on "Your Basket" button
  // Create page object - BasketPage
  BasketPage.checkoutButton.click();
  // Click on "Checkout" button
  // Create page object - SelectAddressPage
  SelectAddressPage.selectAddress.contains("United Fakedom").click();
  // Select address containing "United Fakedom"
  SelectAddressPage.continueButton.click();
  // Click Continue button
  // Create page object - DeliveryMethodPage
  DeliveryMethodPage.deliverySpeed.last().click();
  // Select delivery speed Standard Delivery
  DeliveryMethodPage.continueButton.click();
  // Click Continue button
  // Create page object - PaymentOptionsPage
  PaymentOptionsPage.pickCard.first().click();
  // Select card that ends with "5678"
  PaymentOptionsPage.continueButton.click();
  // Click Continue button
  // Create page object - OrderSummaryPage
  OrderSummaryPage.checkoutButton.click();
  // Click on "Place your order and pay"
  // Create page object - OrderCompletionPage
  OrderCompletionPage.confirmationText.should("be.visible").should("contains.text", "Thank you for your purchase!");
  // Validate confirmation - "Thank you for your purchase!"
});
  it("Add address", () => {
  // Create scenario - Add address
  HomePage.accountButton.click();
  // Click on Account
  HomePage.ordersAndPayment.last().click();
  // Click on Orders & Payment
  HomePage.mySavedAddresses.click();
  // Click on My saved addresses
  // Create page object - SavedAddressesPage
  SavedAddressesPage.addAddressButton.click();
  // Click on Add New Address
  // Create page object - CreateAddressPage
  CreateAddressPage.addCountry.type("Latvia");
  CreateAddressPage.addName.type("Adrians");
  CreateAddressPage.addPhone.type("12312312");
  CreateAddressPage.addZip.type("456");
  CreateAddressPage.addAddress.type("Fake Street 123");
  CreateAddressPage.addCity.type("Ventspils");
  CreateAddressPage.addState.type("Kurzeme");
  // Fill in the necessary information
  CreateAddressPage.submitButton.click();
  // Click Submit button
  SavedAddressesPage.validateAddress.should("contains.text", "Fake Street 123, Ventspils, Kurzeme, 456");
  // Validate that previously added address is visible
});
  it("Add payment option", () => {
  // Create scenario - Add payment option
  HomePage.accountButton.click();
  // Click on Account
  HomePage.ordersAndPayment.last().click();
  // Click on Orders & Payment
  HomePage.myPaymentOptions.click();
  // Click on My payment options
  // Create page object - SavedPaymentMethodsPage
  SavedPaymentMethodsPage.addPaymentOption.click();
  // Click Add new card
  SavedPaymentMethodsPage.addName.type("Adrians");
  // Fill in Name
  SavedPaymentMethodsPage.addCardNumber.type("1234567890123456");
  // Fill in Card Number
  SavedPaymentMethodsPage.pickExpiryMonth.select("7");
  // Set expiry month to 7
  SavedPaymentMethodsPage.pickExpiryYear.select("2090");
  // Set expiry year to 2090
  SavedPaymentMethodsPage.submitButton.click().wait(700);
  // Click Submit button
  SavedPaymentMethodsPage.validateCard.last().should("contains.text", "************3456 Adrians7/2090");
  // Validate that the card shows up in the list
});
});
