import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addListing() {
        var error_message = document.getElementById("listing-error");
      var params = {
        title: this.get('title'),
        owner: this.get('owner'),
        body: this.get('body'),
        category: this.get('category'),
        timestamp: Date.now()
      };
      if (params.title === undefined || params.owner === undefined || params.body === undefined || params.category === undefined) {
        error_message.innerHTML = '<b>All fields must be filled out</b><br>';
      } else {
        error_message.innerHTML = '';
        this.sendAction('addListing', params);

      }
    }
  }

});
