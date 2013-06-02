App.Utils.LocationUtil =

  readCityAndStateFromResult: (data) ->
    displayName = []
    for component in data[0].address_components
      if component.types and component.types.length
        switch true
          when 'locality' in component.types
            displayName.push component.long_name
          when 'administrative_area_level_1' in component.types or 'administrative_area_level_2' in component.types
            displayName.push component.short_name
    return displayName.join ', ' if displayName.length
    return null

  getLatLngFromObject: (location) ->
    value = null
    if location
      if location.coords
        value =
          latitude: location.coords.latitude
          longitude: location.coords.longitude
      if location.latitude and location.longitude
        value =
          latitude: location.latitude
          longitude: location.longitude
    return value

  readPostalCodeFromResult: (data) ->
    for component in data[0].address_components
      if component.types and component.types.length
        switch true
          when 'postal_code' in component.types
            return component.short_name;
    return null