(function() {
  Ember.TEMPLATES["index"] = App.Templates.get("index");

  App.IndexView = Ember.View.extend({
    templateName: "index"
  });

}).call(this);
