this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

this["App"]["Templates"]["map-view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"MapView\"></div>");
  
});

this["App"]["Templates"]["search-for-view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"SearchFor\">\n\n    <div class=\"SearchInputArea\">\n        <div class=\"SearchInputHeader\">Find fruitly trees near you. Sweet!</div>\n        <div class=\"input-append\">\n            <input id=\"searchFor\" placeholder=\"Lemon tree, figs, tangerine, etc...\" type=\"text\" class=\"span3\" autocomplete=\"off\">\n            <button class=\"btn btn-success\" type=\"button\" ");
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "doSearch", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("><i class=\"icon-search icon-white\"></i> Search</button>\n        </div>\n    </div>\n\n</div>");
  return buffer;
  
});