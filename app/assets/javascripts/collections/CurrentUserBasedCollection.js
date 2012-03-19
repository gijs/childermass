namespace("Childermass.Collections", {
  CurrentUserBasedCollection: Backbone.Collection.extend({
    model: Childermass.Models.GithubUser,

    url: function() {
      return 'override in subclass'
    },

    initialize: function(models, options) {
      this.currentUser = options.currentUser;
      this.currentUser.bind('change', this.fetchUsers, this);
      _.bindAll(this, "triggerChange");
    },

    fetchUsers: function() {
      this.fetch({success: this.triggerChange});
    },

    triggerChange: function() {
      this.trigger("change");
    }
  })
});

