describe("Childermass.Routers.DashboardRouter", function() {
  beforeEach(function() {
    this.model = new Backbone.Model();
    this.collection = new Backbone.Collection();
    this.collection.setUser = function() {};
    this.router = new Childermass.Routers.DashboardRouter({
      currentUser: this.model,
      repos: this.collection
    });
  });

  describe("routes", function() {
    it("routes ':user' to 'loadCurrentUser'", function() {
      expect(this.router.routes[':user']).toBe('loadCurrentUser');
    });
  });

  describe("initialize", function() {
    it("sets currentUser", function() {
      expect(this.router.currentUser).toBe(this.model);
    });

    it("sets repos", function() {
      expect(this.router.repos).toBe(this.collection);
    })
  });

  describe("loadCurrentUser", function() {
    beforeEach(function() {
      this.setStub = sinon.stub(this.model, "set");
      this.fetchStub = sinon.stub(this.model, "fetch");
      this.setUserStub = sinon.stub(this.collection, "setUser");
    });

    afterEach(function() {
      this.setStub.restore();
      this.fetchStub.restore();
      this.setUserStub.restore();
    });

    it("sets the user slug to login on the model silently", function() {
      this.router.loadCurrentUser('gitbub');

      expect(this.setStub).toHaveBeenCalledWith({login: 'gitbub'}, {silent: true});
    })

    it("triggers a model fetch", function() {
      this.router.loadCurrentUser('gitbub');

      expect(this.fetchStub).toHaveBeenCalled();
    });

    it("sets user on repos collection", function() {
      this.router.loadCurrentUser('gitbub');

      expect(this.setUserStub).toHaveBeenCalledWith('gitbub');
    });
  });
});
