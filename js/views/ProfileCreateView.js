(function() {
  Ember.TEMPLATES["profileCreate"] = App.Templates.get("profile-create");

  App.ProfileCreateView = Ember.View.extend({
    templateName: "profileCreate",
    didInsertElement: function() {
      var profileArea;

      profileArea = this.$("#profile-div")[0];
      profileArea.addEventListener("dragover", this.preventDropTarget, false);
      profileArea.addEventListener("drop", this.preventDropTarget, false);
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
    })
  });

}).call(this);
