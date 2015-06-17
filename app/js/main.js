;(function (){
  
  'use strict';

  // new contact collection

  var myContacts = new app.Collections.Contacts();

  // when my collection is successfully fetched, start a new instance of my main router, using my contacts collection.

  myContacts.fetch().success( function () {

    new app.Routers.MainRouter({
      collection: myContacts
    });

    // start monitoring hashchanges in the searchbar, and sending out the matching routes.

    Backbone.history.start();

  });

}());