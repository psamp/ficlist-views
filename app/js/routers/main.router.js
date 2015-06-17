;(function (){
  
  'use strict';

  // extend/create our Routers array inside of our app object. extend backbone's routers.

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {

      var args = options || {};
      this.collection = args.collection;
    },

    // empty string route is homePage function, contact/whatever that contact's id is singleContact function, about is about page function. when these routes are visited, the functions will run.

    routes: {
      '' : 'homePage',
      'contact/:id' : 'singleContact',
      'about' : 'aboutPage'
    },

    // these are the functions referenced above. each one creates a new instance of a specific view.

    aboutPage: function () {
      new app.Views.AboutView();
    },

    homePage: function () {
      new app.Views.Main({
        collection: this.collection
      });
    },

    singleContact: function (id) {
      new app.Views.SingleView({
        singleId: id,
        collection: this.collection
      });
    }

  });

}());