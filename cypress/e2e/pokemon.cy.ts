describe("Pokedex", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.intercept("GET", "**/api/v2/pokemon/**", {
      fixture: "pokemons.json",
    }).as("getPokemons");
    cy.wait("@getPokemons");
  });

  it("renders pokemon cards", () => {
    cy.get("[data-testid='pokemon card']").should("have.length", 20);
  });

  it("should display load more button", () => {
    cy.contains("Load more").should("be.visible");
  });

  it("should load more pokemons", () => {
    cy.contains("Load more").click();
    cy.wait("@getPokemons");
    cy.get("[data-testid='pokemon card']").should("have.length", 40);
  });

  it("should add new pokemon", () => {
    cy.contains("Add").click();
    cy.get("input").type("My New Pokemon");
    cy.contains("Save").click();
    cy.get("[data-testid='pokemon card']").should("have.length", 21);
    cy.contains("My New Pokemon").should("be.visible");
  });

  it("should persist added new pokemons", () => {
    cy.contains("Add").click();
    cy.get("input").type("My New Pokemon");
    cy.contains("Save").click();
    cy.reload();
    cy.get("[data-testid='pokemon card']").should("have.length", 21);
    cy.contains("My New Pokemon").should("be.visible");
  });

  // it("should display 6 games categories in the header", () => {
  //   cy.get("header").find("button").should("have.length", 6);
  // });

  // it("should display the right casino categories in the header", () => {
  //   cy.get("header").find("button").eq(0).should("have.text", "All Games");
  //   cy.get("header").find("button").eq(1).should("have.text", "Live Dealer");
  //   cy.get("header").find("button").eq(2).should("have.text", "Table Games");
  //   cy.get("header").find("button").eq(3).should("have.text", "Popular Games");
  //   cy.get("header").find("button").eq(4).should("have.text", "Video Slots");
  //   cy.get("header").find("button").eq(5).should("have.text", "Top Slots");
  // });

  // it("should filter the casino games", () => {
  //   cy.get("input").type("under");
  //   cy.get("[data-testid=games-list]").children().should("have.length", 3);
  // });

  // it("should filter the casino games when clicking on a category", () => {
  //   cy.contains("Popular Games").click();
  //   cy.get("[data-testid=game]").should("have.length", 7);
  // });

  // it("should display all games initially", () => {
  //   cy.get("[data-testid=game]").should("have.length", 182);
  // });
});
