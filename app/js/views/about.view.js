;(function (){
  
  'use strict';

  // extend/create views array inside of our app object. extend backbone's views extensiona array.

  app.Views.AboutView = Backbone.View.extend({

    // div with a class of about

    className: '.about',

    // handlebars about template

    template: hbs.about,

    // on a new instace of this, call our render function on itself. add the html for this (div.about) to the container.

    initialize: function () {
      this.render();
      $('.container').html(this.el);
    },

    // the html for a a new instance of this view is our template

    render: function () {
      this.$el.html(this.template);
    }


  });

}());