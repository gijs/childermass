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

  it("newModelView returns an instance of Childermass.Views.RepoOverview", function() {
    var modelView = new Backbone.View();
    var model = new Backbone.Model({id: 1});
    var repoOverviewStub = sinon.stub(Childermass.Views, "RepoOverview").returns(modelView);

    expect(this.view.newModelView(model)).toEqual(modelView);

    repoOverviewStub.restore();
  });

});
