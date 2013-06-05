this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

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
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n                        ");
  hashContexts = {'tag': depth0,'class': depth0};
  hashTypes = {'tag': "STRING",'class': "STRING"};
  options = {hash:{
    'tag': ("button"),
    'class': ("btn btn-danger")
  },inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "login", options) : helperMissing.call(depth0, "linkTo", "login", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("Login");
  }

  data.buffer.push("<!--/**\n    Navbar view handlebars template file.\n */-->\n\n<div id=\"topNavBar\" class=\"navbar\">\n    <div class=\"navbar-inner no-border\">\n        <div class=\"navbar-form\">\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            <ul class=\"nav pull-right\">\n                <li class=\"divider-vertical\"></li>\n                <li>\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.log.call(depth0, "isLoggedIn", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isLoggedIn", {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>");
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