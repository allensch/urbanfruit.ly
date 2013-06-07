(function() {
  App.ProfileCreateController = Ember.Controller.extend({
    needs: "auth",
    profilePic: null,
    profileSrc: 'img/profile_img_placeholder.png',
    fileData: null,
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
          profileController.set('fileData', data);
          console.log("Setting data file:" + data.name);
          profileController.set('_profileFilename', data.name);
        }),
        error: (function(data) {
          var obj;

          obj = jQuery.parseJSON(data);
          alert(obj.error);
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
      var Profile, fileObj, profile;

      console.log("Creating profile action");
      Profile = Parse.Object.extend("Profile");
      profile = new Profile();
      profile.set('owner', Parse.User.current());
      profile.set('about', this.get('bio'));
      profile.save();
      if (this.get('_profileFilename')) {
        fileObj = {
          name: this.get('_profileFilename'),
          __type: 'File'
        };
        profile.set("picture", fileObj);
      }
      profile.save();
      console.log("profile created");
    })
  });

}).call(this);
