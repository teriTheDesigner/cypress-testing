describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").type("ryan@coderyan.com");
    cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should("exist");
  });
});
