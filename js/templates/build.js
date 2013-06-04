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
  


  data.buffer.push("Place Holder\n\n<a class=\"btn btn-primary\">Login with Facebook</a>");
  
});

this["App"]["Templates"]["map-view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"MapView\"></div>");
  
});

this["App"]["Templates"]["navbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<!--/**\n    Navbar view handlebars template file.\n */-->\n\n<div id=\"topNavBar\" class=\"navbar\">\n    <div class=\"navbar-inner no-border\">\n        <div class=\"navbar-form\">\n            <div style=\"float: left;\">\n                <img src=\"img/logosmall.png\">\n            </div>\n            <div class=\"brand\">urban<strong>fruit.ly</strong></div>\n            <ul class=\"nav pull-right\">\n                <li class=\"divider-vertical\"></li>\n                <li>\n                    <button class=\"btn btn-danger\">Login</button>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>");
  
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