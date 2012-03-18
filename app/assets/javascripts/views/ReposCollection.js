namespace("Childermass.Views", {
  ReposCollection: Backbone.View.extend({
    initialize: function() {
      this.collection.bind('change', this.render, this);
    },

    render: function() {
      this.collection.each(this.addRepo, this)
      return this;
    },

    addRepo: function(model) {
      var modelView = new Childermass.Views.RepoOverview({model: model});
      var el = modelView.render().el;
      this.$el.append(el);
    }

  })

});
