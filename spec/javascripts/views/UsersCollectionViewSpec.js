describe("Childermass.Views.UsersCollectionView", function() {
  beforeEach(function() {
    this.collection = new Backbone.Collection();
    this.bindStub = sinon.stub(this.collection, "bind");
    this.view = new Childermass.Views.UsersCollectionView({el: '#test', collection: this.collection});
  });

  afterEach(function() {
    this.bindStub.restore();
  });

  it("binds the render to the collection change", function() {
    expect(this.bindStub).toHaveBeenCalledWith("change", this.view.render, this.view);
  });
  it("newModelView returns an instance of Childermass.Views.UserOverview", function() {
    var modelView = new Backbone.View();
    var model = new Backbone.Model({id: 1});
    var userOverviewStub = sinon.stub(Childermass.Views, "UserOverview").returns(modelView);

    expect(this.view.newModelView(model)).toEqual(modelView);

    userOverviewStub.restore();
  });
});
