(function() {
  App.LoginRoute = Ember.Route.extend({
    setupController: function(controller, context) {
      console.log("Setting up login route.");
      controller.reset();
    }
  });

}).call(this);
