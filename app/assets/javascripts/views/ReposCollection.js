namespace("Childermass.Views", {
  ReposCollection: Childermass.Views.SimpleMustacheCollectionView.extend({
    initialize: function() {
      this.collection.bind('change', this.render, this);
    },

    newModelView: function(model) {
      return new Childermass.Views.RepoOverview({model: model});
    }
  })

});
