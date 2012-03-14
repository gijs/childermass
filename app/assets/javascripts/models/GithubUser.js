namespace("Childermass.Models", {
  GithubUser : Backbone.Model.extend({
    urlRoot: '/github/users/',

    url: function() {
     return this.urlRoot + this.get('login');
    }
  })
})
