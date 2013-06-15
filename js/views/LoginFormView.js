(function() {
  App.Views.LoginFormView = Ember.View.extend({
    forgotPassword: false,
    template: App.Templates.get('login-form'),
    focusInputEmail: function() {
      Ember.run.later(this, (function() {
        if (!$('#inputEmail', this.$()).val()) {
          this.$('#inputEmail').focus();
        }
      }), 500);
    },
    didInsertElement: function() {
      $('#loginDropDownItem').click((function() {
        this.focusInputEmail();
        return true;
      }).bind(this));
      $('form', this.$()).submit(function() {
        this.submitLogin();
        return false;
      });
    },
    clickSignIn: function() {
      this.submitLogin();
    },
    clickCreateAccount: function() {
      console.log('clickCreateAccount');
    },
    clickForgotPassword: function() {
      this.set('forgotPassword', true);
      this.focusInputEmail();
      return false;
    },
    clickCancelForgotPassword: function() {
      this.set('forgotPassword', false);
      return false;
    },
    click: function(e) {
      e.stopImmediatePropagation();
    },
    submitLogin: function() {
      var password, username;

      username = $('#inputEmail', this.$()).val();
      password = $('#inputPassword', this.$()).val();
      this.get('controller').get('controllers.auth').handleLogin(username, password, this.onLoginSucess.bind(this), this.onLoginError.bind(this));
    },
    onLoginSucess: function(data) {
      console.log('login sucess', data);
    },
    onLoginError: function(data) {
      console.log('login sucess', data);
    }
  });

}).call(this);
