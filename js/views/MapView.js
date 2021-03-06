(function() {
  App.Views.MapView = Ember.View.extend({
    map: null,
    iframe: null,
    controller: null,
    userLocationPoint: null,
    template: App.Templates.get('map-view'),
    url: "map.html?" + (new Date().getTime()),
    productsLoaded: false,
    init: function() {
      this._super();
      App.on(App.Events.MAP_MY_LOCATION, this.onSetUserLocation.bind(this));
      App.on(App.Events.PRODUCTS_LOADED, this.onProductsLoaded.bind(this));
      App.on(App.Events.PRODUCTS_FILTERED, this.onProductsFiltered.bind(this));
    },
    didInsertElement: function() {
      this.iframe = $('<iframe src="' + this.url + '" class="FillHeight" frameborder="0">');
      this.iframe.load(this.onIframeLoad.bind(this));
      this.iframe.appendTo(this.$('.MapView'));
      if (this.productsLoaded === false) {
        this.onProductsLoaded();
      }
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
      this.map = App.map = w.Map.getInstance();
      this.map.view = this;
      window.google = this.map.google;
      App.trigger(App.Events.MAP_READY);
      if (this.userLocationPoint) {
        this.onSetUserLocation(this.userLocationPoint);
      }
      if (this.productsLoaded === false) {
        this.onProductsLoaded();
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
    onProductsLoaded: function() {
      var product, _i, _len, _ref;

      console.log('onProductsLoaded called');
      if (App.searchController.get('length') && this.map) {
        this.productsLoaded = true;
        _ref = App.searchController.content;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          product = _ref[_i];
          this.map.addLocation(product.name, '#FF0000', new google.maps.LatLng(product.location.latitude, product.location.longitude), product.getImageUrl());
        }
      } else {
        console.log('no products');
      }
    },
    onProductsFiltered: function(results) {
      var product, _i, _len;

      if (this.map && results.length) {
        this.map.clear();
        for (_i = 0, _len = results.length; _i < _len; _i++) {
          product = results[_i];
          this.map.addLocation(product.name, '#FF0000', new google.maps.LatLng(product.location.latitude, product.location.longitude), product.getImageUrl());
        }
      }
    }
  });

}).call(this);
