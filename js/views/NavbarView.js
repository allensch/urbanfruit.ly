(function() {
  Ember.TEMPLATES["navbar"] = App.Templates.get("navbar");

  App.NavbarView = Ember.View.extend({
    templateName: "navbar"
  });

}).call(this);
