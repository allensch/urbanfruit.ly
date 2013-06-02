(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  App.Utils.LocationUtil = {
    readCityAndStateFromResult: function(data) {
      var component, displayName, _i, _len, _ref;

      displayName = [];
      _ref = data[0].address_components;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        component = _ref[_i];
        if (component.types && component.types.length) {
          switch (true) {
            case __indexOf.call(component.types, 'locality') >= 0:
              displayName.push(component.long_name);
              break;
            case __indexOf.call(component.types, 'administrative_area_level_1') >= 0 || __indexOf.call(component.types, 'administrative_area_level_2') >= 0:
              displayName.push(component.short_name);
          }
        }
      }
      if (displayName.length) {
        return displayName.join(', ');
      }
      return null;
    },
    getLatLngFromObject: function(location) {
      var value;

      value = null;
      if (location) {
        if (location.coords) {
          value = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          };
        }
        if (location.latitude && location.longitude) {
          value = {
            latitude: location.latitude,
            longitude: location.longitude
          };
        }
      }
      return value;
    }
  };

}).call(this);
