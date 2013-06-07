(function() {
  Ember.TEMPLATES["profileCreate"] = App.Templates.get("profile-create");

  App.ProfileCreateView = Ember.View.extend({
    templateName: "profileCreate",
    didInsertElement: function() {
      var profileArea, view;

      profileArea = this.$("#profile-div")[0];
      profileArea.addEventListener("dragover", this.preventDropTarget, false);
      profileArea.addEventListener("drop", this.preventDropTarget, false);
      view = this;
      this.$("#file-select").change(function(evt) {
        console.log("file selection event");
        return view.handleFileSelected(view, this.files[0]);
      });
    },
    updateProgressBar: (function() {
      var e;

      try {
        console.log("progresss bar updating...");
        this.$("#file-upload-progress").removeClass("hide");
        this.$("#file-upload-progress .bar").css('width', this.get('controller.percentLoaded') + "%");
        if (this.get('controller.percentLoaded') >= 100) {
          this.$("#file-upload-progress").addClass("progress-success");
        } else {
          this.$("#file-upload-progress").removeClass("progress-success");
        }
      } catch (_error) {
        e = _error;
      }
    }).observes('controller.percentLoaded'),
    preventDropTarget: (function(evt) {
      evt.stopPropagation();
      evt.preventDefault();
    }),
    handleFileSelected: (function(view, file) {
      console.log("handling file selection event.");
      console.log(file);
      view.get('controller').set("profilePic", file);
    })
  });

}).call(this);
