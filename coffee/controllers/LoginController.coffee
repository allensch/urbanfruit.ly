App.LoginController = Ember.Controller.extend(
  needs: "auth"

  reset: ->
    @setProperties
      username: ""
      password: ""
      errorMessage: ""

  isLoggedIn: (->
    if @get('controllers.auth').get('user')
      return true

    return false
  ).property('controllers.auth.user')

  login: ->
    self = this
    data = @getProperties("username", "password")

    # Clear out any error messages.
    @set "errorMessage", null

    console.log "performing login action" + data.username + ":" + data.password
    loginController = @

    loginController.get('controllers.auth').handleLogin data.username,
      data.password,
      ((user) ->
        loginController.transitionToRoute 'index'
        return
      ),
      ((user, error) ->
        loginController.set "errorMessage", "Login Failed:" + error.message
        return
      )

    return #end login

  logout: ->
    @get('controllers.auth').handleLogout()


)