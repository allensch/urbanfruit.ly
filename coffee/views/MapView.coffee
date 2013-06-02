App.Views.MapView = Ember.View.extend(

  map:null
  iframe: null
  controller: null
  userLocationPoint: null
  template: App.Templates.get 'map-view'
  url: "map.html?#{new Date().getTime()}"

  init: ->
    @_super()
    App.on App.Events.MAP_MY_LOCATION, @onSetUserLocation.bind @
    return

  didInsertElement: ->
    @iframe = $ '<iframe src="' + @url + '" class="FillHeight" frameborder="0">'
    @iframe.load @.onIframeLoad.bind @
    @iframe.appendTo @$ '.MapView'
    return

  onAdd: (searchTerm) ->
    while result = searchTerm.nextItem()
      @map.addLocation result.displayName, searchTerm.color, result.getLatLng(), searchTerm.value
    return

  onRemove: (searchTerm) ->
    @map.clearTerm searchTerm.value if @map
    return

  onIframeLoad: ->
    w = @iframe[0].contentWindow
    w.TweenMax = window.TweenMax
    @map = App.map = w.Map.getInstance()
    @map.view = @
    window.google = @map.google
    App.trigger App.Events.MAP_READY
    @onSetUserLocation @userLocationPoint if @userLocationPoint
    return

  onSetUserLocation: (point) ->
    if @map
      @map.setUserLocationPoint point
    else
      @userLocationPoint = point
    return

  onUpdateLocation: (->
    location = App.Utils.LocationUtil.getLatLngFromObject App.locationController.location
    if location and @map
      @map.setCenter location.latitude, location.longitude, store.get App.Store.MAP_ZOOM
    return
  ).observes 'App.locationController.location'

  zoomChanged: (value) ->
    store.set App.Store.MAP_ZOOM, value
    return

  registerMarker: (marker) ->


)