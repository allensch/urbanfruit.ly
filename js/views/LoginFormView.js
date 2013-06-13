(function() {
  App.Views.LoginFormView = Ember.View.extend({
    forgotPassword: false,
    template: App.Templates.get('login-form'),
    didInsertElement: function() {
      console.log('LoginFormView');
      this.$('form', this.$()).submit(function(e) {
        console.log('SUBMIT');
        return false;
      });
    },
    clickCreateAccount: function() {
      console.log('clickCreateAccount');
    },
    clickForgotPassword: function() {
      this.set('forgotPassword', true);
      return false;
    },
    clickCancelForgotPassword: function() {
      this.set('forgotPassword', false);
      return false;
    },
    click: function(e) {
      console.log(e);
      e.stopImmediatePropagation();
    }
  });

}).call(this);
