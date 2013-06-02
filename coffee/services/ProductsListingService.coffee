App.Services.ProductListingService = Ember.ArrayController.extend(

  klass: null
  content: []

  init: ->
    @_super()
    @klass = Parse.Object.extend 'Product'
    return

  fetch: (callback) ->
    ProductsCollection = Parse.Collection.extend(
      model: @klass
    )
    collection = new ProductsCollection()
    collection.fetch(
      success: (data) ->
        if data.models and data.models.length
          callback data.models
        return
    )
    return


)