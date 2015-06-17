this["hbs"] = this["hbs"] || {};
this["hbs"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n  <li class=\"singleContact\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(((helper = (helper = helpers.photoUrl || (depth0 != null ? depth0.photoUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"photoUrl","hash":{},"data":data}) : helper)))
    + "\"></p></li>\n  \n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return " <div class= \"sidebar\">\n\n <div class=\"subtitle\"><h2> <a href=\"/#\">home</a> + <a href=\"/#about\">about</a></h2></div>\n\n  <div class=\"pageTitle\"><h1>ficlist</h1></div>\n\n<div class=\"contactCreateForm\">\n\n\n  <form class=\"newContact\" id=\"newContact\">\n\n    <input class=\"contactName\" id= \"contactName\" type=\"text\" placeholder=\"name\">\n\n    <input class=\"contactBio\" id=\"contactBio\" type=\"text\" placeholder=\"bio\">\n\n    <input id=\"contactPhotoUrl\" type=\"text\" placeholder=\"direct, full photo url\">\n\n    <button class=\"submitContact\"><i class=\"fa fa-plus-square\"></i></button>\n  </form>\n</div>\n\n</div>\n\n<ul class=\"contactList\">\n  \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.contact : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["single"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});