(function() {
  App.LoginRoute = Ember.Route.extend({
    setupController: function(controller, context) {
      controller.reset();
    }
  });

}).call(this);
