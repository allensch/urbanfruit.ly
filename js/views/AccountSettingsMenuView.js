(function() {
  App.Views.AccountSettingsMenuView = Ember.View.extend({
    tagName: 'ul',
    classNames: ['dropdown-menu'],
    template: App.Templates.get('account-settings-menu-view'),
    didInsertElement: function() {}
  });

}).call(this);
