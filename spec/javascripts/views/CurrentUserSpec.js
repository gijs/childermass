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

  it("binds the render to the model change", function() {
    expect(this.bindStub).toHaveBeenCalledWith("change", this.view.render, this.view);
  });

  describe("render", function() {
    beforeEach(function() {
      setFixtures('<div id="test"></div>');
      this.model = new Backbone.Model({someAttribute: "foo"});
      this.bindStub = sinon.stub(this.model, "bind");
      this.view = new Childermass.Views.CurrentUser({model: this.model, el: '#test'});
      this.mustachifyStub = sinon.stub(this.view, "mustachify").returns("test html");
    });

    afterEach(function() {
      this.mustachifyStub.restore();
      this.bindStub.restore();
    });

    it("renders with mustachify ouput", function() {
      this.view.render();

      expect($('#test').html()).toBe("test html");
    });

    it("sends template and model attributes to mustachify", function() {
      this.view.render();

      expect(this.view.mustachify).toHaveBeenCalledWith(this.view.template, this.model.attributes);
    });

    it("returns view", function() {
      expect(this.view.render()).toBe(this.view);
    });
  });
});
