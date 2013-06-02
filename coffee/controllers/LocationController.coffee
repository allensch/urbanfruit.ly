App.Controllers.LocationController = Ember.ObjectController.extend(

  current: null
  geocoder: null
  location: null
  latitude: null
  longitude: null
  displayName: null

  farmersMarketService: null

  init: ->
    @_super()
    if Modernizr.geolocation
      @farmersMarketService = App.Services.FarmersMarkerService.create()
      @farmersMarketService.fetch()
      navigator.geolocation.getCurrentPosition @onGeoLocation.bind @
    App.on App.Events.MAP_READY, @onMapReady.bind @
    Ember.run.later @, @onFiveSeconds, 5000
    return

  onFiveSeconds: ->
    location = store.get App.Store.LAST_LOCATION
    if location and @location is null
      @onGeoLocation location
    return

  onMapReady: ->
    @geocoder = new google.maps.Geocoder();
    if @location
      @reverseLocation()
    return

  onGeoLocation: (data) ->
    @set 'location', data
    store.set App.Store.LAST_LOCATION, data
    if @geocoder
      @reverseLocation()
    return

  reverseLocation: ->
    location = App.Utils.LocationUtil.getLatLngFromObject @location
    point = new google.maps.LatLng location.latitude, location.longitude
    App.trigger App.Events.MAP_MY_LOCATION, point
    @geocoder.geocode latLng: point, @onReverseLocationResult.bind @
    return

  onReverseLocationResult: (data, status) ->
    if status is google.maps.GeocoderStatus.OK and data.length
      @set 'displayName', App.Utils.LocationUtil.readCityAndStateFromResult(data)
    else
      console.error "LocationController:onReverseLocationResult geocoder failed: #{status}"
    return

)

App.locationController = App.Controllers.LocationController.create()