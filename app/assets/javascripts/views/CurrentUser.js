namespace("Childermass.Views", {
  CurrentUser: Childermass.Views.SimpleMustacheView.extend({
    template: 'current_user',

    events: {
      'click #following' : 'navigateToFollowing'
    },

    presenterData: function() {
      return this.model.attributes;
    },

    initialize: function(options) {
      this.model.bind('change', this.render, this);
      this.router = options.router;
    },

    navigateToFollowing: function() {
      this.router.navigate(this.model.get('login') + '/following', {trigger: true});
    }
  })
});
