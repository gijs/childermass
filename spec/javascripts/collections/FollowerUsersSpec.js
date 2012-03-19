describe("Childermass.Collections.FollowerUsers", function() {
  it("url is /github/users/mike/followers", function() {
    var currentUserModel = new Backbone.Model({login: "mike"});
    var collection = new Childermass.Collections.FollowerUsers([], {currentUser: currentUserModel});

    expect(collection.url()).toBe('/github/users/mike/followers');
  });
});

