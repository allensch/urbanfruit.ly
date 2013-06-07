(function() {
  App.ProfileCreateRoute = Ember.Route.extend({
    redirect: (function() {
      console.log("calling redirect");
      if (!this.controllerFor('auth').get('user')) {
        this.transitionTo('login');
      }
    })
  });

}).call(this);
