describe("Childermass.Collections.GithubRepos", function() {
  beforeEach(function() {
    this.collection = new Childermass.Collections.GithubRepos([], {user: "mike"});
    this.triggerStub = sinon.stub(this.collection, "trigger");
  });

  afterEach(function() {
    this.triggerStub.restore();
  });

  it("model is Childermass.Models.GithubRepo", function() {
    expect(this.collection.model).toBe(Childermass.Models.GithubRepo);
  });

  it("url is /github/repos/mike", function() {
    this.collection.user = "mike"
    expect(this.collection.url()).toBe('/github/repos/mike');
  });

  describe("setUser", function() {
    beforeEach(function() {
      this.fetchStub = sinon.stub(this.collection, "fetch");
    });

    afterEach(function() {
      this.fetchStub.restore();
    });

    it("sets the user to the param", function() {
      this.collection.setUser("foo");

      expect(this.collection.user).toEqual("foo");
    });

    it("triggers a fetch", function() {
      this.collection.setUser("foo");

      expect(this.fetchStub).toHaveBeenCalledWith({success: this.collection.triggerChange});
    });

    it("does not trigger fetch if user is the same", function() {
      this.collection.user = "mike";
      this.collection.setUser("mike");

      expect(this.fetchStub).not.toHaveBeenCalled();
    });
  });

  describe("triggerChange", function() {
    it("triggers a change event", function() {
      this.collection.triggerChange();

      expect(this.triggerStub).toHaveBeenCalledWith("change");
    });
  });

  describe("comparator", function() {
    it("returns negative of updated_at as a JS Date", function() {
      var model = new Backbone.Model({updated_at: "2012-03-18T16:27:22Z"});

      var date = this.collection.comparator(model);
      var expectedDate = new Date("2012-03-18T16:27:22Z");

      expect(date).toEqual(-expectedDate);
    });
  });

});
