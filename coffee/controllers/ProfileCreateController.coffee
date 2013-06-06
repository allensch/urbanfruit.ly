App.ProfileCreateController = Ember.Controller.extend(
  needs: "auth"

  # This is set to a file object when ever a new profile pic is uploaded.
  profilePic: null

  profilePicSelected: ( ->
    console.log "Profile PIc uploaded"
    console.log "file:" + @get('profilePic').name

    #TODO: add code to post file via REST API.

    #TODO: add code to associate the Profile's file obj with the generated name from file post.

    #TODO: wire up the view's progress meter with the upload progress
  ).observes('profilePic')

)

