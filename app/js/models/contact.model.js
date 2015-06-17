// new contact model, extending Backbone's models

app.Models.Contact = Backbone.Model.extend ({

  // every time a new instance of this model is created (which happens on the form submission) log out all the info on the new contact. only here for dev purposes.

  initialize: function () {
    // this.logInfo();
  },

  idAdttribute: '_id', // I'm using MongoDB.

  // on form submission, these will be set to the form values of a particular instace.

  defaults: {
    name:'',
    bio: '',
    photoUrl: '',
  },

  // log info function referenced on init

  logInfo: function () {
    console.log(this.get('name'));
    console.log(this.get('bio'));
    console.log(this.get('photo'));
  }
});