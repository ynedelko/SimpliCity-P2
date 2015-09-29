import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },
  actions: {
    listingDestroy(listing) {
      listing.destroyRecord();
      this.transitionTo('index');
    },

    listingUpdate(listing, params) {
      debugger;
      Object.keys(params).forEach(function(key) {
           listing.set(key, params[key]);
       });
       listing.save();
     },
  },

});
