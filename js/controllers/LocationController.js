(function() {
  App.Controllers.LocationController = Ember.ObjectController.extend({
    current: null,
    geocoder: null,
    location: null,
    latitude: null,
    longitude: null,
    displayName: null,
    farmersMarketService: null,
    init: function() {
      this._super();
      if (Modernizr.geolocation) {
        this.farmersMarketService = App.Services.FarmersMarkerService.create();
        this.farmersMarketService.fetch();
        navigator.geolocation.getCurrentPosition(this.onGeoLocation.bind(this));
      }
      App.on(App.Events.MAP_READY, this.onMapReady.bind(this));
      Ember.run.later(this, this.onFiveSeconds, 5000);
    },
    onFiveSeconds: function() {
      var location;

      location = store.get(App.Store.LAST_LOCATION);
      if (location && this.location === null) {
        this.onGeoLocation(location);
      }
    },
    onMapReady: function() {
      this.geocoder = new google.maps.Geocoder();
      if (this.location) {
        this.reverseLocation();
      }
    },
    onGeoLocation: function(data) {
      this.set('location', data);
      store.set(App.Store.LAST_LOCATION, data);
      if (this.geocoder) {
        this.reverseLocation();
      }
    },
    reverseLocation: function() {
      var location, point;

      location = App.Utils.LocationUtil.getLatLngFromObject(this.location);
      point = new google.maps.LatLng(location.latitude, location.longitude);
      App.trigger(App.Events.MAP_MY_LOCATION, point);
      this.geocoder.geocode({
        latLng: point
      }, this.onReverseLocationResult.bind(this));
    },
    onReverseLocationResult: function(data, status) {
      if (status === google.maps.GeocoderStatus.OK && data.length) {
        this.set('displayName', App.Utils.LocationUtil.readCityAndStateFromResult(data));
      } else {
        console.error("LocationController:onReverseLocationResult geocoder failed: " + status);
      }
    }
  });

  App.locationController = App.Controllers.LocationController.create();

}).call(this);
