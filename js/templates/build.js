this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

this["App"]["Templates"]["dnd-image-upload"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<!-- Profile Pic preview/upload -->\n<div>\n    <img id=\"filedrop\" class=\"img-polaroid\"/><br/>\n    <span class=\"visible-desktop\">Drag and drop Image to upload a profile pic.</span>\n</div>");
  
});

this["App"]["Templates"]["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("\n");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Views.SearchForView", {hash:{
    'id': ("searchView")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n<div class=\"MainView\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Views.MapView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

this["App"]["Templates"]["login-form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n        <button type=\"submit\" class=\"btn btn-info\">Submit</button>\n        <button class=\"btn btn-link\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickCancelForgotPassword", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Cancel</button>\n\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n\n        <label for=\"inputPassword\">Password</label>\n        <input id=\"inputPassword\" class=\"input-block-level\" type=\"password\">\n\n        <label class=\"checkbox\">\n            <input type=\"checkbox\">\n            <span>Remember me</span>\n        </label>\n        <button type=\"submit\" class=\"btn\">Sign in</button>\n\n        <button class=\"btn btn-link\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickForgotPassword", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Forgot password?</button>\n        <button class=\"btn btn-link\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickCreateAccount", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Create account</button>\n\n\n        <button class=\"btn btn-facebook btn-block\"><i class=\"icon-facebook-sign\"></i> Sign in with Facebook</button>\n        <button class=\"btn btn-google-plus btn-block\"><i class=\"icon-google-plus-sign\"></i> Sign in with Google+</button>\n\n        ");
  return buffer;
  }

  data.buffer.push("<form class=\"LoginForm\">\n    <fieldset>\n\n        <label for=\"inputEmail\">Email address</label>\n        <input id=\"inputEmail\" class=\"input-block-level\" type=\"text\">\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.forgotPassword", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </fieldset>\n</form>");
  return buffer;
  
});

this["App"]["Templates"]["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <p>\n            <div class=\"well\">\n                <h1>You are already logged in.</h1>\n                <button class=\"btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Logout</button>\n            </div>\n        </p>\n\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "errorMessage", {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <!-- Place Holder for social media login -->\n        <div class=\"well-small\">\n            Login using a social network:<br/>\n            <a class=\"btn\"><img src=\"img/FB-f-Logo__blue_50.png\"/> Facebook</a>\n        </div>\n\n\n        <!-- Simple Login -->\n        <div class=\"well-small\">\n            <form ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                ");
  hashContexts = {'value': depth0,'type': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'type': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("username"),
    'type': ("text"),
    'placeholder': ("Username")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br/>\n                ");
  hashContexts = {'value': depth0,'type': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'type': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("password"),
    'type': ("password"),
    'placeholder': ("Password")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br/>\n                ");
  hashContexts = {'class': depth0,'type': depth0,'value': depth0};
  hashTypes = {'class': "STRING",'type': "STRING",'value': "STRING"};
  options = {hash:{
    'class': ("btn"),
    'type': ("submit"),
    'value': ("Log In")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </form>\n        </div>\n\n\n    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n            <div class=\"alert alert-error\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "errorMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n        ");
  return buffer;
  }

  data.buffer.push("\n\n<div class=\"container\">\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isLoggedIn", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>");
  return buffer;
  
});

this["App"]["Templates"]["map-view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"MapView\"></div>");
  
});

this["App"]["Templates"]["navbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n            <div style=\"float: left;\">\n                <img src=\"img/logosmall.png\">\n            </div>\n            <div class=\"brand\">urban<strong>fruit.ly</strong></div>\n            ");
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                        <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn\">Logout</button>\n                    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Sign in <b class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.Views.LoginFormView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            </li>\n                        </ul>\n                    ");
  return buffer;
  }

  data.buffer.push("<div id=\"topNavBar\" class=\"navbar\">\n    <div class=\"navbar-inner no-border\">\n        <div class=\"navbar-form\">\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            <ul class=\"nav pull-right\">\n                <li class=\"divider-vertical\"></li>\n                <li class=\"dropdown\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isLoggedIn", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </li>\n                <li class=\"divider-vertical\"></li>\n                <li>\n                    <button class=\"btn btn-facebook\" onclick=\"window.open('https://www.facebook.com/Urbanfruitly', '_blank')\"><i class=\"icon-facebook\"></i> Like us </button>\n                    <button class=\"btn btn-twitter\" onclick=\"window.open('https://twitter.com/urbanfruitly', '_blank')\"><i class=\"icon-twitter\"></i> Follow us </button>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

this["App"]["Templates"]["profile-create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("\n\n<div id=\"profile-div\" class=\"container-fluid\">\n\n    <div class=\"row\">\n        <!-- left column -->\n        <div class=\"span2 offset2\">\n            <span>Profile Picture</span><br/>\n            ");
  hashContexts = {'valueBinding': depth0,'srcBinding': depth0};
  hashTypes = {'valueBinding': "ID",'srcBinding': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DndImageUploadView", {hash:{
    'valueBinding': ("profilePic"),
    'srcBinding': ("profileSrc")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("<br/>\n            <input id=\"file-select\" type=\"file\" multiple=\"false\" /><br/>\n\n            <div id=\"file-upload-progress\" class=\"progress hide\">\n                <div class=\"bar\" style=\"width: 0%;\"></div>\n            </div>\n        </div>\n\n\n\n        <!-- Right column -->\n        <div class=\"span6 offset2\">\n\n            <p>\n                <label for=\"profile-bio\">About:</label>\n                ");
  hashContexts = {'id': depth0,'placeholder': depth0,'value': depth0};
  hashTypes = {'id': "STRING",'placeholder': "STRING",'value': "ID"};
  options = {hash:{
    'id': ("profile-bio"),
    'placeholder': ("Write a short bio of yourself."),
    'value': ("bio")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n            </p>\n\n\n            <p>\n                <button class=\"btn btn-primary\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createProfile", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Create</button>\n            </p>\n        </div>\n    </div>\n\n</div>\n\n");
  return buffer;
  
});

this["App"]["Templates"]["register"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("REGISTRATION PAGE PLACEHOLER");
  
});

this["App"]["Templates"]["search-for-view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"SearchFor\">\n\n    <div class=\"SearchInputArea\">\n        <div class=\"SearchInputHeader\">Find fruitly trees near you. Sweet!</div>\n        <div class=\"input-append\">\n            <input id=\"searchFor\" placeholder=\"Lemon tree, figs, tangerine, etc...\" type=\"text\" class=\"span3\" autocomplete=\"off\">\n            <button class=\"btn btn-success\" type=\"button\" ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doSearch", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-search icon-white\"></i> Search</button>\n        </div>\n    </div>\n\n</div>");
  return buffer;
  
});