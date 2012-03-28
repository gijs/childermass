namespace("Childermass.Views", {
  SimpleCollectionView: Backbone.View.extend({
    render: function() {
      this.$el.html('');
      this.collection.each(this.appendModelView, this)
      return this;
    },

    appendModelView: function(model) {
      var el = this.newModelView(model).render().el;
      this.$el.append(el);
    },

    newModelView: function(model) {
      return "Override in subclass with function that returns a model view"
    }
  })
});

