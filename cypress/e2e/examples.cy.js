describe("Various examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("multi-page testing", () => {
    cy.getDataTest("nav-why-cypress").click();
    cy.location("pathname").should("equal", "/");

    cy.getDataTest("nav-overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getDataTest("nav-fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.getDataTest("nav-component").click();
    cy.location("pathname").should("equal", "/component");
  });

  it.only("intercepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      body: {
        message: "successfully intercepted request",
      },
    });
    cy.getDataTest("post-button").click();
  });
});
