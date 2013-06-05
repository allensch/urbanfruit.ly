App.AuthController = Ember.Controller.extend(
  # The userChange var is just there so the 'user' can indirectly observe a
  # a property that's in the Parse.User object.
  userChange: 0

  # Property that references the current user (or returns false if not logged in)
  user: (->
    currentUser = Parse.User.current();
    if currentUser
      return currentUser

    return false
  ).property('userChange')


  handleLogin: (username, password, successFunc, errorFunc) ->

    authController = @

    # perform Parse user login.  This object uses a promise model that takes in
    # username, password, and a Success and Failure functions.
    Parse.User.logIn username, password,
      success: (user) ->
        successFunc(user)
        # signal user change.
        authController.incrementProperty 'userChange'
        return
      error: (user, error) ->
        errorFunc(user, error)
        return

  # Handle Logging out.
  handleLogout: ->
    Parse.User.logOut()
    # signal user change
    @incrementProperty 'userChange'
    @transitionToRoute 'index'
    return
)