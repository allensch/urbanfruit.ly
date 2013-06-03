App.Models.ProductModel = Ember.Object.extend(

  image: null
  location: null
  quantity: 0
  status: null
  type: null
  name: null

  init: ->
    @_super()
    return

  getImageUrl: ->
    return @image.url()

  isMatch: (query) ->
    if @get('name') and query
      return @get('name').toLowerCase().indexOf(query.toLocaleLowerCase()) isnt -1
    return false
)