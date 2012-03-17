describe("Childermass.Views.UserSelect", function() {
  beforeEach(function() {
    this.model = new Backbone.Model();
    this.bindStub = sinon.stub(this.model, "bind");
    this.view = new Childermass.Views.UserSelect({el: '#test', model: this.model});
  });

  afterEach(function() {
    this.bindStub.restore();
  });

  it("template is 'user_select'", function() {
    expect(this.view.template).toBe("user_select");
  });

  it("presenterData returns model's attributes", function() {
    expect(this.view.presenterData()).toBe(this.model.attributes);
  });

  describe("events", function () {
    it("binds 'queryGithubOnEnter' to 'keyup #new-task'", function () {
      expect(this.view.events['keyup #user_input']).toEqual('queryGithubOnEnter');
    });
  });

  describe("queryGithubOnEnter", function () {
    beforeEach(function () {
      this.input = document.createElement('input');
      this.input.value = "foo";

      this.mockEvent = {
        keyCode : 13,
        currentTarget: this.input
      }

      this.fetchStub = sinon.stub(this.model, "fetch");
    });

    afterEach(function() {
      this.fetchStub.restore();
    });

    it("sets the login value silently on the model", function () {
      this.view.queryGithubOnEnter(this.mockEvent);

      expect(this.view.model.get('login')).toBe("foo");
    });

    it("fetches the model", function () {
      this.view.queryGithubOnEnter(this.mockEvent);

      expect(this.fetchStub).toHaveBeenCalled();
    });

    it("clears the input value in the el", function () {
      setFixtures('<div id="test"><input id="user_input" value="foo" /></div>')
      var view = new Childermass.Views.UserSelect({el: '#test', model: this.model});

      view.queryGithubOnEnter(this.mockEvent);

      expect($('#user_input').attr("value")).toEqual("");
    });

    it("does nothing if keycode isn't 13", function () {
      var mockEvent = {keyCode : 14};

      this.view.queryGithubOnEnter(mockEvent);
      expect(this.fetchStub).not.toHaveBeenCalled();
    });
  });

});
