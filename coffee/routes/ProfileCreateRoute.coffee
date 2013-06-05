App.ProfileCreateRoute = Ember.Route.extend(
  redirect: ->
    console.log "calling redirect"
    if !this.controllerFor('auth').get('user')
      @transitionTo 'login'

    return
)