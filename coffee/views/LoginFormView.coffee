App.Views.LoginFormView = Ember.View.extend(

	forgotPassword: false
	template: App.Templates.get 'login-form'

	focusInputEmail: ->
		Ember.run.later @, (->
			@$('#inputEmail').focus() if not $('#inputEmail', @$()).val()
			return), 500
		return

	didInsertElement: ->
		$('#loginDropDownItem').click (->
			@focusInputEmail()
			return true).bind @
		$('form', @$()).submit ->
			@submitLogin()
			return false
		return

	clickSignIn: ->
		@submitLogin()
		return

	clickCreateAccount: ->
		console.log 'clickCreateAccount'
		return

	clickForgotPassword: () ->
		@set 'forgotPassword', true
		@focusInputEmail()
		return false

	clickCancelForgotPassword: ->
		@set 'forgotPassword', false
		return false

	click: (e) ->
		e.stopImmediatePropagation()
		return

	submitLogin: ->
		username = $('#inputEmail', @$()).val()
		password = $('#inputPassword', @$()).val()
		@get('controller').get('controllers.auth').handleLogin username, password, @onLoginSucess.bind(@), @onLoginError.bind(@)
		return

	onLoginSucess: (data) ->
		console.log 'login sucess', data
		return

	onLoginError: (data) ->
		console.log 'login sucess', data
		return
)