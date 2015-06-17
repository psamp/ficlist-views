;(function (){
  
  'use strict';

  // set up global variables, so we can organize all our code into an app array that lives on window

  window.app = {};
  window.app.Models = {};
  window.app.Collections = {};
  window.app.Views = {};
  window.app.Routers = {};

  // add another item to the app array, this one telling us what our root is
  
  app.rootURL = 'http://tiy-515.herokuapp.com/collections/psamp-contacts2';

}());