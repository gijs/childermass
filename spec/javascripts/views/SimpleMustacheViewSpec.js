describe("Childermass.Views.SimpleMustache", function() {
  it("template is 'define in subclass'", function() {
    var view = new Childermass.Views.SimpleMustacheView({el: '#test'});
    expect(view.template).toBe("define in subclass");
  });

  describe("render", function() {
    beforeEach(function() {
      setFixtures('<div id="test"></div>');
      this.view = new Childermass.Views.SimpleMustacheView({el: '#test'});
      this.mustachifyStub = sinon.stub(this.view, "mustachify").returns("test html");
    });

    afterEach(function() {
      this.mustachifyStub.restore();
    });

    it("renders with mustachify ouput", function() {
      this.view.render();

      expect($('#test').html()).toBe("test html");
    });

    it("sends template and presenterData to mustachify", function() {
      this.view.render();

      expect(this.view.mustachify).toHaveBeenCalledWith(this.view.template, this.view.presenterData());
    });

    it("returns view", function() {
      expect(this.view.render()).toBe(this.view);
    });
  });


});

