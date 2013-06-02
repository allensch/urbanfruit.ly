App.Controllers.SearchController = Ember.ArrayController.extend(

  content: []
  productSearchService: null

  init: ->
    @_super()
    @productSearchService = App.Services.ProductListingService.create()
    @productSearchService.fetch(@onProductListingResult.bind @)
    return

  onProductListingResult: (data) ->
    for product in data
      @pushObject App.Models.ProductModel.create(product.attributes)
    if @get 'length'
      App.trigger App.Events.PRODUCTS_LOADED
      console.log 'products loaded in search controller'
    return
)

App.searchController = App.Controllers.SearchController.create()