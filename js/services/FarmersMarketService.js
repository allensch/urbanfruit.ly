(function() {
  App.Services.FarmersMarkerService = Ember.ArrayController.extend({
    klass: null,
    content: [],
    init: function() {
      this.klass = Parse.Object.extend('FarmersMarkets');
    },
    fetch: function() {
      var FarmersMarketCollection, collection;

      FarmersMarketCollection = Parse.Collection.extend({
        model: this.klass
      });
      collection = new FarmersMarketCollection();
      collection.fetch({
        success: (function(data) {
          var market, _i, _len, _ref;

          if (data.models && data.models.length) {
            _ref = data.models;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              market = _ref[_i];
              this.pushObject(App.Models.FarmersMarketModel.create({
                name: market.Name,
                address: market.Address,
                zip: market.zip
              }));
            }
          }
        }).bind(this)
      });
    }
  });

}).call(this);
