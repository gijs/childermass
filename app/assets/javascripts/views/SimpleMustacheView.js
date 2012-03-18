namespace('Childermass.Views', {
  SimpleMustacheView: Backbone.View.extend({
    template: 'define in subclass',
    presenterData: function() {
      return {
        default: "Override the presenterData function in your subclass"
      }
    },
    render: function() {
     this.$el.html(this.mustachify(this.template, this.presenterData()));
     return this;
    },
  })
});

_.extend(Childermass.Views.SimpleMustacheView.prototype, Childermass.Views.Mustachioed);
