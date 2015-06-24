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
      console.log(this.collection);
      this.render();

      $('.container').html(this.el);
    },

    render: function () {
      var singleContact = this.collection.fetch(this.singleId);

      this.$el.html(this.template(singleContact));
    },

    deleteContact: function (e) {
      
      e.preventDefault;

      var button = $(event.target);
      var modelId = $(button).data('id');
      var whichContact = this.collection.get(modelId);

      whichContact.destroy().success( function () {
        
        // let me know it's destroyed

        console.log('ITEM DELETED');
      });
    
    }

  });

}());