(function() {
  window.App = Ember.Application.createWithMixins(Ember.Evented, {
    LOG_TRANSITIONS: true,
    resizeCallbacks: [],
    resizeTimeout: 0,
    guid: function() {
      return Math.random().toString(36).substr(2, 16);
    },
    init: function() {
      this._super();
      Parse.initialize(window._APP_SECRETS.PARSE_API_JAVASCRIPT_KEY, window._APP_SECRETS.PARSE_API_JAVASCRIPT_KEY);
    },
    ready: function() {
      console.log('ready');
      this.addResizeCallback(this.resizeMainView, null);
      $(window, document).resize(this.onResize.bind(this));
      this.onResize();
    },
    addResizeCallback: function(callback, scope) {
      this.resizeCallbacks.push($.proxy(callback, scope));
    },
    onResize: function() {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout((function() {
        var cb, _i, _len, _ref;

        _ref = this.resizeCallbacks;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          cb = _ref[_i];
          cb();
        }
      }).bind(this), 300);
    },
    resizeMainView: function() {
      var th, wh;

      wh = $(window).height();
      th = $('#topNavBar').height() + $('#searchView').height();
      $('.MainView').height(wh - th);
    }
  });

  App.map = null;

  App.google = null;

  App.searchController = null;

  App.locationController = null;

  App.Views = Ember.Namespace.create();

  App.Utils = Ember.Namespace.create();

  App.Store = Ember.Namespace.create();

  App.Models = Ember.Namespace.create();

  App.Events = Ember.Namespace.create();

  App.Services = Ember.Namespace.create();

  App.Templates = Ember.Namespace.create();

  App.Controllers = Ember.Namespace.create();

}).call(this);
