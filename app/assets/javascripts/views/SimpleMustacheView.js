namespace('Childermass.Views', {
  SimpleMustacheView: Backbone.View.extend({
    template: 'define in subclass',
    presenterData: function() {
      return {}
    },
    render: function() {
     this.$el.html(this.mustachify(this.template, this.presenterData()));
     return this;
    },
  })
});

_.extend(Childermass.Views.SimpleMustacheView.prototype, Childermass.Views.Mustachioed);
