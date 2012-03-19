namespace("Childermass.Views", {
  UsersCollectionView: Childermass.Views.SimpleCollectionView.extend({

    initialize: function() {
      this.collection.bind('change', this.render, this);
    },

    newModelView: function(model) {
      return new Childermass.Views.UserOverview({model: model});
    }
  })

});

