(function() {
  App.PostRoute = App.Route.extend({
    renderTemplate: function() {
      return this.render("login", {
        into: "application"
      });
    }
  });

}).call(this);
