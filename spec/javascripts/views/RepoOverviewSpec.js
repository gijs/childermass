describe("Childermass.Views.RepoOverview", function() {
  beforeEach(function() {
    this.model = new Backbone.Model();
    this.view = new Childermass.Views.RepoOverview({model: this.model});
  });

  it("template is 'repo_overview'", function() {
    expect(this.view.template).toBe("repo_overview");
  });

  it("presenterData is model's attributes", function() {
    expect(this.view.presenterData()).toBe(this.model.attributes);
  });

  it("tagName is 'tr'", function() {
    expect(this.view.tagName).toBe("tr");
  });
});
