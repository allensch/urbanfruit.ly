(function() {
  App.Controllers.SearchController = Ember.ArrayController.extend({
    content: [],
    result: null,
    productSearchService: null,
    init: function() {
      this._super();
      this.productSearchService = App.Services.ProductListingService.create();
      this.productSearchService.fetch(this.onProductListingResult.bind(this));
    },
    onProductListingResult: function(data) {
      var product, _i, _len;

      for (_i = 0, _len = data.length; _i < _len; _i++) {
        product = data[_i];
        this.pushObject(App.Models.ProductModel.create(product.attributes));
      }
      if (this.get('length')) {
        App.trigger(App.Events.PRODUCTS_LOADED);
        console.log('products loaded in search controller');
      }
    },
    autoCompleteSearchAssist: function(query, process) {
      var product, result, _i, _len, _ref;

      result = [];
      this.result = [];
      _ref = this.content;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        product = _ref[_i];
        if (product.isMatch(query)) {
          result.push(product.name);
          this.result.push(product);
        }
      }
      process(result);
    },
    doSearch: function() {
      App.trigger(App.Events.PRODUCTS_FILTERED, this.result);
    }
  });

  App.searchController = App.Controllers.SearchController.create();

}).call(this);
