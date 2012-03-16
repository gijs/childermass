describe("Childermass.Views.CurrentUser", function() {
  beforeEach(function() {
    this.view = new Childermass.Views.CurrentUser({el: '#test'});
    //this.mustachifyStub = sinon.stub(Childermass.Views.Mustachioed, "mustachify");
  });


  it("template is 'current_user'", function() {
    expect(this.view.template).toBe("current_user");
  });

  describe("render", function() {
    beforeEach(function() {
      setFixtures('<div id="test"></div>');
      this.model = new Backbone.Model({someAttribute: "foo"});
      this.view = new Childermass.Views.CurrentUser({model: this.model, el: '#test'});
      this.mustachifyStub = sinon.stub(this.view, "mustachify").returns("test html");
    });

    afterEach(function() {
      this.mustachifyStub.restore();
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
