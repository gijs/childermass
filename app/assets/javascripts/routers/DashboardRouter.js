namespace('Childermass.Routers', {
  DashboardRouter: Backbone.Router.extend({
    initialize: function(options) {
      this.currentUser = options.currentUser;
      this.repos = options.repos;
      this.following = options.following;
    },

    routes: {
      ':user' : 'loadCurrentUser',
      ':user/following' : 'loadUsersFollowing'
    },

    loadCurrentUser: function(user) {
      this.currentUser.set({login: user}, {silent: true});
      this.currentUser.fetch();
      this.repos.setUser(user);
    },

    loadUsersFollowing: function(user) {
    }
  })
});
