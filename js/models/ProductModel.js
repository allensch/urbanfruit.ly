(function() {
  App.Models.ProductModel = Ember.Object.extend({
    image: null,
    location: null,
    quantity: 0,
    status: null,
    type: null,
    name: null,
    init: function() {
      this._super();
    },
    getImageUrl: function() {
      return this.image.url();
    },
    isMatch: function(query) {
      if (this.get('name') && query) {
        return this.get('name').toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1;
      }
      return false;
    }
  });

}).call(this);
