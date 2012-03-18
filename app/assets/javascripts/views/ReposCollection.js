namespace("Childermass.Views", {
  ReposCollection: Childermass.Views.SimpleCollectionView.extend({
    initialize: function() {
      this.collection.bind('change', this.render, this);
    },

    newModelView: function(model) {
      return new Childermass.Views.RepoOverview({model: model});
    }
  })

});
