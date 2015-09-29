import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    listingUpdate(listing) {
      var params = {
        body: this.get('listing.body'),
        title: this.get('listing.title'),
      };
      debugger;
      this.sendAction('listingUpdate', params, listing)
    }
  }
});
