namespace("Childermass.Views", {
  RepoOverview: Childermass.Views.SimpleMustache.extend({
    template: 'repo_overview',
    tagName: 'tr',

    presenterData: function() {
      return this.model.attributes;
    }
  })
});
