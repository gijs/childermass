describe("Childermass.Models.GithubRepo", function() {
  beforeEach(function() {
    this.model = new Childermass.Models.GithubRepo({owner: "mike"});
  });

  it("has an owner", function() {
    expect(this.model.get("owner")).toBe("mike");
  });
});

