namespace("Childermass.Collections", {
  FollowingUsers: Childermass.Collections.CurrentUserBasedCollection.extend({
    url: function() {
      return '/github/users/' + this.currentUser.get('login') + '/following'
    },
  })
});
