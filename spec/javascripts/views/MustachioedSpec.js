describe("Childermass.Views.Mustachioed", function() {
  beforeEach(function() {
  });

  describe("render", function() {
    it("uses Mustache to general html", function() {
      setFixtures('<script type="text/x-mustache-template" name="current_user">ohai</script><div id="test"></div>');

      expect(Childermass.Views.Mustachioed.mustachify('current_user', {})).toEqual('ohai');
    });
  });
});
