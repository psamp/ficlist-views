;(function (){
  
  'use strict';

  // extend/create views array inside of our app object. extend backbone's views extensiona array.

  app.Views.SingleView = Backbone.View.extend({

    className: 'single',

    template: hbs.single,

    events: {
      'click #delete' : 'deleteContact'
    },

    initialize: function (options){
      var args = options || {};
      this.singleId = args.singleId;
      this.collection = args.collection;

      this.render();

      $('.container').html(this.el);
    },

    render: {
      var singleContact = this.collection.get(this.singleId);
      this.$el(this.template(singleContact.toJSON()));
    },

    deleteContact: {
      var button = $(event.target),
          modelId = $(button).data('id'),
          whichContact = this.collection.get(modelID);

    whichContact.destroy().success( function () {
      
      // let me know it's destroyed

      console.log('ITEM DELETED');
    });
    
    }

  });

}());