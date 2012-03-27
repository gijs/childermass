namespace("Childermass.Views", {
  CurrentUser: Childermass.Views.SimpleMustacheView.extend({
    template: 'current_user',

    presenterData: function() {
      return this.model.attributes;
    },

    initialize: function() {
      this.model.bind('change', this.render, this);
    }
  })
});
