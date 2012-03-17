namespace("Childermass.Views", {
  UserSelect: Backbone.View.extend({
    template: 'user_select',

    events: {
      'keyup #user_input' : 'queryGithubOnEnter'
    },

    render: function() {
     this.$el.html(this.mustachify(this.template, this.model.attributes));
     return this;
    },

    queryGithubOnEnter: function (event) {
      if (this.enterKeyPressed(event.keyCode)) {
        var inputValue = $(event.currentTarget).attr('value');
        this.model.set({login: inputValue}, {silent: true});
        this.model.fetch();
        this.clearInput();
      }
    },

    enterKeyPressed : function (keyCode) {
     return (keyCode === 13);
    },

    clearInput: function() {
      this.$('input').attr("value", "");
    }
  })
});

_.extend(Childermass.Views.UserSelect.prototype, Childermass.Views.Mustachioed);

