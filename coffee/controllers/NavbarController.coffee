App.NavbarController = Ember.ObjectController.extend(
  needs:'auth'
  isLoggedIn: (->
    if @get('controllers.auth').get('user')
      return true

    return false
  ).property('controllers.auth.user')
  logout: ->
    @get('controllers.auth').handleLogout()
    return

)