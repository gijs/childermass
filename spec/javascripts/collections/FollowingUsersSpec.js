describe("Childermass.Collections.FollowingUsers", function() {
  it("url is /github/users/mike/following", function() {
    var currentUserModel = new Backbone.Model({login: "mike"});
    var collection = new Childermass.Collections.FollowingUsers([], {currentUser: currentUserModel});

    expect(collection.url()).toBe('/github/users/mike/following');
  });
});
