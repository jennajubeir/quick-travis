describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });

  it("opens with correct title", () => {
    cy.visit("/");
    cy.get("[data-cy=hi]").should("contain", "fit");
  });
  it("shows brands when clicked", () => {
    cy.visit("/");
    cy.get("[data-cy=clickme]").click();
    cy.get("[data-cy=hi]").should("contain", "Lululemon");
  });
});
