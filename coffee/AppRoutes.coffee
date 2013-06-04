# Map Main Routes in the application.
App.Router.map ->
  @resource "index",
    path: "/"

  @route "register",
    path: "/register"

  @route "login",
    path: "/login"

