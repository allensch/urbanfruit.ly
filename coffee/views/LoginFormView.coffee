App.Views.LoginFormView = Ember.View.extend(

	forgotPassword: false
	template: App.Templates.get 'login-form'

	didInsertElement: ->
		console.log 'LoginFormView'
		@$('form', @$()).submit (e) ->
			console.log 'SUBMIT'
			return false
		return

	clickCreateAccount: ->
		console.log 'clickCreateAccount'
		return

	clickForgotPassword: () ->
		@set 'forgotPassword', true
		return false

	clickCancelForgotPassword: ->
		@set 'forgotPassword', false
		return false

	click: (e) ->
		console.log e
		e.stopImmediatePropagation()
		return
)