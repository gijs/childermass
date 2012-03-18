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

  it("url is /github/users/mike/repos", function() {
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

});
