App.Views.RegisterForNotificationView = Ember.View.extend(

  modal: null
  service: null
  btnSubmit: null
  processing: false
  template: App.Templates.get 'register-for-notification'

  init: ->
    @_super()
    @service = App.Services.NotifyRegisterService.create()
    App.on App.Events.SHOW_NOTIFY_ME_WINDOW, @onShowWindow.bind @
    return

  onShowWindow: ->
    @modal.modal 'show'
    @focusEmail() if not @processing
    return

  focusEmail: ->
    Ember.run.later @, (->
      @$('#inputEmail', @$()).focus()
      return), 1000
    return
  
  didInsertElement: ->
    @modal = @$('.modal', @$())
    @modal.modal 'show'

    @btnSubmit = @$('#btnSubmit', @$()).click @onClickSubmit.bind @
    @$('#btnClose').click @onClickClose.bind @
    @$('form', @$()).submit @onSubmit.bind @
    @focusEmail()
    return

  onClickSubmit: ->
    return if @processing
    if @isValid()
      @$('#controlGroupEmail').removeClass 'error'
      @btnSubmit.attr 'disabled', 'disabled'
      @doSubmit()
    else
      @$('#controlGroupEmail', @$()).addClass 'error'
      @$('#inputEmail', @$()).focus()
    return

  onClickClose: ->
    if not @processing
      @modal.modal 'hide'
    return

  onSubmit: () ->
    return false

  isValid: ->
     return App.Utils.ProfileUtil.isValidEmail @$('#inputEmail').val()

  doSubmit: ->
    @processing = true
    @service.submit(
      name: @$('#inputName').val()
      email: @$('#inputEmail').val()
      comments: @$('#inputComments').val(),
      @onSubmit.bind @
    )
    return

  onSubmit: ->
    @modal.modal 'hide'
    return

)