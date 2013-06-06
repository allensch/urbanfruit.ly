(function() {
  Ember.TEMPLATES["profileCreate"] = App.Templates.get("profile-create");

  App.ProfileCreateView = Ember.View.extend({
    templateName: "profileCreate",
    didInsertElement: function() {
      var profileArea;

      console.log("profile create did insert element");
      profileArea = this.$("#profile-div")[0];
      profileArea.addEventListener("dragover", this.preventDropTarget, false);
      return profileArea.addEventListener("drop", this.preventDropTarget, false);
    },
    preventDropTarget: (function(evt) {
      evt.stopPropagation();
      evt.preventDefault();
    })
  });

}).call(this);
