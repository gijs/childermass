  describe("render", function() {
    beforeEach(function() {
      setFixtures('<table id="repos_table"></table>')

      this.collection = new Backbone.Collection();
      this.view = new Childermass.Views.SimpleCollectionView({el: '#repos_table', collection: this.collection});

      this.modelView = new Backbone.View();
      this.modelView.render = function() {
        this.el = document.createElement('td');
        return this;
      };
      this.newModelViewStub = sinon.stub(this.view, "newModelView").returns(this.modelView);
      this.modelViewRenderSpy = sinon.spy(this.modelView, "render")
    });

    afterEach(function() {
      this.newModelViewStub.restore();
      this.modelViewRenderSpy.restore();
    });

    it("renders the modelView 0 times if collection is empty", function() {
      this.view.render();

      expect(this.newModelViewStub).not.toHaveBeenCalled();
      expect(this.modelViewRenderSpy).not.toHaveBeenCalled();
    });

    it("renders once per model", function() {
      var model1 = new Backbone.Model({id: 1});
      var model2 = new Backbone.Model({id: 2});
      this.view.collection = new Backbone.Collection([model1, model2]);
      this.view.render();

      expect(this.newModelViewStub).toHaveBeenCalledTwice();
      expect(this.modelViewRenderSpy).toHaveBeenCalledTwice();
    });

    it("appends the model render to the collection el", function() {
      var model1 = new Backbone.Model({id: 1});
      var model2 = new Backbone.Model({id: 2});
      this.view.collection = new Backbone.Collection([model1, model2]);
      this.view.render();

      expect($('#repos_table').children().length).toEqual(2);
    });

    it("clears the collection el before rendering", function() {
      var model1 = new Backbone.Model({id: 1});
      var model2 = new Backbone.Model({id: 2});
      this.view.collection = new Backbone.Collection([model1, model2]);
      this.view.render();
      this.view.render();

      expect($('#repos_table').children().length).toEqual(2);
    });

    it("returns view", function() {
      expect(this.view.render()).toBe(this.view);
    });
  });

