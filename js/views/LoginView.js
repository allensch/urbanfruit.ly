(function() {
  Ember.TEMPLATES["login"] = App.Templates.get("login");

  App.LoginView = Ember.View.extend({
    templateName: "login"
  });

}).call(this);
