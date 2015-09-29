import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,
  actions: {
    listingDestroy(listing) {
      this.sendAction('listingDestroy', listing)
    },
    showUpdateForm() {
      this.set('showUpdateForm', !this.showUpdateForm)
    },
    listingUpdate(params, listing) {
      this.sendAction('listingUpdate', params, listing)
      this.set('showUpdateForm', !this.showUpdateForm)

    }
  }
});
