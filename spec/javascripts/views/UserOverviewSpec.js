describe("Childermass.Views.UserOverview", function() {
  beforeEach(function() {
    this.model = new Backbone.Model();
    this.view = new Childermass.Views.UserOverview({model: this.model});
  });

  it("template is 'user_overview'", function() {
    expect(this.view.template).toBe("user_overview");
  });

  it("presenterData is model's attributes", function() {
    expect(this.view.presenterData()).toBe(this.model.attributes);
  });

  it("tagName is 'tr'", function() {
    expect(this.view.tagName).toBe("tr");
  });
});

