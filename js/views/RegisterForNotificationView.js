(function() {
  App.Views.RegisterForNotificationView = Ember.View.extend({
    modal: null,
    service: null,
    btnSubmit: null,
    processing: false,
    template: App.Templates.get('register-for-notification'),
    init: function() {
      this._super();
      this.service = App.Services.NotifyRegisterService.create();
      App.on(App.Events.SHOW_NOTIFY_ME_WINDOW, this.onShowWindow.bind(this));
    },
    onShowWindow: function() {
      this.modal.modal('show');
      if (!this.processing) {
        this.focusEmail();
      }
    },
    focusEmail: function() {
      Ember.run.later(this, (function() {
        this.$('#inputEmail', this.$()).focus();
      }), 1000);
    },
    didInsertElement: function() {
      this.modal = this.$('.modal', this.$());
      this.modal.modal('show');
      this.btnSubmit = this.$('#btnSubmit', this.$()).click(this.onClickSubmit.bind(this));
      this.$('#btnClose').click(this.onClickClose.bind(this));
      this.$('form', this.$()).submit(this.onSubmit.bind(this));
      this.focusEmail();
    },
    onClickSubmit: function() {
      if (this.processing) {
        return;
      }
      if (this.isValid()) {
        this.$('#controlGroupEmail').removeClass('error');
        this.btnSubmit.attr('disabled', 'disabled');
        this.doSubmit();
      } else {
        this.$('#controlGroupEmail', this.$()).addClass('error');
        this.$('#inputEmail', this.$()).focus();
      }
    },
    onClickClose: function() {
      if (!this.processing) {
        this.modal.modal('hide');
      }
    },
    onSubmit: function() {
      return false;
    },
    isValid: function() {
      return App.Utils.ProfileUtil.isValidEmail(this.$('#inputEmail').val());
    },
    doSubmit: function() {
      this.processing = true;
      this.service.submit({
        name: this.$('#inputName').val(),
        email: this.$('#inputEmail').val(),
        comments: this.$('#inputComments').val()
      }, this.onSubmit.bind(this));
    },
    onSubmit: function() {
      this.modal.modal('hide');
    }
  });

}).call(this);
