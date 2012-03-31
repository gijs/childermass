namespace('Childermass.Routers', {
  DashboardRouter: Backbone.Router.extend({
    initialize: function(options) {
      this.currentUser = options.currentUser;
      this.repos = options.repos;
    },

    routes: {
      ':user' : 'loadCurrentUser'
    },

    loadCurrentUser: function(user) {
      this.currentUser.set({login: user}, {silent: true});
      this.currentUser.fetch();
      this.repos.setUser(user);
    }
  })
});
