describe("Childermass.Views.CurrentUser", function() {
  beforeEach(function() {
    this.model = new Backbone.Model({login: 'foo'});
    this.bindStub = sinon.stub(this.model, "bind");
    this.router = new Backbone.Router();
    this.navigateStub = sinon.stub(this.router, "navigate");
    this.view = new Childermass.Views.CurrentUser({el: '#test', model: this.model, router: this.router});
  });

  afterEach(function() {
    this.bindStub.restore();
    this.navigateStub.restore();
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

  describe("events", function() {
    it("binds 'click #following' to navigateToFollowing", function() {
      expect(this.view.events['click #following']).toEqual('navigateToFollowing');
    });
  });

  describe("navigateToFollowing", function() {
    it("navigates to the input value", function() {
      this.view.navigateToFollowing({});

      expect(this.navigateStub).toHaveBeenCalledWith("foo/following");
    });
  });
});
