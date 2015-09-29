import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    listingDestroy(listing) {
      this.sendAction('listingDestroy', listing)
    },
    showUpdateForm() {
      this.sendAction('showUpdateForm')
    }
  }
});
