import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },

  actions: {
    addListing(params) {
      // var ourCategory = this.store.findAll('category')
      var route = this;
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      params.category.save();
      // newListing.save().then(function() {
      //   params.get('category').save().then(function() {
      //     route.transitionTo('index');
      //   });
      // });
      this.transitionTo('index');



    }
  }
});
