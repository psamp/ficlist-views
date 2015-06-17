;(function (){
  
  'use strict';

  app.Collections.Contacts = Backbone.Collection.extend({

    model: app.Models.Contact,

    comparator: 'title',

    url: app.rootURL

  });

}());