(function() {
  App.Services.ProductListingService = Ember.ArrayController.extend({
    klass: null,
    content: [],
    init: function() {
      this._super();
      this.klass = Parse.Object.extend('Product');
    },
    fetch: function(callback) {
      var ProductsCollection, collection;

      ProductsCollection = Parse.Collection.extend({
        model: this.klass
      });
      collection = new ProductsCollection();
      collection.fetch({
        success: function(data) {
          if (data.models && data.models.length) {
            callback(data.models);
          }
        }
      });
    }
  });

}).call(this);
