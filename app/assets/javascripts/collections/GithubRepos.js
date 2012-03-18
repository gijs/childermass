namespace("Childermass.Collections", {
  GithubRepos: Backbone.Collection.extend({
    model: Childermass.Models.GithubRepo,

    initialize: function() {
      _.bindAll(this, "triggerChange");
    },

    url: function() {
      return '/github/repos/' + this.user
    },

    setUser: function(user) {
      if (user !== this.user) {
        this.user = user;
        this.fetch({success: this.triggerChange});
      }
    },

    triggerChange: function() {
      this.trigger("change");
    },

    comparator: function(repo) {
      return -(new Date(repo.get("updated_at")));
    }
  })
});
