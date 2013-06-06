(function() {
  App.ProfileCreateController = Ember.Controller.extend({
    needs: "auth",
    profilePic: null,
    profilePicSelected: (function() {
      console.log("Profile PIc uploaded");
      return console.log("file:" + this.get('profilePic').name);
    }).observes('profilePic')
  });

}).call(this);
