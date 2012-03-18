namespace("Childermass.Views", {
  UserSelect: Childermass.Views.SimpleMustacheView.extend({
    template: 'user_select',

    presenterData: function() {
      return this.model.attributes;
    },

    events: {
      'keyup #user_input' : 'queryGithubOnEnter'
    },

    queryGithubOnEnter: function (event) {
      if (this.enterKeyPressed(event.keyCode)) {
        var inputValue = $(event.currentTarget).attr('value');
        this.model.set({login: inputValue}, {silent: true});
        this.model.fetch();
        this.collection.setUser(inputValue);
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

