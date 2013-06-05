(function() {
  App.NavbarController = Ember.ObjectController.extend({
    needs: 'auth',
    isLoggedIn: (function() {
      if (this.get('controllers.auth').get('user')) {
        return true;
      }
      return false;
    }).property('controllers.auth.user'),
    logout: function() {
      this.get('controllers.auth').handleLogout();
    }
  });

}).call(this);
