App.NavbarController = Ember.ObjectController.extend(
  needs:'auth'

  # Bind the isLoggedIn property to the auth object.
  isLoggedIn: (->
    if @get('controllers.auth').get('user')
      return true

    return false
  ).property('controllers.auth.user')

  # Handle logout.
  logout: ->
    @get('controllers.auth').handleLogout()
    return

)