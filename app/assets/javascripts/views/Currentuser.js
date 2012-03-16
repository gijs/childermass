namespace("Childermass.Views", {
  CurrentUser: Backbone.View.extend({
    template: 'current_user',

    render: function() {
      console.log(this.mustachify());
      this.$el.html(this.mustachify(this.template, this.model.attributes));
    }
  })
});

_.extend(Childermass.Views.CurrentUser.prototype, Childermass.Views.Mustachioed);
