describe("Childermass.Views.CurrentUser", function() {
  beforeEach(function() {
    this.model = new Backbone.Model();
    this.bindStub = sinon.stub(this.model, "bind");
    this.view = new Childermass.Views.CurrentUser({el: '#test', model: this.model});
  });

  afterEach(function() {
    this.bindStub.restore();
  });

  it("template is 'current_user'", function() {
    expect(this.view.template).toBe("current_user");
  });

  it("presenterData returns model's attributes", function() {
    expect(this.view.presenterData()).toBe(this.model.attributes);
  });

  it("binds the render to the model change", function() {
    expect(this.bindStub).toHaveBeenCalledWith("change", this.view.render, this.view);
  });
});
