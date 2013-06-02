(function() {
  App.Views.SearchForView = Ember.View.extend({
    inputId: '#searchFor',
    controller: App.searchController,
    template: App.Templates.get('search-for-view'),
    didInsertElement: function() {
      $(this.inputId, this.$()).focus();
      $(this.inputId, this.$()).keypress(this.onKeyPress.bind(this));
    },
    onKeyPress: function(e) {
      if (e.hasOwnProperty('keyCode')) {
        this._handleKeyPress(e.keyCode);
      }
    },
    _handleKeyPress: function(code) {
      if (code === 13) {
        this.doSearch();
      }
    },
    doSearch: function() {
      var input, value;

      input = $(this.inputId);
      value = input.val();
      if (value && value.length > 1) {
        input.val('');
        input.focus();
      }
    }
  });

}).call(this);
