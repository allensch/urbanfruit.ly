App.LoginRoute = Ember.Route.extend(setupController: (controller, context) ->
    console.log "Setting up login route."
    controller.reset()
    return
)