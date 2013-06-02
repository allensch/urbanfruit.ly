App.Controllers.SearchController = Ember.ArrayController.extend(

  content: []

  init: ->
    @_super()
    return
)

App.searchController = App.Controllers.SearchController.create()