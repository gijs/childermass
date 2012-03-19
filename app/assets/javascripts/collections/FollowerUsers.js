namespace("Childermass.Collections", {
  FollowerUsers: Childermass.Collections.CurrentUserBasedCollection.extend({
    url: function() {
      return '/github/users/' + this.currentUser.get('login') + '/followers'
    },
  })
});

