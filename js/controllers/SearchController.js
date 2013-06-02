(function() {
  App.Controllers.SearchController = Ember.ArrayController.extend({
    content: [],
    init: function() {
      this._super();
    }
  });

  App.searchController = App.Controllers.SearchController.create();

}).call(this);
