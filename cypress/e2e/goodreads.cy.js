/// <reference types= "cypress" />
describe("Goodreads add/remove book to 'Want to read' list functionality verification", () => {

  it("Navigate to Goodreads application", () => {
    cy.visit("https://www.goodreads.com/user/sign_in");
  });

  it("Login to the application", () => {
    cy.get(".authPortalConnectButton").click();
    cy.get("#ap_email").clear().type("dhanushpatel1996@gmail.com");
    cy.get("#ap_password").type("GRDhanush@21");
    cy.get("#signInSubmit").click();
  });

  it("Add book to 'Want to read' list", () => {
    cy.get(
      ".siteHeader__contents > .searchBox > .searchBox__form > .searchBox__input"
    ).type("The Alchemist");
    cy.get(
      ".siteHeader__contents > .searchBox > .searchBox__form > .searchBox__icon--magnifyingGlass"
    ).click();
    cy.get(
      "#\\31 _book_18144590 > .wtrLeft > form > .wtrToRead > .progressTrigger"
    ).click();
  });

  it("Remove book from the 'Want to read' list", () => {
    cy.get(".siteHeader__logo").click();
    cy.get(
      ':nth-child(4) > [data-react-class="ReactComponents.ShelfDisplay"] > .shelfDisplay > .u-marginTopXSmall > a'
    ).click();
    cy.get(".smallText > img").click();
    cy.get(".box > div")
      .invoke("text")
      .should("contain", "The Alchemist was removed from your books.");
  });

  it("Logout from the application", () => {
    cy.get(
      ".dropdown__trigger > .headerPersonalNav__icon > .circularIcon"
    ).click();
    cy.get(
      '.siteHeader__subNav > ul > [role="menuitem Sign out"] > .siteHeader__subNavLink'
    ).click();
  });
  
});

