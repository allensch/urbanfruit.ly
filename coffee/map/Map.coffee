class window.Map

  @getInstance: ->
    @__instance = new Map if @__instance is undefined
    @__instance

  terms: {}
  points: []
  markers: []
  timeout: 0
  google: null
  view: null
  center: null

  constructor: (location, zoom) ->
    div = document.getElementById('map')
    options =
      zoom: zoom || 2
      center: if location then new google.maps.LatLng(location.latitude, location.longitude) else new google.maps.LatLng(0, 0)
      mapTypeId: google.maps.MapTypeId.ROADMAP
    @map = new google.maps.Map div, options
    @info = new google.maps.InfoWindow
    @google = google
    @w = window
    @addListeners()

  addListeners: ->
    google.maps.event.addListener @map, 'zoom_changed', (->
      @view.zoomChanged @map.getZoom()
      return
    ).bind @
    return

  setUserLocationPoint: (point) ->
    @center = new MyLocationMarker point, @map, '#CCC'
    return

  addLocation: (name, color, point, imageUrl) ->
    marker = new CustomMarker point, @map, color
    google.maps.event.addListener marker, 'click', (->
      @showInfo marker, name, imageUrl
      return).bind @

    @points.push point
    @markers.push marker

    clearTimeout @timeout
    @timeout = setTimeout ((->@finalize()).bind @), 100
    return marker

  clearTerm: (term) ->
    if @terms[term] and @terms[term].length
      for marker in @terms[term]
        marker.setMap null
        index = @markers.indexOf marker
        if index isnt -1
          @markers.splice index, 1
    return

  clear: ->
    for marker in @markers
      marker.setMap null
    @points.splice 0, 1 while @points.length > 1
    @markers.splice 0, 1 while @markers.length > 1
    @info.close() if @info
    return

  showInfo: (marker, content, imageUrl) ->
    @info.setContent "<img width='50' src='#{imageUrl}'><p>#{content}</p>"
    @info.open @map, marker
    return

  finalize: ->
    b = new google.maps.LatLngBounds()
    if @points.length > 1
      for point in @points
        b.extend point
      @map.fitBounds b
      @map.panToBounds b
      @map.setCenter b.getCenter()
    else if @points.length is 1
      @map.setZoom 7
      @map.setCenter @points[0]
    return

  setCenter: (lat, lng, zoom = 16) ->
    @map.setCenter new google.maps.LatLng lat, lng
    @map.setZoom zoom
    return
