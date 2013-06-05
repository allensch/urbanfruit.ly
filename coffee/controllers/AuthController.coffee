App.AuthController = Ember.Controller.extend(
  userChange: 0
  user: (->
    currentUser = Parse.User.current();

    if currentUser
      console.log "auth.user current logged in user: " + currentUser.username
      return currentUser

    console.log "not logged in"
    return false
  ).property('userChange')


  handleLogin: (username, password, successFunc, errorFunc) ->

    authController = @

    Parse.User.logIn username, password,
      success: (user) ->
        successFunc(user)
        authController.incrementProperty 'userChange'
        return
      error: (user, error) ->
        errorFunc(user, error)
        return

  handleLogout: ->
    console.log "logging out"
    Parse.User.logOut()
    @incrementProperty 'userChange'
    return
)