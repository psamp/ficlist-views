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
this["hbs"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return " <div class= \"sidebar\">\n\n <div class=\"subtitle\"><h2> <a href=\"/#\">home</a> + <a href=\"/#about\">about</a></h2></div>\n\n  <div class=\"pageTitle\"><h1>ficlist</h1></div>\n\n    <div class=\"contactCreateForm\">\n\n\n      <form class=\"newContact\" id=\"newContact\">\n\n        <input class=\"contactName\" id= \"contactName\" type=\"text\" placeholder=\"name\">\n\n        <input class=\"contactBio\" id=\"contactBio\" type=\"text\" placeholder=\"bio\">\n\n        <input id=\"photo\" type=\"text\" placeholder=\"direct, full photo url\">\n\n        <button class=\"submitContact\"><i class=\"fa fa-plus-square\"></i></button>\n\n      </form>\n\n\n    </div>";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["single"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});