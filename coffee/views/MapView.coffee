App.Views.MapView = Ember.View.extend(

  map:null
  iframe: null
  controller: null
  userLocationPoint: null
  template: App.Templates.get 'map-view'
  url: "map.html?#{new Date().getTime()}"

  productsLoaded: false

  init: ->
    @_super()
    App.on App.Events.MAP_MY_LOCATION, @onSetUserLocation.bind @
    App.on App.Events.PRODUCTS_LOADED, @onProductsLoaded.bind @
    App.on App.Events.PRODUCTS_FILTERED, @onProductsFiltered.bind @
    return

  didInsertElement: ->
    @iframe = $ '<iframe src="' + @url + '" class="FillHeight" frameborder="0">'
    @iframe.load @.onIframeLoad.bind @
    @iframe.appendTo @$ '.MapView'

    @onProductsLoaded() if @productsLoaded is false
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
#    w.TweenMax = window.TweenMax
    @map = App.map = w.Map.getInstance()
    @map.view = @
    window.google = @map.google
    App.trigger App.Events.MAP_READY
    @onSetUserLocation @userLocationPoint if @userLocationPoint
    @onProductsLoaded() if @productsLoaded is false
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

  onProductsLoaded: ->
    console.log 'onProductsLoaded called'
    if App.searchController.get('length') and @map
      @productsLoaded = true
      for product in App.searchController.content
        @map.addLocation product.name, '#FF0000', new google.maps.LatLng(product.location.latitude, product.location.longitude), product.getImageUrl()
    else
      console.log 'no products'
    return

  onProductsFiltered: (results) ->
    if @map and results.length
      @map.clear()
      for product in results
        @map.addLocation product.name, '#FF0000', new google.maps.LatLng(product.location.latitude, product.location.longitude), product.getImageUrl()
    return


)