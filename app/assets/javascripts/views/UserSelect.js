namespace("Childermass.Views", {
  UserSelect: Childermass.Views.SimpleMustacheView.extend({
    initialize: function(options) {
      this.router = options.router;
    },

    template: 'user_select',

    events: {
      'keyup #user_input' : 'queryGithubOnEnter'
    },

    queryGithubOnEnter: function (event) {
      if (this.enterKeyPressed(event.keyCode)) {
        var inputValue = $(event.currentTarget).attr('value');
        this.router.navigate(inputValue, {trigger: true});
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

