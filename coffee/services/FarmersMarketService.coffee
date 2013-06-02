App.Services.FarmersMarkerService = Ember.ArrayController.extend(

  klass: null
  content :[]

  init: ->
    @klass = Parse.Object.extend 'FarmersMarkets'
    return

#  searchByZipCode: (postCode) ->
#    $.ajax(
#      type: 'GET'
#      dataType: "jsonp"
#      url: 'http://search.ams.usda.gov/farmersmarkets/default.aspx?jqGridID=_ctl0_CenterContent_JQGrid1&_search=false&nd=1370203547319&rows=300&page=1&sidx=&sord=asc&Location='
#      success: (data) ->
#        console.log JSON.decode(data)
#        return
#    )
#    return

  fetch: () ->
    FarmersMarketCollection = Parse.Collection.extend(
      model: @klass
    )
    collection = new FarmersMarketCollection()
    collection.fetch(
      success: ((data) ->
        if data.models and data.models.length
          for market in data.models
            @pushObject App.Models.FarmersMarketModel.create(
              name: market.Name
              address: market.Address
              zip: market.zip
            )
        return
      ).bind @
    )
    return
)
