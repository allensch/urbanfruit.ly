App.Services.FarmersMarkerService = Ember.Object.extend(

  searchByZipCode: (postCode) ->
    $.ajax(
      type: 'GET'
      contentType: "application/json; charset=utf-8"
      url: "http://search.ams.usda.gov/v1/data.svc/zipSearch?zip=" + postCode
      success: (data) ->
        console.log data
        return
    )
    return
)
