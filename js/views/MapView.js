(function() {
  App.Views.MapView = Ember.View.extend({
    map: null,
    iframe: null,
    controller: null,
    userLocationPoint: null,
    template: App.Templates.get('map-view'),
    url: "map.html?" + (new Date().getTime()),
    init: function() {
      this._super();
      App.on(App.Events.MAP_MY_LOCATION, this.onSetUserLocation.bind(this));
    },
    didInsertElement: function() {
      this.iframe = $('<iframe src="' + this.url + '" class="FillHeight" frameborder="0">');
      this.iframe.load(this.onIframeLoad.bind(this));
      this.iframe.appendTo(this.$('.MapView'));
    },
    onAdd: function(searchTerm) {
      var result;

      while (result = searchTerm.nextItem()) {
        this.map.addLocation(result.displayName, searchTerm.color, result.getLatLng(), searchTerm.value);
      }
    },
    onRemove: function(searchTerm) {
      if (this.map) {
        this.map.clearTerm(searchTerm.value);
      }
    },
    onIframeLoad: function() {
      var w;

      w = this.iframe[0].contentWindow;
      w.TweenMax = window.TweenMax;
      this.map = App.map = w.Map.getInstance();
      this.map.view = this;
      window.google = this.map.google;
      App.trigger(App.Events.MAP_READY);
      if (this.userLocationPoint) {
        this.onSetUserLocation(this.userLocationPoint);
      }
    },
    onSetUserLocation: function(point) {
      if (this.map) {
        this.map.setUserLocationPoint(point);
      } else {
        this.userLocationPoint = point;
      }
    },
    onUpdateLocation: (function() {
      var location;

      location = App.Utils.LocationUtil.getLatLngFromObject(App.locationController.location);
      if (location && this.map) {
        this.map.setCenter(location.latitude, location.longitude, store.get(App.Store.MAP_ZOOM));
      }
    }).observes('App.locationController.location'),
    zoomChanged: function(value) {
      store.set(App.Store.MAP_ZOOM, value);
    },
    registerMarker: function(marker) {}
  });

}).call(this);
