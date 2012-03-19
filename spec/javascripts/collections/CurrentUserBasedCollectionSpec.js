describe("Childermass.Collections.CurrentUserBasedCollection", function() {
  beforeEach(function() {
    this.currentUserModel = new Backbone.Model({login: "mike"});
    this.bindStub = sinon.stub(this.currentUserModel, "bind");

    this.collection = new Childermass.Collections.CurrentUserBasedCollection([], {currentUser: this.currentUserModel});
    this.triggerStub = sinon.stub(this.collection, "trigger");
  });

  afterEach(function() {
    this.bindStub.restore();
    this.triggerStub.restore();
  });

  it("model is Childermass.Models.GithubUser", function() {
    expect(this.collection.model).toBe(Childermass.Models.GithubUser);
  });

  it("url is 'override in subclass'", function() {
    expect(this.collection.url()).toBe('override in subclass');
  });

  it("binds fetchUsers to currentUser change", function() {
    expect(this.bindStub).toHaveBeenCalledWith("change", this.collection.fetchUsers, this.collection);
  });

  describe("fetchUsers", function() {
    beforeEach(function() {
      this.fetchStub = sinon.stub(this.collection, "fetch");
    });

    afterEach(function() {
      this.fetchStub.restore();
    });

    it("calls fetch with a triggerChange success callback", function() {
      this.collection.fetchUsers();

      expect(this.fetchStub).toHaveBeenCalledWith({success: this.collection.triggerChange});
    });
  });

  describe("triggerChange", function() {
    it("triggers a change event", function() {
      this.collection.triggerChange();

      expect(this.triggerStub).toHaveBeenCalledWith("change");
    });
  });
});

