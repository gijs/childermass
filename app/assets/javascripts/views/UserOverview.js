namespace("Childermass.Views", {
  UserOverview: Childermass.Views.SimpleMustacheView.extend({
    template: 'user_overview',
    tagName: 'tr',

    presenterData: function() {
      return this.model.attributes;
    }
  })
});
