describe("Childermass.Models.GithubUser", function() {
  beforeEach(function() {
    this.model = new Childermass.Models.GithubUser({login: "mike"});
  });

  it("urlRoot is '/github/users'", function() {
    expect(this.model.urlRoot).toEqual('/github/users/');
  });

  it("url uses urlRoot plus login attr", function() {
    expect(this.model.url()).toEqual('/github/users/mike');
  });
});
