(function() {
  App.LoginController = Ember.Controller.extend({
    needs: "auth",
    reset: function() {
      return this.setProperties({
        username: "",
        password: "",
        errorMessage: ""
      });
    },
    isLoggedIn: (function() {
      if (this.get('controllers.auth').get('user')) {
        return true;
      }
      return false;
    }).property('controllers.auth.user'),
    login: function() {
      var data, loginController, self;

      self = this;
      data = this.getProperties("username", "password");
      this.set("errorMessage", null);
      console.log("performing login action" + data.username + ":" + data.password);
      loginController = this;
      loginController.get('controllers.auth').handleLogin(data.username, data.password, (function(user) {
        loginController.transitionToRoute('index');
      }), (function(user, error) {
        loginController.set("errorMessage", "Login Failed:" + error.message);
      }));
    },
    logout: function() {
      return this.get('controllers.auth').handleLogout();
    }
  });

}).call(this);
