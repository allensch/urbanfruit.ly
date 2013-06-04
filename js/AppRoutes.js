(function() {
  App.Router.map(function() {
    this.resource("index", {
      path: "/"
    });
    this.route("register", {
      path: "/register"
    });
    return this.route("login", {
      path: "/login"
    });
  });

}).call(this);
