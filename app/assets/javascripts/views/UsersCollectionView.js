namespace("Childermass.Views", {
  UsersCollectionView: Childermass.Views.SimpleCollectionView.extend({

    newModelView: function(model) {
      return new Childermass.Views.UserOverview({model: model});
    }
  })

});

