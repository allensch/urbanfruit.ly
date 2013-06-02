(function() {
  window.Map = (function() {
    Map.getInstance = function() {
      if (this.__instance === void 0) {
        this.__instance = new Map;
      }
      return this.__instance;
    };

    Map.prototype.terms = {};

    Map.prototype.points = [];

    Map.prototype.markers = [];

    Map.prototype.timeout = 0;

    Map.prototype.google = null;

    Map.prototype.view = null;

    Map.prototype.center = null;

    function Map(location, zoom) {
      var div, options;

      div = document.getElementById('map');
      options = {
        zoom: zoom || 2,
        center: location ? new google.maps.LatLng(location.latitude, location.longitude) : new google.maps.LatLng(0, 0),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(div, options);
      this.info = new google.maps.InfoWindow;
      this.google = google;
      this.w = window;
      this.addListeners();
    }

    Map.prototype.addListeners = function() {
      google.maps.event.addListener(this.map, 'zoom_changed', (function() {
        this.view.zoomChanged(this.map.getZoom());
      }).bind(this));
    };

    Map.prototype.setUserLocationPoint = function(point) {
      this.center = new MyLocationMarker(point, this.map, '#CCC');
    };

    Map.prototype.addLocation = function(name, color, point, imageUrl) {
      var marker;

      marker = new CustomMarker(point, this.map, color);
      google.maps.event.addListener(marker, 'click', (function() {
        this.showInfo(marker, name, imageUrl);
      }).bind(this));
      this.points.push(point);
      this.markers.push(marker);
      clearTimeout(this.timeout);
      this.timeout = setTimeout((function() {
        return this.finalize();
      }).bind(this), 100);
      return marker;
    };

    Map.prototype.clearTerm = function(term) {
      var index, marker, _i, _len, _ref;

      if (this.terms[term] && this.terms[term].length) {
        _ref = this.terms[term];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          marker = _ref[_i];
          marker.setMap(null);
          index = this.markers.indexOf(marker);
          if (index !== -1) {
            this.markers.splice(index, 1);
          }
        }
      }
    };

    Map.prototype.clear = function() {
      var marker, _i, _len, _ref;

      _ref = this.markers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        marker = _ref[_i];
        marker.setMap(null);
      }
      while (this.points.length > 1) {
        this.points.splice(0, 1);
      }
      while (this.markers.length > 1) {
        this.markers.splice(0, 1);
      }
      if (this.info) {
        this.info.close();
      }
    };

    Map.prototype.showInfo = function(marker, content, imageUrl) {
      this.info.setContent("<div id=\"google-info-window\" style=\"width:900px;height:900px;\">" + ("<img src='" + imageUrl + "' style=\"width:140px;\">") + ("<p>" + content + "</p>") + "</div>");
      this.info.set;
      this.info.open(this.map, marker);
    };

    Map.prototype.finalize = function() {
      var b, point, _i, _len, _ref;

      b = new google.maps.LatLngBounds();
      if (this.points.length > 1) {
        _ref = this.points;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          point = _ref[_i];
          b.extend(point);
        }
        this.map.fitBounds(b);
        this.map.panToBounds(b);
        this.map.setCenter(b.getCenter());
      } else if (this.points.length === 1) {
        this.map.setZoom(7);
        this.map.setCenter(this.points[0]);
      }
    };

    Map.prototype.setCenter = function(lat, lng, zoom) {
      if (zoom == null) {
        zoom = 16;
      }
      this.map.setCenter(new google.maps.LatLng(lat, lng));
      this.map.setZoom(zoom);
    };

    return Map;

  })();

}).call(this);
