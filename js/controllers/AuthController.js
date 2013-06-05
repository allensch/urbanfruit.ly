(function() {
  App.AuthController = Ember.Controller.extend({
    userChange: 0,
    user: (function() {
      var currentUser;

      currentUser = Parse.User.current();
      if (currentUser) {
        return currentUser;
      }
      return false;
    }).property('userChange'),
    handleLogin: function(username, password, successFunc, errorFunc) {
      var authController;

      authController = this;
      return Parse.User.logIn(username, password, {
        success: function(user) {
          successFunc(user);
          authController.incrementProperty('userChange');
        },
        error: function(user, error) {
          errorFunc(user, error);
        }
      });
    },
    handleLogout: function() {
      Parse.User.logOut();
      this.incrementProperty('userChange');
    }
  });

}).call(this);
