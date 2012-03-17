describe("Childermass.Views.Mustachioed", function() {
  beforeEach(function() {
  });

  describe("render", function() {
    it("uses Mustache to general html", function() {
      setFixtures('<script type="text/x-mustache-template" name="current_user">ohai {{user}}</script><div id="test"></div>');

      expect(Childermass.Views.Mustachioed.mustachify('current_user', {user: "mike"})).toEqual('ohai mike');
    });

  });
});
