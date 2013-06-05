App.LoginRoute = Ember.Route.extend(setupController: (controller, context) ->
    # Reset any error messages and previous data.
    controller.reset()
    return
)