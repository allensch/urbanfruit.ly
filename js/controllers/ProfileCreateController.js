(function() {
  App.ProfileCreateController = Ember.Controller.extend({
    needs: "auth",
    profilePic: null,
    profileSrc: 'img/profile_img_placeholder.png',
    percentLoaded: -1,
    _profileFilename: null,
    profilePicSelected: (function() {
      var file, postUrl, profileController;

      console.log("Profile PIc uploaded");
      console.log("file:" + this.get('profilePic').name);
      profileController = this;
      file = this.get('profilePic');
      postUrl = "https://" + App._SETTINGS.PARSE_API_BASE_URL + "/1/files/" + file.name;
      return $.ajax({
        type: "post",
        beforeSend: (function(request) {
          request.setRequestHeader("X-Parse-Application-Id", _APP_SECRETS.PARSE_APP_ID);
          request.setRequestHeader("X-Parse-REST-API-Key", _APP_SECRETS.PARSE_API_REST_KEY);
          request.setRequestHeader("Content-Type", file.type);
        }),
        url: postUrl,
        data: file,
        processData: false,
        contentType: false,
        success: (function(data) {
          console.log("Successful file post.");
          console.log(data);
          console.log("Setting data file:" + data.name);
          profileController.set('_profileFilename', data.name);
        }),
        error: (function(data) {
          var obj;

          obj = jQuery.parseJSON(data);
          console.log(obj.error);
        }),
        progress: (function(e) {
          var pct;

          if (e.lengthComputable) {
            pct = (e.loaded / e.total) * 100;
            console.log(pct);
            profileController.set('showProgressBar', true);
            return profileController.set('percentLoaded', pct);
          }
        })
      });
    }).observes('profilePic'),
    createProfile: (function() {
      var Profile, controller, file, handlers, picObj, profile;

      console.log("Creating profile action");
      Profile = Parse.Object.extend("Profile");
      profile = new Profile();
      profile.set('owner', Parse.User.current());
      profile.set('about', this.get('bio'));
      controller = this;
      if (this.get('_profileFilename')) {
        console.log("setting profile pic");
        file = this.get('profilePic');
        picObj = new Parse.File(file.name, file, file.type);
        profile.set('picture', picObj);
      }
      handlers = {
        success: function(result) {
          console.log("success transitioning to /profile");
          controller.transitionTo('profile');
        },
        error: function(result, error) {
          console.log(error);
        }
      };
      profile.save(null, handlers);
      console.log("profile created");
    })
  });

}).call(this);
