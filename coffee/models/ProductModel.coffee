App.Models.ProductModel = Ember.Object.extend(

  image: null
  location: null
  quantity: 0
  status: null
  type: null

  init: ->
    @_super()
    return

  getImageUrl: ->
    return @image.url()
)