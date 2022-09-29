describe("Look vue", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("Open Femmes --> Boheme --> Look 2", () => {
    cy.get("#femmes").click();
    cy.get("#Boheme").click();
    cy.get("#2").click();
    cy.get(".v-dialog").should("have.class", "v-dialog--active");
  });
//   it("Close by the cross", () => {
//     cy.get("#femmes").click();
//     cy.get("#Boheme").click();
//     cy.get("#2").click();
//     cy.get(".v-dialog > .v-card > .v-card__actions > .v-btn").click({ multiple: true });
//     cy.get(".v-dialog").should("not.have.class", "v-dialog--active");
//   });
});
