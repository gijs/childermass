namespace("Childermass.Views", {
  CurrentUser: Backbone.View.extend({
    template: 'current_user',

    initialize: function() {
      this.model.bind('change', this.render, this);
    },

    render: function() {

      this.$el.html(this.mustachify(this.template, this.model.attributes));

      return this;
    }
  })
});

_.extend(Childermass.Views.CurrentUser.prototype, Childermass.Views.Mustachioed);
