describe("Login modal", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("Open", () => {
    cy.get("#account").click();
    cy.get("#login").click();
    cy.get(".v-dialog").should("have.class", "v-dialog--active");
  });

  it("Close by the cross", () => {
    cy.get("#account").click();
    cy.get("#login").click();
    cy.get(".v-dialog > .v-toolbar > .v-toolbar__content > .v-btn").click();
    cy.get(".v-dialog").should("not.have.class", "v-dialog--active");
  });
});
