describe("Childermass.Views.UserSelect", function() {
  beforeEach(function() {
    this.router = new Backbone.Router();
    this.navigateStub = sinon.stub(this.router, "navigate");
    this.view = new Childermass.Views.UserSelect({el: '#test', router: this.router});
  });

  afterEach(function() {
    this.navigateStub.restore();
  });

  it("template is 'user_select'", function() {
    expect(this.view.template).toBe("user_select");
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
    });

    it("navigates to the input value", function() {
      this.view.queryGithubOnEnter(this.mockEvent);

      expect(this.navigateStub).toHaveBeenCalledWith("foo");
    });

    it("clears the input value in the el", function () {
      setFixtures('<div id="test"><input id="user_input" value="foo" /></div>')
      var view = new Childermass.Views.UserSelect({el: '#test', router: this.router});

      view.queryGithubOnEnter(this.mockEvent);

      expect($('#user_input').attr("value")).toEqual("");
    });

    it("does nothing if keycode isn't 13", function () {
      var mockEvent = {keyCode : 14};

      this.view.queryGithubOnEnter(mockEvent);
      expect(this.navigateStub).not.toHaveBeenCalled();
    });
  });

});
