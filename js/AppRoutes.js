(function() {
  App.Router.map(function() {
    this.resource("index", {
      path: "/"
    });
    this.route("register", {
      path: "/register"
    });
    this.route("login", {
      path: "/login"
    });
    this.route("profile", {
      path: "/profile"
    });
    return this.route("profileCreate", {
      path: "/profile/create"
    });
  });

}).call(this);
