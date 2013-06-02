window.App = Ember.Application.createWithMixins(Ember.Evented,

  LOG_TRANSITIONS: true
  resizeCallbacks: []
  resizeTimeout: 0

  guid: -> Math.random().toString(36).substr(2,16)

  init: ->
    @_super()
    Parse.initialize("RMZOaEykJSfBsSrUO8Uwqi5Wqj3PUzDG0IK9l5Fl", "IK0S8FDsZJJXRPK3gv4vKQPW0qCiOuBomAaTnxTQ")
    return

  ready: ->
    console.log 'ready'
    @addResizeCallback @resizeMainView, null
    $(window, document).resize @onResize.bind @
    @onResize()
    return

  addResizeCallback: (callback, scope) ->
    @resizeCallbacks.push $.proxy callback, scope
    return

  onResize: ->
    clearTimeout(@resizeTimeout)
    @resizeTimeout = setTimeout ((->
      for cb in @resizeCallbacks
        cb()
      return
    ).bind @), 300
    return

  resizeMainView: ->
    wh = $(window).height()
    th = $('#topNavBar').height() + $('#searchView').height()
    $('.MainView').height(wh - th)
    return
)

App.map = null
App.google = null
App.searchController = null
App.locationController = null

App.Views = Ember.Namespace.create()
App.Utils = Ember.Namespace.create()
App.Store = Ember.Namespace.create()
App.Models = Ember.Namespace.create()
App.Events = Ember.Namespace.create()
App.Services = Ember.Namespace.create()
App.Templates = Ember.Namespace.create()
App.Controllers = Ember.Namespace.create()