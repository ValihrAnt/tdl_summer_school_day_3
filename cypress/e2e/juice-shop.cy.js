import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import LemonPage from "../pageObjects/LemonPage";
import fiveHundredmlPage from "../pageObjects/fiveHundredmlPage";

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

  // Create scenario - Read a review
  // Click on search icon
  // Search for King
  // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!

  // Create scenario - Add a review
  // Click on search icon
  // Search for Raspberry
  // Select a product card - Raspberry Juice (1000ml)
  // Type in review - "Tastes like metal"
  // Click Submit
  // Click expand reviews button/icon (wait for reviews to appear)
  // Validate review -  "Tastes like metal"

  // Create scenario - Validate product card amount
  // Validate that the default amount of cards is 12
  // Change items per page (at the bottom of page) to 24
  // Validate that the amount of cards is 24
  // Change items per page (at the bottom of page) to 36
  // Validate that the amount of cards is 35

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
