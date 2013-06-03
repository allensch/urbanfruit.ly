App.Controllers.SearchController = Ember.ArrayController.extend(

  content: []
  result: null
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

  autoCompleteSearchAssist: (query, process) ->
    result = []
    @result = []
    for product in @content
      if product.isMatch(query)
        result.push product.name
        @result.push product
    process result
    return

  doSearch: () ->
    App.trigger App.Events.PRODUCTS_FILTERED, @result
    return
)

App.searchController = App.Controllers.SearchController.create()