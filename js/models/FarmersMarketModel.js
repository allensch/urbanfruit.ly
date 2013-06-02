(function() {
  App.Models.FarmersMarketModel = Ember.Object.extend({
    name: null,
    address: null,
    zip: null,
    location: null,
    init: function() {
      this._super();
    }
  });

}).call(this);
