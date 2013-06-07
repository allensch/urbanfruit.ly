App.ProfileCreateController = Ember.Controller.extend(
  needs: "auth"

  #profileModel: null # This is set by router to a new profile upon entry.

  # This is set to a file object when ever a new profile pic is uploaded.
  profilePic: null

  profileSrc:'img/profile_img_placeholder.png'

  # Control values we see in progress bar.
  percentLoaded: -1

  # Used for when we associate the file to the new profile.  This is set
  # upon successful upload.
  _profileFilename: null

  profilePicSelected: ( ->
    console.log "Profile PIc uploaded"
    console.log "file:" + @get('profilePic').name

    profileController = @

    #Do a REST post of the file.
    file = @get('profilePic')
    postUrl = "https://" + App._SETTINGS.PARSE_API_BASE_URL + "/1/files/" + file.name
    $.ajax
      type: "post"
      beforeSend: ((request) ->
        request.setRequestHeader "X-Parse-Application-Id", _APP_SECRETS.PARSE_APP_ID
        request.setRequestHeader "X-Parse-REST-API-Key", _APP_SECRETS.PARSE_API_REST_KEY
        request.setRequestHeader "Content-Type", file.type
        return
      )
      url: postUrl
      data: file
      processData: false
      contentType: false
      success: ((data) ->

        console.log "Successful file post."
        console.log data

        console.log "Setting data file:" + data.name
        profileController.set('_profileFilename', data.name)

        return
      )
      error: ((data) ->
        obj = jQuery.parseJSON(data)
        console.log obj.error
        return
      )
      progress: ((e) ->
        if (e.lengthComputable)
          #calculate the percentage loaded
          pct = (e.loaded / e.total) * 100

          #log percentage loaded
          console.log pct
          profileController.set('showProgressBar', true)
          profileController.set('percentLoaded', pct)

      )
    #End of .ajax call.
  ).observes('profilePic') #End of handling drag and drop image upload.


  # Handle creating a new profile.
  createProfile: (->
    console.log "Creating profile action"
    Profile = Parse.Object.extend("Profile")
    profile = new Profile()

    # set it to the currently logged in user from the auth controller
    profile.set('owner', Parse.User.current())
    profile.set('about', @get('bio'))

    controller = @

    if @get('_profileFilename')
      console.log "setting profile pic"

      # This file object is not yet publically documented.  May break with next release of Parse API
      file = @get('profilePic')
      picObj = new Parse.File(file.name, file, file.type)

      profile.set('picture', picObj)

    handlers =
      success: (result) ->
        console.log "success transitioning to /profile"
        controller.transitionTo('profile')
        return
      error: (result, error) ->
        console.log error
        return

    profile.save(null, handlers)

    console.log "profile created"
    return
  )

)

