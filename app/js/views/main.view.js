;(function (){
  
  'use strict';

  // extend/create views array inside of our app object. extend backbone's views extensiona array.

  app.Views.Main = Backbone.View.extend({

    className: 'main',

    // on submit of the form #newContact, run function newContact

    events: {
      'submit #newContact' : 'newContact'
    },

    template: hbs.main,

    initialize: function (options) {

      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    // send the collection for this view to json data, so my hbs can read through it.

    render: function () {
      this.$el.html(this.template({ contact: this.collection.toJSON() }));
    },

    // grab the values from the target of this event, in this case a form and use it to fill in the attributes of my new instance. add it to my collection and on success of database save, render the cached this.

    newContact: function (event) {

      event.preventDefault();

      var self = this,
          form = $(event.target),
          name = form.find('#contactName').val(),
          bio = form.find('#contactBio').val(),
          photoUrl = form.find('#contactPhotoUrl').val();

      var c = new app.Models.Contact({
        name: name,
        bio: bio,
        photoUrl: photoUrl
      });

      this.collection.add(c).save().success( function () {
        self.render();
        console.log('Saved contact!');
      });

    }

  });

}());