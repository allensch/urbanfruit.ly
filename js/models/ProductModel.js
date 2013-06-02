(function() {
  App.Models.ProductModel = Ember.Object.extend({
    image: null,
    location: null,
    quantity: 0,
    status: null,
    type: null,
    init: function() {
      this._super();
    },
    getImageUrl: function() {
      return this.image.url();
    }
  });

}).call(this);
