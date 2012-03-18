describe("Childermass.Views.ReposCollection", function() {
  beforeEach(function() {
    this.collection = new Backbone.Collection();
    this.bindStub = sinon.stub(this.collection, "bind");
    this.view = new Childermass.Views.ReposCollection({el: '#test', collection: this.collection});
  });

  afterEach(function() {
    this.bindStub.restore();
  });

  it("binds the render to the model change", function() {
    expect(this.bindStub).toHaveBeenCalledWith("change", this.view.render, this.view);
  });

  describe("render", function() {
    beforeEach(function() {
      setFixtures('<table id="repos_table"></table>')

      this.collection = new Backbone.Collection();
      this.modelView = new Backbone.View();
      this.modelView.render = function() {
        this.el = document.createElement('td');
        return this;
      };

      this.modelViewStub = sinon.stub(Childermass.Views, "RepoOverview").returns(this.modelView);
      this.modelViewRenderSpy = sinon.spy(this.modelView, "render")

      this.view = new Childermass.Views.ReposCollection({el: '#repos_table', collection: this.collection});

    });

    afterEach(function() {
      this.modelViewStub.restore();
      this.modelViewRenderSpy.restore();
    });

    it("renders the modelView 0 times if collection is empty", function() {
      this.view.render();

      expect(this.modelViewStub).not.toHaveBeenCalled();
      expect(this.modelViewRenderSpy).not.toHaveBeenCalled();
    });

    it("renders once per model", function() {
      var model1 = new Backbone.Model({id: 1});
      var model2 = new Backbone.Model({id: 2});
      this.view.collection = new Backbone.Collection([model1, model2]);
      this.view.render();

      expect(this.modelViewStub).toHaveBeenCalledTwice();
      expect(this.modelViewRenderSpy).toHaveBeenCalledTwice();
    });

    it("appends the model render to the collection el", function() {
      var model1 = new Backbone.Model({id: 1});
      var model2 = new Backbone.Model({id: 2});
      this.view.collection = new Backbone.Collection([model1, model2]);
      this.view.render();

      expect($('#repos_table').children().length).toEqual(2);
    });

    it("returns view", function() {
      expect(this.view.render()).toBe(this.view);
    });
  });
});
