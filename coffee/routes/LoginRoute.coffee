App.PostRoute = App.Route.extend(renderTemplate: ->
    @render "login", # the template to render
      into: "application" # the template to render into
)