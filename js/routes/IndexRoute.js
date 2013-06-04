(function() {
  App.IndexRoute = App.Route.extend({
    renderTemplate: function() {
      this.render(App.Template.get("index"), {
        into: "application"
      });
    }
  });

}).call(this);
