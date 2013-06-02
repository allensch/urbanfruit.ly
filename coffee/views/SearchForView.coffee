App.Views.SearchForView = Ember.View.extend(

  inputId: '#searchFor'
  controller: App.searchController
  template: App.Templates.get 'search-for-view'

  didInsertElement: ->
    $(@inputId, @$()).focus()
    $(@inputId, @$()).keypress @onKeyPress.bind @
    return

  onKeyPress: (e) ->
    @_handleKeyPress e.keyCode if e.hasOwnProperty 'keyCode'
    return

  _handleKeyPress: (code) ->
    @doSearch() if code is 13
    return

  doSearch: ->
    input = $(@inputId)
    value = input.val()
    if value and value.length > 1
      input.val ''
      input.focus()
    return

)