Ember.TEMPLATES["profileCreate"] = App.Templates.get("profile-create")
App.ProfileCreateView = Ember.View.extend(
  templateName: "profileCreate"

  didInsertElement: ->
    profileArea = @$("#profile-div")[0]
    profileArea.addEventListener "dragover", @preventDropTarget, false
    profileArea.addEventListener "drop", @preventDropTarget, false
    return

  updateProgressBar: ( ->
    try
      console.log "progresss bar updating..."
      @$("#file-upload-progress").removeClass("hide")
      @$("#file-upload-progress .bar").css('width', @get('controller.percentLoaded') + "%")
      if @get('controller.percentLoaded') >= 100
        @$("#file-upload-progress").addClass("progress-success")
      else
        @$("#file-upload-progress").removeClass("progress-success")
    catch e
      #do nothing

    return
  ).observes('controller.percentLoaded')

  # Prevent files accidentally dropped outside the drop target
  # from navigating away from the page.
  preventDropTarget: ((evt) ->
    evt.stopPropagation()
    evt.preventDefault()
    return
  )

)